import { UserInterface } from "./../../../../src/domain/models/user.interface";

export const userInterfaceMock: UserInterface = {
    getEmail: jest.fn().mockReturnValue('email'),

    setEmail: jest.fn().mockReturnValue(null),

    getPassword: jest.fn().mockReturnValue('password'),

    setPassword: jest.fn().mockReturnValue(null),

    getFullName: jest.fn().mockReturnValue('name'),

    setFullName: jest.fn().mockReturnValue(null),

    getPhone: jest.fn().mockReturnValue('085'),

    setPhone: jest.fn().mockReturnValue(null),

    isIsActive: jest.fn().mockReturnValue(true),

    setIsActive: jest.fn().mockReturnValue(null),
}