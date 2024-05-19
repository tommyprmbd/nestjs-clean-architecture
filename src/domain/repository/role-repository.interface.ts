import { Role } from "../models";
import { RepositoryInterface } from "./repository.interface";

export interface RoleRepositoryInterface extends RepositoryInterface<Role> {
    findByKey(key: string): Promise<Role>
}