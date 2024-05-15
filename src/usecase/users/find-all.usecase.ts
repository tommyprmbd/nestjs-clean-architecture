import { PageOptionsDtoInterface } from "src/domain/dtos";
import { UserRepositoryInterface } from "src/domain/repository/user.repository.interface";
import { UseCaseInterface } from "src/domain/usecase";
import { UserMapper } from "src/infra/mappers/user.mapper";

export class UserFindAllUseCase implements UseCaseInterface {
    constructor(
        private readonly repository: UserRepositoryInterface
    ){}

    async execute(options?: PageOptionsDtoInterface) {
        const entities = await this.repository.paginate(options)
        return entities
        // return new UserMapper().asList(entities)
    }
}