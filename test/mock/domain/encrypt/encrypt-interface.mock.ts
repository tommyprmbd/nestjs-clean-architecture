import { EncryptInterface } from "src/domain/encrypt";

export const encryptInterfaceMock: EncryptInterface = {
    hashPassword: jest.fn().mockReturnValue('password'),
    comparePassword: jest.fn().mockReturnValue(true),
}