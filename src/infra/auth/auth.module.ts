import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtConfigService } from '../config/environment';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({}),
  ],
  providers: [AuthService, JwtConfigService],
  exports: [AuthService, JwtConfigService],
})
export class AuthModule {}
