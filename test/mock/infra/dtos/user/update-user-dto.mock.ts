import { UpdateUserDtoInterface } from 'src/domain/dtos';

export class UpdateUserDtoMock implements UpdateUserDtoInterface {
  getPassword = jest.fn();
  setPassword = jest.fn();
  getFullName = jest.fn();
}
