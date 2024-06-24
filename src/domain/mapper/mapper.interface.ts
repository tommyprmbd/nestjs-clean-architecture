import { PaginateResultDtoInterface } from "../dtos"

export interface MapperInterface {
    asList(objects: any[]): any[]

    asSingle(object: any): any
}