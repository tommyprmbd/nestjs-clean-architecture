import { HttpException, HttpStatus } from '@nestjs/common';
import { UserFindByIdUseCase } from '../../../../src/usecase/users';
import { UserMapperMock } from '../../../mock/infra/mapper/user-mapper.mock';
import { UserRepositoryMock } from '../../../mock/infra/repository/user-repository.mock';

describe('UserFindByIdUseCase', () => {
  let userFindByIdUseCase: UserFindByIdUseCase;

  let userRepository: UserRepositoryMock;
  let userMapper: UserMapperMock;

  const id: number = 1;

  beforeEach(async () => {
    userRepository = new UserRepositoryMock();
    userMapper = new UserMapperMock();
    userFindByIdUseCase = new UserFindByIdUseCase(userRepository, userMapper);
  });

  it('should be defined', () => {
    expect(userFindByIdUseCase).toBeDefined();
  });

  describe('execute()', () => {
    it('should return user when it successfully', async () => {
      const mockUser = {
        fullName: 'John Doe',
        email: 'example01@mail.com',
        password: 'plainPassword',
        phone: '0851',
      };

      userRepository.findById.mockResolvedValue(mockUser);
      userMapper.asSingle.mockReturnValue(mockUser);

      const result = await userFindByIdUseCase.execute(id);

      expect(result).toBe(mockUser);
      expect(userRepository.findById).toHaveBeenCalledWith(id);
      expect(userMapper.asSingle).toHaveBeenCalledWith(mockUser);
    });

    it('should throw error when user not found', async () => {
      userRepository.findById.mockResolvedValue(null);

      try {
        await userFindByIdUseCase.execute(id);
      } catch (error) {
        expect(error).toBeInstanceOf(HttpException);
        expect(error.getStatus()).toBe(HttpStatus.NOT_FOUND);
        expect(error.message).toBe('User not found');
      }

      expect(userRepository.findById).toHaveBeenCalledWith(id);
      expect(userMapper.asSingle).not.toHaveBeenCalled();
    });
  });
});
