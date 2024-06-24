import { MetaPaginationResponseDtoInterface } from "../response/meta-pagination-response-dto.interface"

export interface PaginateResultDtoInterface {
    getData()

    getPagination(): MetaPaginationResponseDtoInterface | null
}
