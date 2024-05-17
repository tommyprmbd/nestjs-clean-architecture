import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/infra/auth';
import { CreateUserDto, PageOptionsDto, UpdateUserDto } from 'src/infra/dtos';
import { BasePresenter } from 'src/infra/presenter/base.presenter';
import { UseCasesProxy } from 'src/infra/use-cases-proxy/use-cases.proxy';
import { UserCreateUseCase, UserDeleteUseCase, UserFindAllUseCase } from 'src/usecase/users';
import { UserFindByIdUseCase } from 'src/usecase/users/find-by-id.usecase';
import { UserUpdateUseCase } from 'src/usecase/users/update.usecase';

@ApiTags('User')
@Controller('users')
@UseGuards(JwtAuthGuard)
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

        @Inject(UserDeleteUseCase.name)
        private readonly deleteUseCase: UseCasesProxy<UserDeleteUseCase>,
    ){}

    @Get()
    async findAll(@Query() options: PageOptionsDto) {
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

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return new BasePresenter(await this.deleteUseCase.getInstance().execute(id))
    }
}
