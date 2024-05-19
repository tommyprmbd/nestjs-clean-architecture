import { Post } from "../models";
import { RepositoryInterface } from "./repository.interface";

export interface PostRepositoryInterface extends RepositoryInterface<Post> {}