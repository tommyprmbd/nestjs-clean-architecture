import { EncryptInterface } from 'src/domain/encrypt';

export const encryptInterfaceMock: EncryptInterface = {
  hashPassword: jest.fn().mockReturnValue('hashedpassword'),
  comparePassword: jest.fn().mockReturnValue(true),
};
