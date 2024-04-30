import { DeleteResult, FindManyOptions, InsertResult, UpdateResult } from "typeorm"
import { ModelInterface } from "../models/model.interface"

export interface RepositoryInterface {
    findAll(options?: FindManyOptions<ModelInterface>): Promise<ModelInterface[]>

    findById(id: number): Promise<ModelInterface>

    create(data: ModelInterface): Promise<InsertResult>

    update(data: ModelInterface, id: number): Promise<UpdateResult>

    delete(id: number): Promise<DeleteResult>
}