import { CreateUserDtoInterface } from "./../../domain/dtos";
import { EncryptInterface } from "./../../domain/encrypt";
import { UserRepositoryInterface } from "./../../domain/repository/user.repository.interface";
import { UseCaseInterface } from "./../../domain/usecase";

export class UserCreateUseCase implements UseCaseInterface {
    constructor(
        private readonly repository: UserRepositoryInterface,
        private readonly encrypt: EncryptInterface,
    ){}

    async execute(createUserDtoInterface: CreateUserDtoInterface) {
        const hashedPassword = await this.encrypt.hashPassword(createUserDtoInterface.getPassword())
        createUserDtoInterface.setPassword(hashedPassword)

        return await this.repository.create(createUserDtoInterface)
    }
}