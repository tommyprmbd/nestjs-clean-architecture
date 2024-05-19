import { PageOptionsDtoInterface } from "src/domain/dtos";
import { UserRepositoryInterface } from "src/domain/repository/user-repository.interface";
import { UseCaseInterface } from "src/domain/usecase";
import { PaginateResultDto } from "src/infra/dtos/result/paginate-result.dto";
import { UserMapper } from "src/infra/mappers/user.mapper";

export class UserFindAllUseCase implements UseCaseInterface {
    constructor(
        private readonly repository: UserRepositoryInterface
    ){}

    async execute(options?: PageOptionsDtoInterface) {
        const entities = await this.repository.paginate(options)
        const data = new UserMapper().asList(entities.data)
        return new PaginateResultDto(data, entities.pagination)
    }
}