import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CacheConfigInterface } from 'src/domain/config';

@Injectable()
export class CacheConfigService implements CacheConfigInterface {
  constructor(private readonly configService: ConfigService) {}

  getHost(): string {
    return this.configService.get<string>('REDIS_HOST');
  }

  getPort(): number {
    return this.configService.get<number>('REDIS_PORT');
  }

  getPassword(): string {
    return this.configService.get<string>('REDIS_PASSWORD');
  }

  isGlobal(): boolean {
    return this.configService.get<boolean>('REDIS_IS_GLOBAL');
  }
}
