import { PostRepositoryInterface, RepositoryAbstract } from "src/domain/repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PostEntity } from "../entities";

export class PostRepository extends RepositoryAbstract<PostEntity> implements PostRepositoryInterface {
    constructor(
        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>
    ){
        super(postRepository)
    }
}