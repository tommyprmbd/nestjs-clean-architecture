import { UsecaseProxyProviderType } from "src/domain/common"
import { UseCaseProxyRegisterInterface } from "src/domain/usecase"
import { PostRepository } from "src/infra/repositories"
import { PostCreateUseCase, PostFindAllUseCase } from "src/usecase/post"
import { UseCasesProxy } from "../use-cases.proxy"

export class PostProxyRegister implements UseCaseProxyRegisterInterface {
    registerExports(): string[] {
        return [
            PostCreateUseCase.name,
            PostFindAllUseCase.name,
        ]
    }

    registerProviders(): UsecaseProxyProviderType[] {
        return [
            {
                inject: [PostRepository],
                provide: PostCreateUseCase.name,
                useFactory: (repository: PostRepository) => new UseCasesProxy(new PostCreateUseCase(repository))
            },
            {
                inject: [PostRepository],
                provide: PostFindAllUseCase.name,
                useFactory: (repository: PostRepository) => new UseCasesProxy(new PostFindAllUseCase(repository))
            },
        ]
    }
}