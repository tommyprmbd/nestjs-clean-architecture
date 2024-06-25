import { UsecaseProxyProviderType } from 'src/domain/common';
import { UseCaseProxyRegisterInterface } from 'src/domain/usecase';
import { UserRepository } from 'src/infra/repositories/user.repository';
import {
  UserCreateUseCase,
  UserDeleteUseCase,
  UserFindAllUseCase,
  UserFindByIdUseCase,
  UserUpdateUseCase,
} from 'src/usecase/users';
import { UseCasesProxy } from '../use-cases.proxy';
import { EncryptService } from 'src/infra/encrypt';
import { UserMapper } from 'src/infra/mappers';

export class UserProxyRegister implements UseCaseProxyRegisterInterface {
  registerExports(): Array<string> {
    return [
      UserFindAllUseCase.name,
      UserFindByIdUseCase.name,
      UserCreateUseCase.name,
      UserUpdateUseCase.name,
      UserDeleteUseCase.name,
    ];
  }

  registerProviders(): Array<UsecaseProxyProviderType> {
    return [
      {
        inject: [UserRepository, UserMapper],
        provide: UserFindAllUseCase.name,
        useFactory: (repository: UserRepository, mapper: UserMapper) =>
          new UseCasesProxy(new UserFindAllUseCase(repository, mapper)),
      },
      {
        inject: [UserRepository, UserMapper],
        provide: UserFindByIdUseCase.name,
        useFactory: (repository: UserRepository, mapper: UserMapper) =>
          new UseCasesProxy(new UserFindByIdUseCase(repository, mapper)),
      },
      {
        inject: [UserRepository, EncryptService],
        provide: UserCreateUseCase.name,
        useFactory: (repository: UserRepository, encrypt: EncryptService) =>
          new UseCasesProxy(new UserCreateUseCase(repository, encrypt)),
      },
      {
        inject: [UserRepository, EncryptService],
        provide: UserUpdateUseCase.name,
        useFactory: (repository: UserRepository, encrypt: EncryptService) =>
          new UseCasesProxy(new UserUpdateUseCase(repository, encrypt)),
      },
      {
        inject: [UserRepository],
        provide: UserDeleteUseCase.name,
        useFactory: (repository: UserRepository) =>
          new UseCasesProxy(new UserDeleteUseCase(repository)),
      },
    ];
  }
}
