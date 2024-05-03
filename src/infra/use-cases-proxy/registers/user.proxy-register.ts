import { UsecaseProxyProviderType } from "src/domain/common";
import { UseCaseProxyRegisterInterface } from "src/domain/usecase";
import { UserRepository } from "src/infra/repositories/user.repository";
import { UserCreateUseCase, UserFindAllUseCase, UserFindByIdUseCase } from "src/usecase/users";
import { UseCasesProxy } from "../use-cases.proxy";
import { EncryptService } from "src/infra/encrypt";

export class UserProxyRegister implements UseCaseProxyRegisterInterface {
    registerExports(): Array<string> {
        return [
            UserFindAllUseCase.name,
            UserFindByIdUseCase.name,
            UserCreateUseCase.name,
        ]
    }

    registerProviders(): Array<UsecaseProxyProviderType> {
        return [
            {
                inject: [UserRepository],
                provide: UserFindAllUseCase.name,
                useFactory: (repository: UserRepository) => new UseCasesProxy(new UserFindAllUseCase(repository)) 
            },
            {
                inject: [UserRepository],
                provide: UserFindByIdUseCase.name,
                useFactory: (repository: UserRepository) => new UseCasesProxy(new UserFindByIdUseCase(repository)) 
            },
            {
                inject: [
                    UserRepository,
                    EncryptService,
                ],
                provide: UserCreateUseCase.name,
                useFactory: (repository: UserRepository, encrypt: EncryptService) => new UseCasesProxy(new UserCreateUseCase(repository, encrypt)) 
            },
        ]
    }
}