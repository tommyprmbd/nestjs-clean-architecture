import { PageOptionsDtoInterface } from "src/domain/dtos";
import { PostRepositoryInterface } from "src/domain/repository";
import { UseCaseInterface } from "src/domain/usecase";
import { PaginateResultDto } from "src/infra/dtos/result/paginate-result.dto";
import { UserMapper } from "src/infra/mappers/user.mapper";

export class PostFindAllUseCase implements UseCaseInterface {
    constructor(
        private readonly repository: PostRepositoryInterface
    ){}

    async execute(options?: PageOptionsDtoInterface) {
        const entities = await this.repository.paginate(options)
        return new PaginateResultDto(entities.data, entities.pagination)
    }
}