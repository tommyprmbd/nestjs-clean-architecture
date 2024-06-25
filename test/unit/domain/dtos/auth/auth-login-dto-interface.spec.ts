import { AuthLoginDtoInterface } from './../../../../../src/domain/dtos';
import { authLoginDtoInterfaceMock } from './../../../../mock/domain/dtos/auth/auth-login-dto-interface.mock';

describe('AuthLoginDtoInterface', () => {
  const authLoginDtoInterface: AuthLoginDtoInterface =
    authLoginDtoInterfaceMock;

  it('should be defined', () => {
    expect(authLoginDtoInterface).toBeDefined();
  });

  describe('getEmail', () => {
    it('should be return string', () => {
      expect(typeof authLoginDtoInterface.getEmail()).toBe('string');
    });
  });

  describe('getPassword', () => {
    it('should be return string', () => {
      expect(typeof authLoginDtoInterface.getPassword()).toBe('string');
    });
  });
});
