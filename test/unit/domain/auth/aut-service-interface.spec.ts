import { AuthServiceInterface } from "./../../../../src/domain/auth"
import { authServiceInterfaceMock } from "./../../../mock/domain/auth/auth-service-interface.mock";

describe('AuthServiceInterface', () => {
    const authServiceInterface: AuthServiceInterface = authServiceInterfaceMock;

    it('should be defined', () => {
        expect(authServiceInterface).toBeDefined()
    })

    
})