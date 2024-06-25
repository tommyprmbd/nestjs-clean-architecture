import { UserMapperInterface } from '../../../../src/domain/mapper';
import { UserRepositoryInterface } from '../../../../src/domain/repository/user.repository.interface';
import { UserFindByIdUseCase } from '../../../../src/usecase/users';
import { userMapperInterfaceMock } from '../../../mock/domain/mapper/user-mapper-interface.mock';
import { userRepositoryInterfaceMock } from '../../../mock/domain/repository/user-repository-interface.mock';
import { UserInterface } from '../../../../src/domain/models/user.interface';
import { userInterfaceMock } from '../../../mock/domain/model/user-interface.mock';

describe('UserFindByIdUseCase', () => {
  let userFindByIdUseCase: UserFindByIdUseCase;

  const userRepositoryInterface: UserRepositoryInterface =
    userRepositoryInterfaceMock;
  const userMapperInterface: UserMapperInterface = userMapperInterfaceMock;
  const userInterface: UserInterface = userInterfaceMock;

  beforeEach(() => {
    userFindByIdUseCase = new UserFindByIdUseCase(
      userRepositoryInterface,
      userMapperInterface,
    );
  });

  it('should be defined', () => {
    expect(userFindByIdUseCase);
  });

  describe('execute()', () => {
    describe('repository.findById()', () => {
      it('should be return User', async () => {
        expect(await userRepositoryInterface.findById(1)).toBe(userInterface);
      });
    });

    describe('mapper.asSingle()', () => {
      it('should be return User', async () => {
        let result = await userRepositoryInterface.findById(1);
        result = userMapperInterfaceMock.asSingle(result);
        expect(result).toBe(userInterfaceMock);
      });
    });
  });

  it('should be return User', async () => {
    let result = await userRepositoryInterface.findById(1);
    result = userMapperInterfaceMock.asSingle(result);
    expect(result).toBe(userInterfaceMock);
  });
});
