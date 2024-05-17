import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtConfigService } from '../config/environment';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({}),
  ],
  providers: [AuthService, JwtConfigService, JwtStrategy],
  exports: [AuthService, JwtConfigService, JwtStrategy],
})
export class AuthModule {}
