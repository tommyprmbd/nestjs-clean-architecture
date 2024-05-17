import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbConfigService } from './db-config.service';
import { EncryptConfigService } from './encrypt-config.service';
import { AppConfigService } from './app-config.service';
import { SwaggerConfigService } from './swagger-config.service';
import { JwtConfigService } from './jwt-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        './environment/.env'
      ],
      ignoreEnvFile: false,
      isGlobal: true
    }),
  ],
  providers: [
    DbConfigService, 
    EncryptConfigService, 
    AppConfigService,
    SwaggerConfigService,
    JwtConfigService,
  ],
  exports: [
    DbConfigService, 
    EncryptConfigService, 
    AppConfigService,
    SwaggerConfigService,
    JwtConfigService,
  ],
})
export class EnvironmentModule {}
