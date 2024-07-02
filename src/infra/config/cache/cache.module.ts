import {
  CacheInterceptor,
  CacheModule as OriginCacheModule,
} from '@nestjs/cache-manager';
import { Global, Module } from '@nestjs/common';
import { CacheOptions } from './cache.option';
import { CacheConfigService } from '../environment/cache-config.service';
import { EnvironmentModule } from '../environment/environment.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Global()
@Module({
  imports: [
    OriginCacheModule.registerAsync({
      imports: [EnvironmentModule],
      inject: [CacheConfigService],
      useFactory: (cacheConfigService: CacheConfigService) =>
        CacheOptions(cacheConfigService),
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  exports: [OriginCacheModule],
})
export class CacheModule {}
