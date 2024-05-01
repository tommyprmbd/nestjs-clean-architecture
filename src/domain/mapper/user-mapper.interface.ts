import { User } from "../models";
import { MapperInterface } from "./mapper.interface";

export interface UserMapperInterface extends MapperInterface {
    asSingleWithPassword(object: User): User
}