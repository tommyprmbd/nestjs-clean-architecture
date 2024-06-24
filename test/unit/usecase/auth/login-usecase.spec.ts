import { EncryptServiceMock } from "../../../mock/infra/encrypt/encrypt-service.mock";
import { AuthServiceInterface, AuthServicePayloadInterface } from "../../../../src/domain/auth";
import { EncryptInterface } from "../../../../src/domain/encrypt";
import { AuthLoginDto } from "../../../../src/infra/dtos";
import { LoginUseCase } from "../../../../src/usecase/auth/login.usecase"
import { UserRepositoryMock } from "../../../mock/infra/repository/user-repository.mock";
import { AuthServiceMock } from "../../../mock/infra/auth/auth-service.mock";

describe('LoginUseCase', () => {
    let loginUseCase: LoginUseCase

    let userRepository: UserRepositoryMock
    let encryptService: EncryptServiceMock
    let authService: AuthServiceMock

    let authLoginDto: AuthLoginDto = new AuthLoginDto()
    authLoginDto.email = 'example@mail.com'
    authLoginDto.password = 'P@ssw0rd'

    beforeEach(async () => {
        userRepository = new UserRepositoryMock()
        encryptService = new EncryptServiceMock()
        authService = new AuthServiceMock()
        loginUseCase = new LoginUseCase(userRepository, encryptService, authService)
    })

    it('should be defined', () => {
        expect(loginUseCase).toBeDefined()
    })

    it('should return null if user not found', async () => {
        userRepository.findByEmail.mockResolvedValue(null)

        const result = await loginUseCase.execute(authLoginDto)

        expect(result).toBeNull()
        expect(userRepository.findByEmail).toHaveBeenCalledWith(authLoginDto.email)
    })

    it('should return null if password does not match', async () => {
        const user = { getPassword: () => 'hashedPassword' }
        userRepository.findByEmail.mockResolvedValue(user)
        encryptService.comparePassword.mockResolvedValue(false)

        const result = await loginUseCase.execute(authLoginDto)

        expect(result).toBeNull()
        expect(userRepository.findByEmail).toHaveBeenCalledWith(authLoginDto.email)
        expect(encryptService.comparePassword).toHaveBeenCalledWith(authLoginDto.password, 'hashedPassword')
    })

    it('should return access token if login is successfull', async () => {
        const user = { getPassword: () => 'hashedPassword', login: jest.fn() }
        const authServicePayload: AuthServicePayloadInterface = {
            email: 'example@mail.com',
            fullName: 'P@ssw0rd',
            phone: '085708',
        }
        const accessToken = 'accessToken'

        userRepository.findByEmail.mockResolvedValue(user)
        encryptService.comparePassword.mockResolvedValue(true)
        user.login.mockReturnValue(authServicePayload)
        authService.login.mockResolvedValue(accessToken)

        const result = await loginUseCase.execute(authLoginDto)

        expect(result).toEqual({ access_token: accessToken })
        expect(userRepository.findByEmail).toHaveBeenCalledWith(authLoginDto.email)
        expect(encryptService.comparePassword).toHaveBeenCalledWith(authLoginDto.password, 'hashedPassword')
        expect(user.login).toHaveBeenCalled();
        expect(authService.login).toHaveBeenCalledWith(authServicePayload)
    })
})