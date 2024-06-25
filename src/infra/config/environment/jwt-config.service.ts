import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtConfigInterface } from 'src/domain/config';

@Injectable()
export class JwtConfigService implements JwtConfigInterface {
  constructor(private readonly configService: ConfigService) {}

  getSecret(): string {
    return this.configService.get<string>('JWT_SECRET', 'secret');
  }

  getAlgorithm(): string {
    return this.configService.get<string>('JWT_ALGORITM', 'HS512');
  }
}
