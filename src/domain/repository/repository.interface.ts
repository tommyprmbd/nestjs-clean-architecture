import { FindManyOptions, FindOneOptions } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import {
  CreateResultDtoInterface,
  DeleteResultDtoInterface,
  PageOptionsDtoInterface,
  PaginateResultDtoInterface,
  UpdateResultDtoInterface,
} from '../dtos';

export interface RepositoryInterface<T> {
  findAll(options?: FindManyOptions<T>): Promise<T[]>;

  findById(id: any): Promise<T>;

  findByCondition(condition: FindOneOptions<T>): Promise<T>;

  create(data: QueryDeepPartialEntity<T>): Promise<CreateResultDtoInterface>;

  update(
    data: QueryDeepPartialEntity<T>,
    id: any,
  ): Promise<UpdateResultDtoInterface>;

  delete(id: any): Promise<DeleteResultDtoInterface>;

  paginate(
    pageOptionsDto: PageOptionsDtoInterface,
  ): Promise<PaginateResultDtoInterface>;
}
