import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { SwaggerConfigInterface } from "src/domain/config";

@Injectable()
export class SwaggerConfigService implements SwaggerConfigInterface {
    constructor(
        private readonly configService: ConfigService
    ){}

    getTitle(): string {
        return this.configService.get<string>('SWAGGER_TITLE', 'API Documentation.');
    }

    getDescription(): string {
        return this.configService.get<string>('SWAGGER_DESCRIPTION', 'API Description.');
    }

    getVersion(): string {
        return this.configService.get<string>('SWAGGER_VERSION', 'v1.0.0');
    }

    getPath(): string {
        return this.configService.get<string>('SWAGGER_PATH', 'docs');
    }
}