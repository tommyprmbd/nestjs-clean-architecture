import { DeleteResult, FindManyOptions, InsertResult, UpdateResult } from "typeorm"
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity"
import { CreateResultDtoInterface, DeleteResultDtoInterface, PageOptionsDtoInterface, PaginateResultDtoInterface, UpdateResultDtoInterface } from "../dtos"
import { PaginateResultDto } from "src/infra/dtos/result/paginate-result.dto"

export interface RepositoryInterface<T> {
    findAll(options?: FindManyOptions<T>): Promise<T[]>

    findById(id: any): Promise<T>

    create(data: QueryDeepPartialEntity<T>): Promise<CreateResultDtoInterface>

    update(data: QueryDeepPartialEntity<T>, id: any): Promise<UpdateResultDtoInterface>

    delete(id: any): Promise<DeleteResultDtoInterface>

    paginate(pageOptionsDto: PageOptionsDtoInterface): Promise<PaginateResultDtoInterface>
}