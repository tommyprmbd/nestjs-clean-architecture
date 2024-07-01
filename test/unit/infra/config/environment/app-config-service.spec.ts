import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppConfigService } from './../../../../../src/infra/config/environment';
import { AppEnvironmentConfigEnum } from './../../../../../src/domain/common';

describe('AppConfigService', () => {
  let appConfigService: AppConfigService;
  let configService: ConfigService;

  const appEnvironment: AppEnvironmentConfigEnum =
    AppEnvironmentConfigEnum.LOCAL;
  const appPort = 3000;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppConfigService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    appConfigService = module.get<AppConfigService>(AppConfigService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(appConfigService).toBeDefined();
  });

  describe('getEnvironment()', () => {
    it('should return environment from config', () => {
      jest.spyOn(configService, 'get').mockReturnValue(appEnvironment);

      const result = appConfigService.getEnvironment();

      expect(configService.get).toHaveBeenCalledWith(
        'APP_ENVIRONMENT',
        AppEnvironmentConfigEnum.PRODUCTION,
      );
      expect(result).toBe(appEnvironment);
    });

    it('should return the default environment if not set in config', () => {
      jest
        .spyOn(configService, 'get')
        .mockImplementation((key, defaultValue) => defaultValue);

      const result = appConfigService.getEnvironment();

      expect(configService.get).toHaveBeenCalledWith(
        'APP_ENVIRONMENT',
        AppEnvironmentConfigEnum.PRODUCTION,
      );
      expect(result).toBe(AppEnvironmentConfigEnum.PRODUCTION);
    });
  });

  describe('getPort()', () => {
    it('should return value of APP_PORT', () => {
      jest.spyOn(configService, 'get').mockReturnValue(appPort);

      const result = appConfigService.getPort();

      expect(configService.get).toHaveBeenCalledWith('APP_PORT', 3000);
      expect(result).toBe(appPort);
    });

    it('should return the default port when port not set in config', () => {
      jest
        .spyOn(configService, 'get')
        .mockImplementation((key, defaultValue) => defaultValue);

      const result = appConfigService.getPort();

      expect(configService.get).toHaveBeenCalledWith('APP_PORT', 3000);
      expect(result).toBe(3000);
    });
  });
});
