export interface MetaPaginationResponseDtoInterface {
    getPage(): number

    getItemCount(): number

    getPageCount(): number

    isHasPreviousPage(): boolean

    isHasNextPage(): boolean
}