import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UseCasesProxyModule } from '../use-cases-proxy/use-cases-proxy.module';

@Module({
  imports: [
    UseCasesProxyModule.register(),
  ],
  controllers: [
    UserController
  ],
})
export class ControllersModule {}
