import { UpdateResultDtoInterface, UpdateUserDtoInterface } from "./../../../../src/domain/dtos";
import { User } from "./../../../../src/domain/models"
import { updateUserDtoInterfaceMock } from "./../../../mock/domain/dtos/user/update-user-dto-interface.mock";
import { UserRepositoryInterface } from "./../../../../src/domain/repository/user.repository.interface";
import { userRepositoryInterfaceMock } from "./../../../mock/domain/repository/user-repository-interface.mock";
import { updateResultDtoInterfaceMock } from "./../../../mock/domain/dtos/result/update-result-dto-interface.mock";
import { UserUpdateUseCase } from "./../../../../src/usecase/users";
import { EncryptInterface } from "./../../../../src/domain/encrypt";
import { encryptInterfaceMock } from "./../../../mock/domain/encrypt/encrypt-interface.mock";

describe('UserUpdateUseCase', () => {
    let updateUserDtoInterface: UpdateUserDtoInterface = updateUserDtoInterfaceMock
    let updateResultDtoInterface: UpdateResultDtoInterface = updateResultDtoInterfaceMock
    let userRepository: UserRepositoryInterface = userRepositoryInterfaceMock
    let encryptInterface: EncryptInterface = encryptInterfaceMock
    
    let userUpdateUseCase: UserUpdateUseCase
    const user: User = new User();
    const id: number = 1
    beforeEach(async() => {
        userUpdateUseCase = new UserUpdateUseCase(userRepository, encryptInterface)
    })

    it('should be defined', () => {
      expect(userUpdateUseCase).toBeDefined()
    })

    describe('execute()', () => {
        describe('user.setFullName()', () => {
            it('should be user.getFullName() == userDto.getFullName()', () => {
                user.setFullName(updateUserDtoInterface.getFullName())
                expect(user.getFullName()).toBe(updateUserDtoInterface.getFullName())
            })

            it('should be return string', () => {
                user.setFullName(updateUserDtoInterface.getFullName())
                expect(typeof user.getFullName())
            })
        })

        describe('repository.update()', () => {
            it('should be return UpdateResultDtoInterface', async () => {
                expect(userRepository.update(user, id)).toBe(updateResultDtoInterface)
            })
        })
    })
})