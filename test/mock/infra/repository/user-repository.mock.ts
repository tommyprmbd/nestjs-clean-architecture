import { UserRepositoryInterface } from "src/domain/repository/user.repository.interface";

export class UserRepositoryMock implements UserRepositoryInterface {
    findByEmail = jest.fn();
    findAll = jest.fn();
    findById = jest.fn();
    create = jest.fn();
    update = jest.fn();
    delete = jest.fn();
    paginate = jest.fn();
}