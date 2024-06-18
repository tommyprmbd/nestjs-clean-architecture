import { UserMapperInterface } from "./../../domain/mapper";
import { UserRepositoryInterface } from "./../../domain/repository/user.repository.interface";
import { UseCaseInterface } from "./../../domain/usecase";

export class UserFindByIdUseCase implements UseCaseInterface {
    constructor(
        private readonly repository: UserRepositoryInterface,
        private readonly mapper: UserMapperInterface,
    ){}

    async execute(id: number) {
        const entity = await this.repository.findById(id)
        return this.mapper.asSingle(entity)
    }
}