import { UpdateUserDtoInterface } from 'src/domain/dtos';

export const updateUserDtoInterfaceMock: UpdateUserDtoInterface = {
  getFullName: jest.fn().mockReturnValue('fullname'),

  getPassword: jest.fn().mockReturnValue('abcdeF12!'),

  setPassword: jest.fn().mockReturnValue(null),
};
