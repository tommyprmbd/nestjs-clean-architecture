import { AuthLoginResponseInterface } from "src/domain/dtos";
import { EncryptInterface } from "src/domain/encrypt";
import { UserRepositoryInterface } from "src/domain/repository/user-repository.interface";
import { UseCaseInterface } from "src/domain/usecase";
import { AuthService } from "src/infra/auth";
import { AuthLoginDto } from "src/infra/dtos";
import { UserMapper } from "src/infra/mappers/user.mapper";

export class AuthLoginUseCase implements UseCaseInterface {
    constructor(
        private readonly userRepository: UserRepositoryInterface,
        private readonly encryptService: EncryptInterface,
        private readonly authService: AuthService,
    ){}

    async execute(creds: AuthLoginDto) {
        const user = await this.userRepository.findByEmail(creds.getEmail())
        if (!user) {
            return null
        }

        const isMatch = await this.encryptService.comparePassword(creds.getPassword(), user.getPassword())
        if (!isMatch) {
            return null
        }

        const payload = new UserMapper().asSingle(user)
        const access_token = await this.authService.signIn(Object.assign({}, payload))

        const response: AuthLoginResponseInterface = {
            access_token
        }

        return response
    }
}