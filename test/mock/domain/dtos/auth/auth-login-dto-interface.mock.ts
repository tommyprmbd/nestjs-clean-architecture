import { AuthLoginDtoInterface } from "src/domain/dtos";

export const authLoginDtoInterfaceMock: AuthLoginDtoInterface = {
    getEmail: jest.fn().mockReturnValue('username'),
    
    getPassword: jest.fn().mockReturnValue('password')
}