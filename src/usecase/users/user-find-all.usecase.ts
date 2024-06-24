import { PageOptionsDtoInterface } from "./../../domain/dtos";
import { UserMapperInterface } from "./../../domain/mapper";
import { UserRepositoryInterface } from "./../../domain/repository/user.repository.interface";
import { UseCaseInterface } from "./../../domain/usecase";

export class UserFindAllUseCase implements UseCaseInterface {
    constructor(
        private readonly repository: UserRepositoryInterface,
        private readonly mapper: UserMapperInterface,
    ){}

    async execute(options?: PageOptionsDtoInterface) {
        let result = await this.repository.paginate(options)
        return this.mapper.fromPagination(result)
    }
}