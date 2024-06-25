import { JwtConfigInterface } from 'src/domain/config';

export const jwtConfigInterfaceMock: JwtConfigInterface = {
  getSecret: jest.fn().mockReturnValue('secret'),

  getAlgorithm: jest.fn().mockReturnValue('HS512'),
};
