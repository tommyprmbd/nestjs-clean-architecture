import { Body, Controller, Get, Inject, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from 'src/infra/dtos/user/create-user.dto';
import { BasePresenter } from 'src/infra/presenter/base.presenter';
import { UseCasesProxy } from 'src/infra/use-cases-proxy/use-cases.proxy';
import { UserCreateUseCase, UserFindAllUseCase } from 'src/usecase/users';
import { UserFindByIdUseCase } from 'src/usecase/users/find-by-id.usecase';
import { FindManyOptions } from 'typeorm';

@Controller('users')
export class UserController {
    constructor(
        @Inject(UserFindAllUseCase.name)
        private readonly findAllUseCase: UseCasesProxy<UserFindAllUseCase>,

        @Inject(UserFindByIdUseCase.name)
        private readonly findByIdUseCase: UseCasesProxy<UserFindByIdUseCase>,

        @Inject(UserCreateUseCase.name)
        private readonly createUseCase: UseCasesProxy<UserCreateUseCase>,
    ){}

    @Get()
    async findAll(@Query() options: FindManyOptions) {
        return new BasePresenter(await this.findAllUseCase.getInstance().execute(options))
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return new BasePresenter(await this.findByIdUseCase.getInstance().execute(id))
    }

    @Post()
    async create(@Body() body: CreateUserDto) {
        return new BasePresenter(await this.createUseCase.getInstance().execute(body))
    }
}
