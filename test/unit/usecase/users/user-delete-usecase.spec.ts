import { UserRepositoryInterface } from "./../../../../src/domain/repository/user.repository.interface"
import { UserDeleteUseCase } from "./../../../../src/usecase/users"
import { userRepositoryInterfaceMock } from "./../../../mock/domain/repository/user-repository-interface.mock"

describe('UserDeleteUseCase', () => {
    let userDeleteUseCase: UserDeleteUseCase

    let userRepositoryInterface: UserRepositoryInterface = userRepositoryInterfaceMock

    beforeEach(() => {
        userDeleteUseCase = new UserDeleteUseCase(userRepositoryInterface)
    })

    it('should be defined', () => {
        expect(userDeleteUseCase)
    })

    describe('execute()', () => {

    })
})