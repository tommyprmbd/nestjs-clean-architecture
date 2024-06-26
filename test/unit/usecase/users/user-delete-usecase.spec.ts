import { TypeORMError } from 'typeorm';
import { UserDeleteUseCase } from '../../../../src/usecase/users';
import { UserRepositoryMock } from '../../../mock/infra/repository/user-repository.mock';

describe('UserDeleteUseCase', () => {
  let userDeleteUseCase: UserDeleteUseCase;

  let userRepository: UserRepositoryMock;

  const id: number = 1;

  beforeEach(async () => {
    userRepository = new UserRepositoryMock();
    userDeleteUseCase = new UserDeleteUseCase(userRepository);
  });

  it('should be defined', () => {
    expect(userDeleteUseCase).toBeDefined();
  });

  describe('execute()', () => {
    it('should delete user', async () => {
      userRepository.delete.mockResolvedValue(true);

      const result = await userDeleteUseCase.execute(id);

      expect(result).toBeTruthy();
      expect(userRepository.delete).toHaveBeenCalledWith(id);
    });

    it('should throw an error when user not found', async () => {
      userRepository.delete.mockRejectedValue(new TypeORMError());

      await expect(userDeleteUseCase.execute(id)).rejects.toThrow();
      expect(userRepository.delete).toHaveBeenCalledWith(id);
    });
  });
});
