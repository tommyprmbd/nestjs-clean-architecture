import { RolePermission } from "src/domain/models";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { RoleEntity } from "./role.entity";
import { PermissionEntity } from "./permission.entity";

@Entity({ name: 'role_permissions' })
export class RolePermissionEntity extends RolePermission {
    @Column('varchar', { length: 30, nullable: false })
    role: string

    @Column('varchar', { length: 30, nullable: false })
    permission: string;

    @ManyToOne(() => RoleEntity, (role: RoleEntity) => role.rolePermissions)
    relRole: RoleEntity

    @ManyToOne(() => PermissionEntity, (permission: PermissionEntity) => permission.rolePermissions)
    relPermission: PermissionEntity
}