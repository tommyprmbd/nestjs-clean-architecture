import { DeleteResult, FindManyOptions, InsertResult, Repository, UpdateResult } from "typeorm";
import { ModelInterface } from "../models/model.interface";
import { RepositoryInterface } from "./repository.interface";
import { InjectRepository } from "@nestjs/typeorm";

export abstract class RepositoryAbstract implements RepositoryInterface {
    constructor(
        @InjectRepository(ModelInterface)
        private readonly repository: Repository<ModelInterface>
    ){}

    async findAll(options?: FindManyOptions<ModelInterface>): Promise<ModelInterface[]> {
        return await this.repository.find(options )
    }

    async findById(id: number): Promise<ModelInterface> {
        return await this.repository.findOneBy({ id: id }) 
    }

    async create(data: ModelInterface): Promise<InsertResult> {
        return await this.repository.insert(data)
    }

    async update(data: ModelInterface, id: number): Promise<UpdateResult> {
        return await this.repository.update({
            id: id
        }, data)
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.repository.delete({ id: id })
    }
}