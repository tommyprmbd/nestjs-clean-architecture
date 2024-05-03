import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DbConfigInterface } from 'src/domain/config';
import { DbConfigEnum } from 'src/infra/common';

@Injectable()
export class DbConfigService implements DbConfigInterface {
    constructor(private readonly configService: ConfigService){}
    
    getType(): string {
        return this.configService.get<string>(DbConfigEnum.DB_TYPE)
    }

    getHost(): string {
        return this.configService.get<string>(DbConfigEnum.DB_HOST)
    }

    getPort(): number {
        return this.configService.get<number>(DbConfigEnum.DB_PORT)
    }

    getName(): string {
        return this.configService.get<string>(DbConfigEnum.DB_NAME)
    }

    getUsername(): string {
        return this.configService.get<string>(DbConfigEnum.DB_USERNAME)
    }

    getPassword(): string {
        return this.configService.get<string>(DbConfigEnum.DB_PASSWORD)
    }

    isSync(): boolean {
        return this.configService.get<boolean>(DbConfigEnum.IS_SYNC)
    }

    isAutoLoadEntities(): boolean {
        return this.configService.get<boolean>(DbConfigEnum.IS_AUTOLOAD_ENTITIES)
    }
}
