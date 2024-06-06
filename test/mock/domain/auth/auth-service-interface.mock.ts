import { AuthServiceInterface } from "src/domain/auth";

export const authServiceInterfaceMock: AuthServiceInterface = {
    signIn: jest.fn().mockReturnValue('token'),
}