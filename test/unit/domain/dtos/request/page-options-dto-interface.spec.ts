import { PageOptionsDtoInterface } from './../../../../../src/domain/dtos';
import { pageOptionsDtoInterfaceMock } from './../../../../mock/domain/dtos/request/page-options-dto-interface.mock';

describe('PageOptionsDtoInterface', () => {
  const pageOptionsDtoInterface: PageOptionsDtoInterface =
    pageOptionsDtoInterfaceMock;

  it('should be defined', () => {
    expect(pageOptionsDtoInterface).toBeDefined();
  });

  describe('getOrder', () => {
    it('should be return string', () => {
      expect(typeof pageOptionsDtoInterface.getOrder()).toBe('string');
    });
  });

  describe('getPage', () => {
    it('should be return number', () => {
      expect(typeof pageOptionsDtoInterface.getPage()).toBe('number');
    });
  });

  describe('getTake', () => {
    it('should be return number', () => {
      expect(typeof pageOptionsDtoInterface.getTake()).toBe('number');
    });
  });

  describe('getSkip', () => {
    it('should be return number', () => {
      expect(typeof pageOptionsDtoInterface.getSkip()).toBe('number');
    });
  });
});
