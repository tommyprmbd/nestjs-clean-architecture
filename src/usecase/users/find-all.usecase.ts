import { UserRepositoryInterface } from "src/domain/repository/user.repository.interface";
import { UseCaseInterface } from "src/domain/usecase";
import { FindManyOptions } from "typeorm";

export class UserFindAllUseCase implements UseCaseInterface {
    constructor(
        private readonly repository: UserRepositoryInterface
    ){}

    async execute(options?: FindManyOptions) {
        return await this.repository.findAll(options)
    }
}