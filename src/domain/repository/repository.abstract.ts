import { DeleteResult, FindManyOptions, InsertResult, Repository, UpdateResult } from "typeorm";
import { ModelInterface } from "../models/model.interface";
import { RepositoryInterface } from "./repository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

interface HasId {
    id: number
}
export abstract class RepositoryAbstract<T extends HasId> implements RepositoryInterface<T> {
    private repository: Repository<T>

    constructor(
        repository: Repository<T>
    ){
        this.repository = repository
    }

    async findAll(options?: FindManyOptions<T>): Promise<T[]> {
        return await this.repository.find(options )
    }

    async findById(id: any): Promise<T> {
        return await this.repository.findOneBy({ id: id }) 
    }

    async create(data: QueryDeepPartialEntity<T>): Promise<InsertResult> {
        return await this.repository.insert(data)
    }

    async update(data: QueryDeepPartialEntity<T>, id: any): Promise<UpdateResult> {
        return await this.repository.update({
            id: id
        }, data)
    }

    async delete(id: any): Promise<DeleteResult> {
        return await this.repository.delete({ id: id })
    }
}