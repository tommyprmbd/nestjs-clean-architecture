import {
  CacheInterceptor,
  CacheModule as OriginCacheModule,
} from '@nestjs/cache-manager';
import { Global, Module } from '@nestjs/common';
import { CacheOptions } from './cache.option';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Global()
@Module({
  imports: [OriginCacheModule.registerAsync(CacheOptions)],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  exports: [OriginCacheModule],
})
export class CacheModule {}
