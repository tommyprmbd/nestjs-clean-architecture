import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from './infra/config/type-orm/type-orm.module';
import { UseCasesProxyModule } from './infra/use-cases-proxy/use-cases-proxy.module';
import { ControllersModule } from './infra/controllers/controllers.module';
import { LoggerModule } from './infra/logger/logger.module';
import { AuthModule } from './infra/auth/auth.module';
import { CacheModule } from './infra/config/cache/cache.module';

@Module({
  imports: [
    UseCasesProxyModule.register(),
    TypeOrmModule,
    ControllersModule,
    LoggerModule,
    AuthModule,
    CacheModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
