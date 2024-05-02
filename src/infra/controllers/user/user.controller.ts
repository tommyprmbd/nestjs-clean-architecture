import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { BasePresenter } from 'src/infra/presenter/base.presenter';
import { UseCasesProxy } from 'src/infra/use-cases-proxy/use-cases.proxy';
import { UserFindAllUseCase } from 'src/usecase/users';
import { UserFindByIdUseCase } from 'src/usecase/users/find-by-id.usecase';
import { FindManyOptions } from 'typeorm';

@Controller('users')
export class UserController {
    constructor(
        @Inject(UserFindAllUseCase.name)
        private readonly findAllUseCase: UseCasesProxy<UserFindAllUseCase>,

        @Inject(UserFindByIdUseCase.name)
        private readonly findByIdUseCase: UseCasesProxy<UserFindByIdUseCase>,
    ){}

    @Get()
    async findAll(@Query() options: FindManyOptions) {
        return new BasePresenter(await this.findAllUseCase.getInstance().execute(options))
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return new BasePresenter(await this.findByIdUseCase.getInstance().execute(id))
    }
}
