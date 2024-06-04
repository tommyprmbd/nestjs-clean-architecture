import { EncryptConfigInterface } from "./../../../../src/domain/config"
import { encryptConfigInterfaceMock } from "./../../../mock/domain/config/encrypt-config-interface.mock"

describe('EncryptConfigInterface', () => {
    const encryptConfigInterface: EncryptConfigInterface = encryptConfigInterfaceMock

    it('should be defined', () => {
        expect(encryptConfigInterface).toBeDefined()
    })
})