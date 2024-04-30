import { Module } from '@nestjs/common';
import { EnvironmentService } from './environment.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

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
  providers: [EnvironmentService, ConfigService],
  exports: [EnvironmentService, ConfigService],
})
export class EnvironmentModule {}
