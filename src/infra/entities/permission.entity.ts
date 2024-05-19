import { Permission } from "src/domain/models";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { RolePermissionEntity } from "./role-permission.entity";

@Entity({ name: 'permissions' })
export class PermissionEntity extends Permission {
    @PrimaryColumn('varchar', {})
    key: string

    @Column('varchar', { length: 30, nullable: false })
    name: string;

    @OneToMany(() => RolePermissionEntity, (rolePermission: RolePermissionEntity) => rolePermission.permission)
    rolePermissions: RolePermissionEntity[]
}