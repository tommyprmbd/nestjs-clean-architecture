import { AuthServiceInterface } from 'src/domain/auth';

export class AuthServiceMock implements AuthServiceInterface {
  login = jest.fn();
}
