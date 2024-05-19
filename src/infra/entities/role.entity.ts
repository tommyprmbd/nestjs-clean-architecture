import { Role } from "src/domain/models";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { RolePermissionEntity } from "./role-permission.entity";

@Entity({ name: 'roles' })
export class RoleEntity extends Role {
    @PrimaryColumn('varchar', {})
    key: string

    @Column('varchar', { length: 30, nullable: false })
    name: string;

    @OneToMany(() => RolePermissionEntity, (rolePermission: RolePermissionEntity) => rolePermission.role)
    rolePermissions: RolePermissionEntity[]
}