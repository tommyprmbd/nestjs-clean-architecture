import { DeleteResult, FindManyOptions, InsertResult, UpdateResult } from "typeorm"
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity"
import { PageOptionsDtoInterface } from "../dtos"

export interface RepositoryInterface<T> {
    findAll(options?: FindManyOptions<T>): Promise<T[]>

    findById(id: any): Promise<T>

    create(data: QueryDeepPartialEntity<T>): Promise<InsertResult>

    update(data: QueryDeepPartialEntity<T>, id: any): Promise<UpdateResult>

    delete(id: any): Promise<DeleteResult>

    paginate(pageOptionsDto: PageOptionsDtoInterface): Promise<any>
}