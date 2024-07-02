import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';
import { CacheConfigInterface } from 'src/domain/config/cache-config.interface';
import { CacheConfigService } from '../environment';

export const CacheOptions = (
  cacheConfig: CacheConfigService,
): CacheModuleAsyncOptions => ({
  isGlobal: cacheConfig.isGlobal(),
  useFactory: async () => {
    const store = await redisStore({
      socket: {
        host: cacheConfig.getHost(),
        port: cacheConfig.getPort(),
      },
      ttl: 5, // seconds
    });
    return {
      store: () => store,
    };
  },
  inject: [CacheConfigService],
});
