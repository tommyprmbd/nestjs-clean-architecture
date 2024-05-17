import { UsecaseProxyProviderType } from "src/domain/common";
import { UseCaseProxyRegisterInterface } from "src/domain/usecase";
import { AuthService } from "src/infra/auth";
import { EncryptService } from "src/infra/encrypt";
import { UserRepository } from "src/infra/repositories/user.repository";
import { AuthLoginUseCase } from "src/usecase/auth/login.usecase";
import { UseCasesProxy } from "../use-cases.proxy";

export class AuthProxyRegister implements UseCaseProxyRegisterInterface {
    registerExports(): string[] {
        return [
            AuthLoginUseCase.name,
        ]
    }

    registerProviders(): UsecaseProxyProviderType[] {
        return [
            {
                inject: [UserRepository, EncryptService, AuthService],
                provide: AuthLoginUseCase.name,
                useFactory: (
                    repository: UserRepository,
                    encrypt: EncryptService,
                    auth: AuthService
                ) => new UseCasesProxy(new AuthLoginUseCase(repository, encrypt, auth))
            }
        ]
    }
}