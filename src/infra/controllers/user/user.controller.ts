import { Body, Controller, Get, Inject, Param, Post, Put, Query } from '@nestjs/common';
import { UpdateUserDto } from 'src/infra/dtos';
import { CreateUserDto } from 'src/infra/dtos/user/create-user.dto';
import { BasePresenter } from 'src/infra/presenter/base.presenter';
import { UseCasesProxy } from 'src/infra/use-cases-proxy/use-cases.proxy';
import { UserCreateUseCase, UserFindAllUseCase } from 'src/usecase/users';
import { UserFindByIdUseCase } from 'src/usecase/users/find-by-id.usecase';
import { UserUpdateUseCase } from 'src/usecase/users/update.usecase';
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

        @Inject(UserUpdateUseCase.name)
        private readonly updateUseCase: UseCasesProxy<UserUpdateUseCase>,
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

    @Put(':id')
    async update(@Param('id') id: number, @Body() body: UpdateUserDto) {
        return new BasePresenter(await this.updateUseCase.getInstance().execute(body, id))
    }
}
