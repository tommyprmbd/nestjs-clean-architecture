import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UseCasesProxyModule } from '../use-cases-proxy/use-cases-proxy.module';
import { AuthController } from './auth/auth.controller';
import { PostController } from './post/post.controller';

@Module({
  imports: [
    UseCasesProxyModule.register(),
  ],
  controllers: [
    UserController,
    AuthController,
    PostController
  ],
})
export class ControllersModule {}
