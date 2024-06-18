import { CreateUserDtoInterface } from "../../../../src/domain/dtos"
import { EncryptInterface } from "../../../../src/domain/encrypt"
import { UserRepositoryInterface } from "../../../../src/domain/repository/user.repository.interface"
import { UserCreateUseCase } from "../../../../src/usecase/users"
import { createUserDtoInterfaceMock } from "../../../mock/domain/dtos/user/create-user-dto-interface.mock"
import { encryptInterfaceMock } from "../../../mock/domain/encrypt/encrypt-interface.mock"
import { userRepositoryInterfaceMock } from "../../../mock/domain/repository/user-repository-interface.mock"

describe('UserCreateUseCase', () => {
    let userCreateUseCase: UserCreateUseCase

    let userRepositoryInterface: UserRepositoryInterface = userRepositoryInterfaceMock
    let encryptInterface: EncryptInterface = encryptInterfaceMock
    let createUserDtoInterface: CreateUserDtoInterface = createUserDtoInterfaceMock

    beforeEach(async() => {
        userCreateUseCase = new UserCreateUseCase(userRepositoryInterface, encryptInterface)
    })

    it('should be defined', () => {
        expect(userCreateUseCase).toBeDefined()
    })

    describe('execute()', () => {
        describe('encrypt.hashPassword()', () => {
            it('should be return string', async () => {
                expect(await encryptInterface.hashPassword(createUserDtoInterface.getPassword()))
            })
        })
    })
})