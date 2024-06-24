import { EncryptInterface } from "src/domain/encrypt";

export class EncryptServiceMock implements EncryptInterface {
    hashPassword = jest.fn();
    comparePassword = jest.fn();
}