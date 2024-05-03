import { CreateUserDtoInterface } from "src/domain/dtos";
import { EncryptInterface } from "src/domain/encrypt";
import { User } from "src/domain/models";
import { UserRepositoryInterface } from "src/domain/repository/user.repository.interface";
import { UseCaseInterface } from "src/domain/usecase";

export class UserCreateUseCase implements UseCaseInterface {
    constructor(
        private readonly repository: UserRepositoryInterface,
        private readonly encrypt: EncryptInterface,
    ){}

    async execute(createUserDtoInterface: CreateUserDtoInterface) {
        const hashedPassword = await this.encrypt.hashPassword(createUserDtoInterface.getPassword())

        const user = new User()
        user.setFullName(createUserDtoInterface.getFullName())
        user.setEmail(createUserDtoInterface.getEmail())
        user.setPassword(hashedPassword)
        user.setPhone(createUserDtoInterface.getPhone())
        user.setIsActive(User.DEF_ACTIVE_STATUS_AFTR_REG)

        return await this.repository.create(user)
    }
}