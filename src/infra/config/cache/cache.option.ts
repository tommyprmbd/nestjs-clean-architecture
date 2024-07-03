import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';
import { CacheConfigService } from '../environment';
import { EnvironmentModule } from '../environment/environment.module';

export const CacheOptions: CacheModuleAsyncOptions = {
  isGlobal: true,
  imports: [EnvironmentModule],
  useFactory: async (cacheConfig: CacheConfigService) => {
    const store = await redisStore({
      socket: {
        host: cacheConfig.getHost(),
        port: cacheConfig.getPort(),
      },
      ttl: cacheConfig.getTTL(), // seconds
    });
    return {
      store: () => store,
    };
  },
  inject: [CacheConfigService],
};
