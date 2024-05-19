import { CreatePostDtoInterface } from "src/domain/dtos";
import { PostRepositoryInterface } from "src/domain/repository";
import { UseCaseInterface } from "src/domain/usecase";

export class PostCreateUseCase implements UseCaseInterface {
    constructor(
        private readonly repository: PostRepositoryInterface
    ){}

    async execute(data: CreatePostDtoInterface) {
        return await this.repository.create(data);
    }
}