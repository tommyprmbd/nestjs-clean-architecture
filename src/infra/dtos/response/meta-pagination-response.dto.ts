import { ApiProperty } from "@nestjs/swagger";
import { MetaPaginationResponseDtoInterface } from "src/domain/dtos";

export class MetaPaginationResponseDto implements MetaPaginationResponseDtoInterface {
    @ApiProperty()
    page: number

    @ApiProperty()
    itemCount: number

    @ApiProperty()
    pageCount: number

    @ApiProperty()
    hasPreviousPage: boolean

    @ApiProperty()
    hasNextPage: boolean

    constructor(){

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