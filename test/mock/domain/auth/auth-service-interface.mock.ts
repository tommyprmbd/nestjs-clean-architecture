import { AuthServiceInterface } from 'src/domain/auth';

export const authServiceInterfaceMock: AuthServiceInterface = {
  login: jest.fn().mockReturnValue('token'),
};
