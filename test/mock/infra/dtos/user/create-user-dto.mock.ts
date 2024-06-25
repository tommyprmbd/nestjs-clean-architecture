import { CreateUserDtoInterface } from "src/domain/dtos";

export class CreateUserDtoMock implements CreateUserDtoInterface {
    getEmail = jest.fn();
    getPassword = jest.fn();
    getFullName = jest.fn();
    getPhone = jest.fn();
    setPassword = jest.fn();
}