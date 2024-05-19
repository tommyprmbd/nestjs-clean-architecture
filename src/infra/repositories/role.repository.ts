import { RepositoryAbstract, RoleRepositoryInterface } from "src/domain/repository";
import { RoleEntity } from "../entities/role.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class RoleRepository extends RepositoryAbstract<RoleEntity> implements RoleRepositoryInterface {
    constructor(
        @InjectRepository(RoleEntity)
        private readonly roleRepository: Repository<RoleEntity>
    ){
        super(roleRepository)
    }

    async findByKey(key: string): Promise<RoleEntity> {
        return await this.roleRepository.findOneBy({
            key
        });
    }
}