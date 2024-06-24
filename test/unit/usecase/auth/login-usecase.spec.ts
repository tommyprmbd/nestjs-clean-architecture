import { AuthLoginDtoInterface } from "./../../../../src/domain/dtos"
import { EncryptInterface } from "./../../../../src/domain/encrypt"
import { UserInterface } from "./../../../../src/domain/models/user.interface"
import { UserRepositoryInterface } from "./../../../../src/domain/repository/user.repository.interface"
import { LoginUseCase } from "./../../../../src/usecase/auth/login.usecase"
import { authLoginDtoInterfaceMock } from "./../../../mock/domain/dtos/auth/auth-login-dto-interface.mock"
import { encryptInterfaceMock } from "./../../../mock/domain/encrypt/encrypt-interface.mock"
import { userRepositoryInterfaceMock } from "./../../../mock/domain/repository/user-repository-interface.mock"
import { AuthServiceInterface, AuthServicePayloadInterface } from "./../../../../src/domain/auth"
import { authServiceInterfaceMock } from "./../../../mock/domain/auth/auth-service-interface.mock"
import { authServicePayloadInterfaceMock } from "./../../../mock/domain/auth/auth-service-payload-interface.mock"

describe('LoginUseCase', () => {
    let loginUseCase: LoginUseCase
    let user: UserInterface = null

    let userRepositoryInterface: UserRepositoryInterface = userRepositoryInterfaceMock
    let authLoginDtoInterface: AuthLoginDtoInterface = authLoginDtoInterfaceMock
    let encryptInterface: EncryptInterface = encryptInterfaceMock
    let authServiceInterface: AuthServiceInterface = authServiceInterfaceMock
    let authServicePayloadInterface: AuthServicePayloadInterface = authServicePayloadInterfaceMock

    beforeEach(async () => {
        loginUseCase = new LoginUseCase(userRepositoryInterface, encryptInterface, authServiceInterface)
    })

    it('should be defined', () => {
        expect(loginUseCase).toBeDefined()
    })

    describe('execute()', () => {
        describe('userRepository.findByEmail()', () => {
            it('should be return User model', async () => {
                user = await userRepositoryInterface.findByEmail(authLoginDtoInterface.getEmail())
                expect(user).toBe(user)
            })
        })

        describe('encryptService.comparePassword()', () => {
            it('should be return boolean', async () => {
                let isMatch = await encryptInterface.comparePassword(authLoginDtoInterface.getPassword(), user.getPassword())
                expect(typeof isMatch).toBe('boolean')
            })
            it('should be return true', async () => {
                let isMatch = await encryptInterface.comparePassword(authLoginDtoInterface.getPassword(), user.getPassword())
                expect(isMatch).toBeTruthy()
            })
        })

        describe('authService.signIn()', () => {
            it('should be return string', async () => {
                let token = await authServiceInterface.login(authServicePayloadInterface)
                expect(typeof token).toBe('string')
            })
            it('should be return token', async () => {
                expect(await authServiceInterface.login(authServicePayloadInterface)).toBe('token')
            })
        })
    })
})