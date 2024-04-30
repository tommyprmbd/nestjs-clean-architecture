import { User } from "../models";
import { RepositoryInterface } from "./repository.interface";

export interface UserRepositoryInterface extends RepositoryInterface<User> {
    findByEmail(email: string): Promise<User>
}