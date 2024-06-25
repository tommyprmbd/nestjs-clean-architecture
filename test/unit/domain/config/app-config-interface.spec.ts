/**
 * @ Author: Tommyprmbd
 * @ Create Time: 2024-06-04 13:57:14
 * @ Modified by: Tommyprmbd
 * @ Modified time: 2024-06-04 14:25:23
 * @ Description:
 */

import { AppEnvironmentConfigEnum } from './../../../../src/domain/common';
import { AppConfigInterface } from './../../../../src/domain/config';
import { appConfigInterfaceMock } from './../../../mock/domain/config/app-config-interface.mock';

describe('AppConfigInterface', () => {
  const port = 3000;
  const appConfigInterface: AppConfigInterface = appConfigInterfaceMock;

  it('should be defined', () => {
    expect(appConfigInterface).toBeDefined();
  });

  describe('getEnvironment', () => {
    it('should return string environment from AppEnvironmentConfigEnum', () => {
      expect(appConfigInterface.getEnvironment()).toBe(
        AppEnvironmentConfigEnum.LOCAL,
      );
    });
  });

  describe('getPort', () => {
    it('should return number', () => {
      expect(typeof appConfigInterface.getPort()).toBe('number');
    });

    it(`should return port ${port}`, () => {
      expect(appConfigInterface.getPort()).toBe(port);
    });
  });
});
