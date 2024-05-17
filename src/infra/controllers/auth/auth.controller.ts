import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AuthLoginDto } from 'src/infra/dtos';
import { BasePresenter } from 'src/infra/presenter/base.presenter';
import { UseCasesProxy } from 'src/infra/use-cases-proxy/use-cases.proxy';
import { AuthLoginUseCase } from 'src/usecase/auth/login.usecase';

@Controller('auth')
export class AuthController {
    constructor(
        @Inject(AuthLoginUseCase.name)
        private readonly loginUseCase: UseCasesProxy<AuthLoginUseCase>,
    ){}

    @Post('login')
    async login(@Body() creds: AuthLoginDto) {
        return new BasePresenter(await this.loginUseCase.getInstance().execute(creds))
    }
}
