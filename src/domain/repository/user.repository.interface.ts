import { ModelInterface } from "../models/model.interface";
import { RepositoryInterface } from "./repository.interface";

export interface UserRepositoryInterface extends RepositoryInterface {
    findByEmail(email: string): Promise<ModelInterface>
}