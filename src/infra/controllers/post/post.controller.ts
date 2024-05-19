import { Body, Controller, Get, Inject, Post, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/infra/auth';
import { PageOptionsDto } from 'src/infra/dtos';
import { CreatePostDto } from 'src/infra/dtos/post/create-post.dto';
import { BasePresenter } from 'src/infra/presenter/base.presenter';
import { UseCasesProxy } from 'src/infra/use-cases-proxy/use-cases.proxy';
import { PostCreateUseCase, PostFindAllUseCase } from 'src/usecase/post';

@ApiTags('Post')
@Controller('posts')
@UseGuards(JwtAuthGuard)
export class PostController {
    constructor(
        @Inject(PostCreateUseCase.name)
        private readonly createUseCase: UseCasesProxy<PostCreateUseCase>,
        @Inject(PostFindAllUseCase.name)
        private readonly findAllUseCase: UseCasesProxy<PostFindAllUseCase>,
    ){}

    @Post()
    async create(@Body() body: CreatePostDto) {
        return new BasePresenter(await this.createUseCase.getInstance().execute(body))
    }

    @Get()
    async findAll(@Query() params: PageOptionsDto) {
        return new BasePresenter(await this.findAllUseCase.getInstance().execute(params))
    }
}
