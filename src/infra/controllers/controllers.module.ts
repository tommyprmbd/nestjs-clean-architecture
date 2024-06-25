import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UseCasesProxyModule } from '../use-cases-proxy/use-cases-proxy.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [UseCasesProxyModule.register()],
  controllers: [UserController, AuthController],
})
export class ControllersModule {}
