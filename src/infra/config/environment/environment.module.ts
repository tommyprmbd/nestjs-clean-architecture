import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DbConfigService } from './db-config.service';
import { EncryptConfigService } from './encrypt-config.service';

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
  providers: [DbConfigService, EncryptConfigService],
  exports: [DbConfigService, EncryptConfigService],
})
export class EnvironmentModule {}
