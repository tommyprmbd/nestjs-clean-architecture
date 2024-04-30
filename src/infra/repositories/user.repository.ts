import { InjectRepository } from "@nestjs/typeorm";
import { ModelInterface } from "src/domain/models/model.interface";
import { RepositoryAbstract } from "src/domain/repository";
import { UserRepositoryInterface } from "src/domain/repository/user.repository.interface";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { User } from "src/domain/models";

export class UserRepository extends RepositoryAbstract<UserEntity> implements UserRepositoryInterface {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){
        super(userRepository)
    }

    async findByEmail(email: string): Promise<UserEntity> {
        return await this.userRepository.findOneBy({
            email: email
        })
    }
}