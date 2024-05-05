import { UpdateUserDtoInterface } from "src/domain/dtos";
import { User } from "src/domain/models";
import { UseCaseInterface } from "src/domain/usecase";
import { UserRepository } from "src/infra/repositories/user.repository";

export class UserUpdateUseCase implements UseCaseInterface {
    constructor(
        private readonly repository: UserRepository,
    ){}

    async execute(updateUserDtoInterface: UpdateUserDtoInterface, id: number) {
        const user = new User()
        user.setFullName(updateUserDtoInterface.getFullName())

        return await this.repository.update(user, id)
    }
}