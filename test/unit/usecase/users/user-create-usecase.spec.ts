import { ConflictException } from '@nestjs/common';
import { User } from '../../../../src/domain/models';
import { UserCreateUseCase } from '../../../../src/usecase/users';
import { CreateUserDtoMock } from '../../../mock/infra/dtos/user/create-user-dto.mock';
import { EncryptServiceMock } from '../../../mock/infra/encrypt/encrypt-service.mock';
import { UserRepositoryMock } from '../../../mock/infra/repository/user-repository.mock';

// Mock User class
jest.mock('../../../../src/domain/models', () => {
  return {
    User: jest.fn().mockImplementation(() => {
      return {
        fullName: '',
        email: '',
        password: '',
        phone: '',
        create: jest.fn(function (dto: any) {
          this.fullName = dto.getFullName();
          this.email = dto.getEmail();
          this.password = dto.getPassword();
          this.phone = dto.getPhone();
        }), // Mocking the create method directly
      };
    }),
  };
});

describe('UserCreateUseCase', () => {
  let userCreateUseCase: UserCreateUseCase;

  let userRepository: UserRepositoryMock;
  let encryptService: EncryptServiceMock;
  let createUserDto: CreateUserDtoMock;

  const plainPassword = 'PlainPassword';
  const hashedPassword = 'HashedPassword';
  const fullName = 'John Doe';
  const email = 'example@mail.com';
  const phone = '08512341234';

  beforeEach(async () => {
    userRepository = new UserRepositoryMock();
    encryptService = new EncryptServiceMock();
    createUserDto = new CreateUserDtoMock();
    userCreateUseCase = new UserCreateUseCase(userRepository, encryptService);
  });

  it('should be defined', () => {
    expect(userCreateUseCase).toBeDefined();
  });

  describe('execute()', () => {
    it('should create a user successfully', async () => {
      const user = new User();

      // Mocking the behavior of the DTO and services
      createUserDto.getFullName.mockReturnValue(fullName);
      createUserDto.getEmail.mockReturnValue(email);
      createUserDto.getPassword.mockReturnValue(plainPassword);
      createUserDto.getPhone.mockReturnValue(phone);
      encryptService.hashPassword.mockResolvedValue(hashedPassword);
      userRepository.create.mockResolvedValue(user);
      userRepository.findByEmail.mockResolvedValue(null);

      // Mock setPassword to update the password inside the DTO
      createUserDto.setPassword.mockImplementation((newPassword) => {
        createUserDto.getPassword.mockReturnValue(newPassword);
      });

      // Mock User instance creation
      const result = await userCreateUseCase.execute(createUserDto);

      // Assertions
      expect(encryptService.hashPassword).toHaveBeenCalledWith(plainPassword);
      expect(createUserDto.setPassword).toHaveBeenCalledWith(hashedPassword);

      expect(userRepository.create).toHaveBeenCalledWith(
        expect.objectContaining({
          fullName,
          email,
          password: hashedPassword,
          phone,
        }),
      );

      expect(result).toBe(user);
    });

    it('should throw an error if email already in use', async () => {
      createUserDto.getEmail.mockReturnValue(email);
      userRepository.findByEmail.mockResolvedValue(new User());

      // Use try-catch to assert on the HttpException properties
      try {
        await userCreateUseCase.execute(createUserDto);
      } catch (error) {
        expect(error).toBeInstanceOf(ConflictException);
        expect(error.message).toBe('Email already in use');
      }

      expect(userRepository.findByEmail).toHaveBeenCalledWith(email);
      expect(userRepository.findByCondition).not.toHaveBeenCalled();
      expect(encryptService.hashPassword).not.toHaveBeenCalled();
      expect(createUserDto.setPassword).not.toHaveBeenCalled();
      expect(userRepository.create).not.toHaveBeenCalled();
    });

    it('should throw an erro if phone already in use', async () => {
      createUserDto.getEmail.mockReturnValue(email);
      createUserDto.getPhone.mockReturnValue(phone);
      userRepository.findByCondition.mockResolvedValue(new User());

      try {
        await userCreateUseCase.execute(createUserDto);
      } catch (error) {
        expect(error).toBeInstanceOf(ConflictException);
        expect(error.message).toBe('Phone already in use');
      }

      expect(userRepository.findByEmail).toHaveBeenCalledWith(email);
      expect(userRepository.findByCondition).toHaveBeenCalledWith({
        where: {
          phone,
        },
      });
      expect(encryptService.hashPassword).not.toHaveBeenCalled();
      expect(createUserDto.setPassword).not.toHaveBeenCalled();
      expect(userRepository.create).not.toHaveBeenCalled();
    });
  });
});
