import { UserMapperInterface } from "../../../../src/domain/mapper"
import { UserRepositoryInterface } from "../../../../src/domain/repository/user.repository.interface"
import { UserFindByIdUseCase } from "../../../../src/usecase/users"
import { userMapperInterfaceMock } from "../../../mock/domain/mapper/user-mapper-interface.mock"
import { userRepositoryInterfaceMock } from "../../../mock/domain/repository/user-repository-interface.mock"

describe('UserFindByIdUseCase', () => {
    let userFindByIdUseCase: UserFindByIdUseCase

    let userRepositoryInterface: UserRepositoryInterface = userRepositoryInterfaceMock
    let userMapperInterface: UserMapperInterface = userMapperInterfaceMock

    beforeEach(() => {
        userFindByIdUseCase = new UserFindByIdUseCase(userRepositoryInterface, userMapperInterface)
    })

    it('should be defined', () => {
        expect(userFindByIdUseCase)
    })

    describe('execute()', () => {

    })
})