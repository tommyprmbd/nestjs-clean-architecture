import {
  PageOptionsDtoInterface,
  PaginateResultDtoInterface,
} from './../../../../src/domain/dtos';
import { UserMapperInterface } from './../../../../src/domain/mapper';
import { UserRepositoryInterface } from './../../../../src/domain/repository/user.repository.interface';
import { UserFindAllUseCase } from './../../../../src/usecase/users';
import { userMapperInterfaceMock } from './../../../mock/domain/mapper/user-mapper-interface.mock';
import { userRepositoryInterfaceMock } from './../../../mock/domain/repository/user-repository-interface.mock';
import { pageOptionsDtoInterfaceMock } from './../../../mock/domain/dtos/request/page-options-dto-interface.mock';
import { paginateResultDtoInterfaceMock } from './../../../mock/domain/dtos/result/pagination-result-dto-interface.mock';

describe('UserFindAllUseCase', () => {
  let userFindAllUseCase: UserFindAllUseCase;

  const userRepositoryInterface: UserRepositoryInterface =
    userRepositoryInterfaceMock;
  const userMapperInterface: UserMapperInterface = userMapperInterfaceMock;
  const pageOptionsDtoInterface: PageOptionsDtoInterface =
    pageOptionsDtoInterfaceMock;
  const paginateResultDtoInterface: PaginateResultDtoInterface =
    paginateResultDtoInterfaceMock;

  let result: PaginateResultDtoInterface = null;
  beforeEach(() => {
    userFindAllUseCase = new UserFindAllUseCase(
      userRepositoryInterface,
      userMapperInterface,
    );
  });

  it('should be defined', () => {
    expect(userFindAllUseCase);
  });

  describe('execute()', () => {
    describe('repository.paginate()', () => {
      it('should be return PaginateResultDto', async () => {
        result = await userRepositoryInterface.paginate(
          pageOptionsDtoInterface,
        );
        expect(result).toBe(paginateResultDtoInterface);
      });
    });

    describe('mapper.fromPagination()', () => {
      it('should be return PaginateResultDto', async () => {
        result = await userRepositoryInterface.paginate(
          pageOptionsDtoInterface,
        );
        result = userMapperInterfaceMock.fromPagination(result);
        expect(result).toBe(paginateResultDtoInterfaceMock);
      });
    });
  });

  it('should be return PaginateResultDto', async () => {
    result = await userRepositoryInterface.paginate(pageOptionsDtoInterface);
    result = userMapperInterfaceMock.fromPagination(result);
    expect(result).toBe(paginateResultDtoInterfaceMock);
  });
});
