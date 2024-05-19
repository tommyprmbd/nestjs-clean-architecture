import { PermissionRepositoryInterface, RepositoryAbstract } from "src/domain/repository";
import { RoleEntity } from "../entities/role.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PermissionEntity } from "../entities/permission.entity";

export class PermissionRepository extends RepositoryAbstract<PermissionEntity> implements PermissionRepositoryInterface {
    constructor(
        @InjectRepository(PermissionEntity)
        private readonly permissionRepository: Repository<PermissionEntity>
    ){
        super(permissionRepository)
    }

    async findByKey(key: string): Promise<PermissionEntity> {
        return await this.permissionRepository.findOneBy({
            key
        });
    }
}