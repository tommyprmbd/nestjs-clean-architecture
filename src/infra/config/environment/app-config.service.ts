import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppEnvironmentConfigEnum } from './../../../../src/domain/common';
import { AppConfigInterface } from './../../../../src/domain/config';

@Injectable()
export class AppConfigService implements AppConfigInterface {
  constructor(private readonly configService: ConfigService) {}

  getEnvironment(): AppEnvironmentConfigEnum {
    return this.configService.get<AppEnvironmentConfigEnum>(
      'APP_ENVIRONMENT',
      AppEnvironmentConfigEnum.PRODUCTION,
    );
  }

  getPort(): number {
    return this.configService.get<number>('APP_PORT', 3000);
  }
}
