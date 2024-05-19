import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from './user.repository';
import { PermissionEntity } from '../entities/permission.entity';
import { RoleEntity } from '../entities/role.entity';
import { RolePermissionEntity } from '../entities/role-permission.entity';
import { PermissionRepository } from './permission.repository';
import { RoleRepository } from './role.repository';
import { RolePermissionRepository } from './role-permission.repository';
import { PostEntity } from '../entities';
import { PostRepository } from './post.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            PermissionEntity,
            PostEntity,
            RoleEntity,
            RolePermissionEntity,
            UserEntity,
        ]),
    ],
    providers: [
        PermissionRepository,
        PostRepository,
        RoleRepository,
        RolePermissionRepository,
        UserRepository,
    ],
    exports: [
        PermissionRepository,
        PostRepository,
        RoleRepository,
        RolePermissionRepository,
        UserRepository,
    ],
})
export class RepositoriesModule {}
