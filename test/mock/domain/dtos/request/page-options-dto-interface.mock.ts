import { OrderDirectionEnum } from './../../../../../src/domain/common';
import { PageOptionsDtoInterface } from './../../../../../src/domain/dtos';

export const pageOptionsDtoInterfaceMock: PageOptionsDtoInterface = {
  getOrder: jest.fn().mockReturnValue(OrderDirectionEnum.DESC),

  getPage: jest.fn().mockReturnValue(1),

  getTake: jest.fn().mockReturnValue(1),

  getSkip: jest.fn().mockReturnValue(1),
};
