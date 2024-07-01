import { JwtConfigInterface } from 'src/domain/config';

export const JwtConfigServiceMock = {
  getSecret: jest.fn().mockReturnValue('signedToken'),

  getAlgorithm: jest.fn().mockReturnValue('HS512'),
};
