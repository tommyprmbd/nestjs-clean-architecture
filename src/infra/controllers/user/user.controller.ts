import { Controller, Get, Inject, Query } from '@nestjs/common';
import { BasePresenter } from 'src/infra/presenter/base.presenter';
import { UseCasesProxy } from 'src/infra/use-cases-proxy/use-cases.proxy';
import { UserFindAllUseCase } from 'src/usecase/users';
import { FindManyOptions } from 'typeorm';

@Controller('users')
export class UserController {
    constructor(
        @Inject(UserFindAllUseCase.name)
        private readonly findAllUseCase: UseCasesProxy<UserFindAllUseCase>,
    ){}

    @Get()
    async findAll(@Query() options: FindManyOptions) {
        return new BasePresenter(await this.findAllUseCase.getInstance().execute(options))
    }
}
