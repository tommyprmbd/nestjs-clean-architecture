import { UsecaseProxyProviderType } from "src/domain/common";
import { UseCaseProxyRegisterInterface } from "src/domain/usecase";
import { UserRepository } from "src/infra/repositories/user.repository";
import { UserFindAllUseCase, UserFindByIdUseCase } from "src/usecase/users";
import { UseCasesProxy } from "../use-cases.proxy";

export class UserProxyRegister implements UseCaseProxyRegisterInterface {
    registerExports(): Array<string> {
        return [
            UserFindAllUseCase.name,
            UserFindByIdUseCase.name,
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
            }
        ]
    }
}