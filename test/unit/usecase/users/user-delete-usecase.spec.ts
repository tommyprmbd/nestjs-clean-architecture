import { userInterfaceMock } from './../../../mock/domain/model/user-interface.mock';
import { UserRepositoryInterface } from './../../../../src/domain/repository/user.repository.interface';
import { UserDeleteUseCase } from './../../../../src/usecase/users';
import { userRepositoryInterfaceMock } from './../../../mock/domain/repository/user-repository-interface.mock';
import { DeleteResultDtoInterface } from './../../../../src/domain/dtos';
import { deleteResultDtoInterfaceMock } from './../../../mock/domain/dtos/result/delete-result-dto-interface.mock';

describe('UserDeleteUseCase', () => {
  let userDeleteUseCase: UserDeleteUseCase;

  const userRepositoryInterface: UserRepositoryInterface =
    userRepositoryInterfaceMock;
  const deleteResultDtoInterface: DeleteResultDtoInterface =
    deleteResultDtoInterfaceMock;

  beforeEach(() => {
    userDeleteUseCase = new UserDeleteUseCase(userRepositoryInterface);
  });

  it('should be defined', () => {
    expect(userDeleteUseCase);
  });

  describe('execute()', () => {
    describe('repository.findById()', () => {
      it('should return User model', async () => {
        expect(await userRepositoryInterface.findById(1)).toBe(
          userInterfaceMock,
        );
      });
    });

    describe('repository.delete()', () => {
      it('should return DeleteResultDtoInterface', async () => {
        expect(await userRepositoryInterface.delete(1)).toBe(
          deleteResultDtoInterface,
        );
      });
    });
  });

  it('should return DeleteResultDtoInterface', async () => {
    expect(await userRepositoryInterface.delete(1)).toBe(
      deleteResultDtoInterface,
    );
  });
});
