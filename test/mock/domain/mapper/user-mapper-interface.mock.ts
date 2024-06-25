import { paginateResultDtoInterfaceMock } from '../dtos/result/pagination-result-dto-interface.mock';
import { userInterfaceMock } from '../model/user-interface.mock';
import { UserMapperInterface } from './../../../../src/domain/mapper';

export const userMapperInterfaceMock: UserMapperInterface = {
  asList: jest.fn().mockReturnValue([userInterfaceMock]),
  asSingle: jest.fn().mockReturnValue(userInterfaceMock),
  asSingleWithPassword: jest.fn().mockReturnValue(userInterfaceMock),
  fromPagination: jest.fn().mockReturnValue(paginateResultDtoInterfaceMock),
};
