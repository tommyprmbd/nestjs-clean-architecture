import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { AuthServiceInterface } from 'src/domain/auth';
import { JwtConfigService } from '../config/environment';

@Injectable()
export class AuthService implements AuthServiceInterface {
    constructor(
        private readonly jwtConfig: JwtConfigService,
        private readonly jwtService: JwtService,
    ){}

    async signIn(payload: any) {
        const options: JwtSignOptions = {
            secret: this.jwtConfig.getSecret(),
            algorithm: 'HS512'
        }

        return this.jwtService.signAsync(payload, options);
    }
}
