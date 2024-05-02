import { UserRepositoryInterface } from "src/domain/repository/user.repository.interface";
import { UseCaseInterface } from "src/domain/usecase";
import { UserMapper } from "src/infra/mappers/user.mapper";

export class UserFindByIdUseCase implements UseCaseInterface {
    constructor(
        private readonly repository: UserRepositoryInterface
    ){}

    async execute(id: number) {
        const entity = await this.repository.findById({ id })
        return new UserMapper().asSingle(entity)
    }
}