import { DeleteResult, FindManyOptions, InsertResult, Repository, UpdateResult } from "typeorm";
import { ModelInterface } from "../models/model.interface";
import { RepositoryInterface } from "./repository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { PageOptionsDtoInterface } from "../dtos";
import { MetaPaginationResponseDto } from "src/infra/dtos";
import { PaginateResultDto } from "src/infra/dtos/result/paginate-result.dto";

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
    
    async paginate(pageOptionsDto: PageOptionsDtoInterface): Promise<any> {
        const queryBuilder = this.repository.createQueryBuilder('t')

        queryBuilder
            .orderBy(`t.${ModelInterface.DEFAULT_ORDER_KEY}`, pageOptionsDto.getOrder())
            .skip(pageOptionsDto.getSkip())
            .take(pageOptionsDto.getTake())

        const itemCount = await queryBuilder.getCount()
        const { entities } = await queryBuilder.getRawAndEntities()

        const metaPaginationResponseDto = new MetaPaginationResponseDto({
            itemCount,
            pageOptionsDto
        })

        return new PaginateResultDto(entities, metaPaginationResponseDto)
    }
}