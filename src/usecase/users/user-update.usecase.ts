import { UpdateUserDtoInterface } from "./../../domain/dtos";
import { User } from "./../../domain/models";
import { UserRepositoryInterface } from "./../../domain/repository/user.repository.interface";
import { UseCaseInterface } from "./../../domain/usecase";

export class UserUpdateUseCase implements UseCaseInterface {
    constructor(
        private readonly repository: UserRepositoryInterface,
    ){}

    async execute(updateUserDtoInterface: UpdateUserDtoInterface, id: number) {
        const user = new User()
        user.setFullName(updateUserDtoInterface.getFullName())

        return await this.repository.update(user, id)
    }
}