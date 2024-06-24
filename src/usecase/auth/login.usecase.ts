import { AuthServiceInterface, AuthServicePayloadInterface } from "src/domain/auth";
import { AuthLoginResponseInterface } from "src/domain/dtos";
import { EncryptInterface } from "src/domain/encrypt";
import { UserRepositoryInterface } from "src/domain/repository/user.repository.interface";
import { UseCaseInterface } from "src/domain/usecase";
import { AuthLoginDto } from "src/infra/dtos";
import { UserMapper } from "src/infra/mappers/user.mapper";

export class LoginUseCase implements UseCaseInterface {
    constructor(
        private readonly userRepository: UserRepositoryInterface,
        private readonly encryptService: EncryptInterface,
        private readonly authService: AuthServiceInterface,
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

        const authServicePayload: AuthServicePayloadInterface = user.login()
        const access_token = await this.authService.login(Object.assign({}, authServicePayload))

        const response: AuthLoginResponseInterface = {
            access_token
        }

        return response
    }
}