import { UsecaseProxyProviderType } from "src/domain/common";
import { UseCaseProxyRegisterInterface } from "src/domain/usecase";
import { AuthService } from "src/infra/auth";
import { EncryptService } from "src/infra/encrypt";
import { UserRepository } from "src/infra/repositories/user.repository";
import { LoginUseCase } from "src/usecase/auth/login.usecase";
import { UseCasesProxy } from "../use-cases.proxy";

export class AuthProxyRegister implements UseCaseProxyRegisterInterface {
    registerExports(): string[] {
        return [
            LoginUseCase.name,
        ]
    }

    registerProviders(): UsecaseProxyProviderType[] {
        return [
            {
                inject: [UserRepository, EncryptService, AuthService],
                provide: LoginUseCase.name,
                useFactory: (
                    repository: UserRepository,
                    encrypt: EncryptService,
                    auth: AuthService
                ) => new UseCasesProxy(new LoginUseCase(repository, encrypt, auth))
            }
        ]
    }
}