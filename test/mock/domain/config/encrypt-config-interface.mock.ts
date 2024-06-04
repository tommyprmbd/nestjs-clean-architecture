import { EncryptConfigInterface } from "src/domain/config";

export const encryptConfigInterfaceMock: EncryptConfigInterface = {
    getSaltRound: jest.fn().mockReturnValue(1)
}