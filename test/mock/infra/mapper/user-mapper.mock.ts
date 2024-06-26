import { UserMapperInterface } from 'src/domain/mapper';

export class UserMapperMock implements UserMapperInterface {
  asList = jest.fn();
  asSingle = jest.fn();
  asSingleWithPassword = jest.fn();
  fromPagination = jest.fn();
}
