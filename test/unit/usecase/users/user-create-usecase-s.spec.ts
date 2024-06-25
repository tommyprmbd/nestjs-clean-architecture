import { CreateUserDto } from "src/infra/dtos"
import { UserCreateUseCase } from "src/usecase/users"
import { EncryptServiceMock } from "test/mock/infra/encrypt/encrypt-service.mock"
import { UserRepositoryMock } from "test/mock/infra/repository/user-repository.mock"

describe('UserCreateUseCase', () => {
    let userCreateUseCase: UserCreateUseCase

    let userRepository: UserRepositoryMock
    let encryptService: EncryptServiceMock

    let createUserDto: CreateUserDto = new CreateUserDto()
    createUserDto.email = 'example@mail.com';
    createUserDto.fullName = 'John Doe';
    createUserDto.phone = '08512341234';
    createUserDto.password = 'P@ssw0rd';

    beforeEach(async () => {
        userCreateUseCase = new UserCreateUseCase(userRepository, encryptService)
    })

    it('should be defined', () => {
        expect(userCreateUseCase).toBeDefined()
    })

    describe('execute()', () => {
        it('should return CreateResultDtoInterface object if create is success', async () => {
            
        })

        it('should throw an error if email already exists', async () => {
            
        })
    })

})