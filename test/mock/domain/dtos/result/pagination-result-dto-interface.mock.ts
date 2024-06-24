import { PaginateResultDtoInterface } from "src/domain/dtos";

export const paginateResultDtoInterfaceMock: PaginateResultDtoInterface = {
    getData: jest.fn().mockReturnValue([]),
    getPagination: jest.fn().mockReturnValue(null),
}