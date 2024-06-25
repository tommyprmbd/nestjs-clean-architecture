import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { EncryptInterface } from 'src/domain/encrypt';
import { EncryptConfigService } from '../config/environment';

@Injectable()
export class EncryptService implements EncryptInterface {
  constructor(private readonly encryptConfigService: EncryptConfigService) {}

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(
      password,
      this.encryptConfigService.getSaltRound(),
    );
  }

  async comparePassword(plain: string, hashed: string): Promise<boolean> {
    return await bcrypt.compare(plain, hashed);
  }
}
