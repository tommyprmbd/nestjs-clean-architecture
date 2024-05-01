import { UserRepositoryInterface } from "src/domain/repository/user.repository.interface";
import { UseCaseInterface } from "src/domain/usecase";
import { UserMapper } from "src/infra/mappers/user.mapper";
import { FindManyOptions } from "typeorm";

export class UserFindAllUseCase implements UseCaseInterface {
    constructor(
        private readonly repository: UserRepositoryInterface
    ){}

    async execute(options?: FindManyOptions) {
        const entity = await this.repository.findAll(options)
        return new UserMapper().asList(entity)
    }
}