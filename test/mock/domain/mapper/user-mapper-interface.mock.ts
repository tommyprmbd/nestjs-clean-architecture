import { UserMapperInterface } from "./../../../../src/domain/mapper";
import { User } from "./../../../../src/domain/models";
import { PaginateResultDto } from "./../../../../src/infra/dtos";

export const userMapperInterfaceMock: UserMapperInterface = {
    asList: jest.fn().mockReturnValue([{}]),
    asSingle: jest.fn().mockReturnValue({}),
    asSingleWithPassword: jest.fn().mockReturnValue({}),
    fromPagination: jest.fn().mockReturnValue(PaginateResultDto<User>),
}