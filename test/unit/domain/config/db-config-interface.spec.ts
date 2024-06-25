import { DbConfigInterface } from './../../../../src/domain/config';
import { dbConfigInterfaceMock } from './../../../mock/domain/config/db-config-interface.mock';

describe('DbConfigInterface', () => {
  const dbConfigInterface: DbConfigInterface = dbConfigInterfaceMock;

  it('should be defined', () => {
    expect(dbConfigInterface).toBeDefined();
  });

  describe('getType', () => {
    it('should return string', () => {
      expect(typeof dbConfigInterface.getType()).toBe('string');
    });
  });

  describe('getHost', () => {
    it('should return number', () => {
      expect(typeof dbConfigInterface.getHost()).toBe('string');
    });
  });

  describe('getPort', () => {
    it('should return number', () => {
      expect(typeof dbConfigInterface.getPort()).toBe('number');
    });
  });

  describe('getName', () => {
    it('should return string', () => {
      expect(typeof dbConfigInterface.getName()).toBe('string');
    });
  });

  describe('getUsername', () => {
    it('should return string', () => {
      expect(typeof dbConfigInterface.getUsername()).toBe('string');
    });
  });

  describe('getPassword', () => {
    it('should return string', () => {
      expect(typeof dbConfigInterface.getPassword()).toBe('string');
    });
  });

  describe('isSync', () => {
    it('should return boolean', () => {
      expect(typeof dbConfigInterface.isSync()).toBe('boolean');
    });
  });

  describe('isAutoLoadEntities', () => {
    it('should return boolean', () => {
      expect(typeof dbConfigInterface.isAutoLoadEntities()).toBe('boolean');
    });
  });
});
