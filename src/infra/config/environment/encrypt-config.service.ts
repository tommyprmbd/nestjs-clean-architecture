import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { EncryptConfigInterface } from "src/domain/config";

@Injectable()
export class EncryptConfigService implements EncryptConfigInterface {
    constructor(
        private readonly configService: ConfigService
    ){}

    getSaltRound(): string|number {
        return this.configService.get<string|number>('ENCRYPT_SALT_ROUND', 10)
    }
}