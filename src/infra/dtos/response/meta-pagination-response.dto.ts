import { ApiProperty } from "@nestjs/swagger";
import { MetaPaginationResponseDtoInterface } from "src/domain/dtos";
import { MetaPaginationParameterDtoInterface } from "./meta-pagination-parameter-response.dto.interface";

export class MetaPaginationResponseDto implements MetaPaginationResponseDtoInterface {
    @ApiProperty()
    readonly page: number

    @ApiProperty()
    readonly take: number

    @ApiProperty()
    readonly itemCount: number

    @ApiProperty()
    readonly pageCount: number

    @ApiProperty()
    readonly hasPreviousPage: boolean

    @ApiProperty()
    readonly hasNextPage: boolean

    constructor(
        {itemCount, pageOptionsDto}: MetaPaginationParameterDtoInterface
    ){
        this.page = pageOptionsDto.page
        this.take = pageOptionsDto.take
        this.itemCount = itemCount
        this.pageCount = Math.ceil(itemCount / this.take)
        this.hasPreviousPage = this.page > 1
        this.hasNextPage = this.page < this.pageCount
    }

    getPage(): number {
        return this.page
    }

    getItemCount(): number {
        return this.itemCount
    }

    getPageCount(): number {
        return this.pageCount
    }

    isHasNextPage(): boolean {
        return this.hasNextPage
    }

    isHasPreviousPage(): boolean {
        return this.hasPreviousPage
    }
}