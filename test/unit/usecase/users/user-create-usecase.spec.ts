import {
  CreateResultDtoInterface,
  CreateUserDtoInterface,
} from '../../../../src/domain/dtos';
import { EncryptInterface } from '../../../../src/domain/encrypt';
import { UserRepositoryInterface } from '../../../../src/domain/repository/user.repository.interface';
import { UserCreateUseCase } from '../../../../src/usecase/users';
import { createUserDtoInterfaceMock } from '../../../mock/domain/dtos/user/create-user-dto-interface.mock';
import { encryptInterfaceMock } from '../../../mock/domain/encrypt/encrypt-interface.mock';
import { userRepositoryInterfaceMock } from '../../../mock/domain/repository/user-repository-interface.mock';
import { createResultDtoInterfaceMock } from './../../../mock/domain/dtos/result/create-result-dto-interface.mock';

describe('UserCreateUseCase', () => {
  let userCreateUseCase: UserCreateUseCase;

  const userRepositoryInterface: UserRepositoryInterface =
    userRepositoryInterfaceMock;
  const encryptInterface: EncryptInterface = encryptInterfaceMock;
  const createUserDtoInterface: CreateUserDtoInterface =
    createUserDtoInterfaceMock;
  const createResultDtoInterface: CreateResultDtoInterface =
    createResultDtoInterfaceMock;

  let hashedPassword: string = null;
  beforeEach(async () => {
    userCreateUseCase = new UserCreateUseCase(
      userRepositoryInterface,
      encryptInterface,
    );
  });

  it('should be defined', () => {
    expect(userCreateUseCase).toBeDefined();
  });

  describe('execute()', () => {
    describe('encrypt.hashPassword()', () => {
      it('should be return string', async () => {
        expect(
          await encryptInterface.hashPassword(
            createUserDtoInterface.getPassword(),
          ),
        );
      });

      it('should be hashed string', async () => {
        const plainPassword = createUserDtoInterface.getPassword();
        hashedPassword = await encryptInterface.hashPassword(plainPassword);

        expect(plainPassword).not.toBe(hashedPassword);
      });
    });

    describe('userRepository.create()', () => {
      it('should be return CreateResultDtoInterface', async () => {
        expect(userRepositoryInterface.create(createUserDtoInterface)).toBe(
          createResultDtoInterface,
        );
      });
    });
  });
});
