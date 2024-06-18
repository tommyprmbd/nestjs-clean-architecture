import { CreateUserDtoInterface } from "src/domain/dtos";

export const createUserDtoInterfaceMock: CreateUserDtoInterface = {
    getFullName: jest.fn().mockReturnValue('fullname'),

    getEmail: jest.fn().mockReturnValue('email'),

    getPassword: jest.fn().mockReturnValue('password'),

    getPhone: jest.fn().mockReturnValue('085708'),

    setPassword: jest.fn().mockReturnValue(null),
}