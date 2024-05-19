import { RepositoryAbstract, RolePermissionRepositoryInterface } from "src/domain/repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RolePermissionEntity } from "../entities/role-permission.entity";

export class RolePermissionRepository extends RepositoryAbstract<RolePermissionEntity> implements RolePermissionRepositoryInterface {
    constructor(
        @InjectRepository(RolePermissionEntity)
        private readonly rolePermissionRepository: Repository<RolePermissionEntity>
    ){
        super(rolePermissionRepository)
    }
}