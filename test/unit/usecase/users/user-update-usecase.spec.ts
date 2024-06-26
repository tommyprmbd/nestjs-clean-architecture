import { UpdateUserDtoMock } from '../../../mock/infra/dtos/user/update-user-dto.mock';
import { UserUpdateUseCase } from '../../../../src/usecase/users';
import { EncryptServiceMock } from '../../../mock/infra/encrypt/encrypt-service.mock';
import { UserRepositoryMock } from '../../../mock/infra/repository/user-repository.mock';
import { User } from '../../../../src/domain/models';
import { isEmpty } from '../../../../src/lib/utils/helper';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('UserUpdateUseCase', () => {
  let userUpdateUseCase: UserUpdateUseCase;

  let userRepository: UserRepositoryMock;
  let encryptService: EncryptServiceMock;
  let updateUserDto: UpdateUserDtoMock;

  const plainPassword: string = 'PlainPassword';
  const hashedPassword: string = 'HashedPassword';
  const fullName: string = 'John Doe';
  const updatedFullName: string = 'Harry';
  const id: number = 1;

  beforeEach(async () => {
    userRepository = new UserRepositoryMock();
    encryptService = new EncryptServiceMock();
    updateUserDto = new UpdateUserDtoMock();
    userUpdateUseCase = new UserUpdateUseCase(userRepository, encryptService);
  });

  it('should be defined', () => {
    expect(userUpdateUseCase).toBeDefined();
  });

  describe('execute()', () => {
    it('should update user successfully even password not provided', async () => {
      const user = new User();
      user.fullName = fullName; // initial fullName

      updateUserDto.getFullName.mockReturnValue(updatedFullName);
      updateUserDto.getPassword.mockReturnValue(null);

      userRepository.findById.mockResolvedValue(user);
      userRepository.update.mockResolvedValue(user);

      const result = await userUpdateUseCase.execute(updateUserDto, id);

      expect(result).toBe(user);
      expect(userRepository.findById).toHaveBeenLastCalledWith(id);
      expect(updateUserDto.setPassword).not.toHaveBeenCalled();
      expect(encryptService.hashPassword).not.toHaveBeenCalled();
      expect(userRepository.update).toHaveBeenCalledWith(
        expect.objectContaining({
          fullName: updatedFullName,
        }),
        id,
      );
      // Directly check if the fullName property on the user object is updated
      // expect(user.fullName).toBe(updatedFullName);
    });

    it('should update password when its provided', async () => {
      const user = new User();
      user.fullName = fullName;

      updateUserDto.getFullName.mockReturnValue(updatedFullName);
      updateUserDto.getPassword.mockReturnValue(plainPassword);

      userRepository.findById.mockResolvedValue(user);
      encryptService.hashPassword.mockResolvedValue(hashedPassword);
      userRepository.update.mockResolvedValue(user);

      updateUserDto.setPassword.mockImplementation((newPassword) => {
        updateUserDto.getPassword.mockReturnValue(newPassword);
      });

      const result = await userUpdateUseCase.execute(updateUserDto, id);

      expect(userRepository.findById).toHaveBeenCalledWith(id);
      expect(isEmpty(updateUserDto.getPassword)).toBeFalsy();
      expect(encryptService.hashPassword).toHaveBeenCalledWith(plainPassword);
      expect(updateUserDto.setPassword).toHaveBeenCalledWith(hashedPassword);
      expect(userRepository.update).toHaveBeenCalledWith(
        expect.objectContaining({
          fullName: updatedFullName,
          password: hashedPassword,
        }),
        id,
      );
      expect(result).toBe(user);
    });

    it('should throw an error when id is not exist', async () => {
      userRepository.findById.mockResolvedValue(null);

      try {
        await userUpdateUseCase.execute(updateUserDto, id);
      } catch (error) {
        expect(error).toBeInstanceOf(HttpException);
        expect(error.getStatus()).toBe(HttpStatus.NOT_FOUND);
        expect(error.message).toBe('User not found');
      }

      expect(userRepository.findById).toHaveBeenCalledWith(id);
      expect(userRepository.update).not.toHaveBeenCalled();
      expect(encryptService.hashPassword).not.toHaveBeenCalled();
      expect(updateUserDto.setPassword).not.toHaveBeenCalled();
    });
  });
});
