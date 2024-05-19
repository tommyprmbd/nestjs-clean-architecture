import { Permission } from "../models";
import { RepositoryInterface } from "./repository.interface";

export interface PermissionRepositoryInterface extends RepositoryInterface<Permission> {
    findByKey(key: string): Promise<Permission>
}