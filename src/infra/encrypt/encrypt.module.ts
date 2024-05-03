import { Module } from '@nestjs/common';
import { EncryptService } from './encrypt.service';
import { EnvironmentModule } from '../config/environment/environment.module';

@Module({
  imports: [
    EnvironmentModule
  ],
  providers: [
    EncryptService
  ],
  exports: [
    EncryptService
  ],
})
export class EncryptModule {}
