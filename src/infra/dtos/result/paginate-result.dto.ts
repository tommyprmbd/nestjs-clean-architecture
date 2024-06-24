import { MetaPaginationResponseDtoInterface, PaginateResultDtoInterface } from "src/domain/dtos";
import { ModelInterface } from "src/domain/models/model.interface";
import { MetaPaginationResponseDto } from "../response/meta-pagination-response.dto";
import { IsArray } from "class-validator";

export class PaginateResultDto<T> implements PaginateResultDtoInterface {
    @IsArray()
    data: T[] | null

    pagination: MetaPaginationResponseDto | null

    constructor(data: T[] = null, pagination: MetaPaginationResponseDto = null) {
        this.data = data
        this.pagination = pagination
    }

    getData() {
        return this.data
    }

    getPagination(): MetaPaginationResponseDtoInterface {
        return this.pagination
    }
}