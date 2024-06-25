import { JwtConfigInterface } from './../../../../src/domain/config';
import { jwtConfigInterfaceMock } from './../../../mock/domain/config/jwt-config-interface.mock';

describe('JwtConfigInterface', () => {
  const jwtConfigInterface: JwtConfigInterface = jwtConfigInterfaceMock;

  it('should be defined', () => {
    expect(jwtConfigInterface).toBeDefined();
  });

  describe('getSecret', () => {
    it('should be return string', () => {
      expect(typeof jwtConfigInterface.getSecret()).toBe('string');
    });
  });

  describe('getAlgorithm', () => {
    it('should be return string', () => {
      expect(typeof jwtConfigInterface.getAlgorithm()).toBe('string');
    });
  });
});
