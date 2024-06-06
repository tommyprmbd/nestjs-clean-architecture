import { UserRepositoryInterface } from "src/domain/repository/user.repository.interface";
import { userInterfaceMock } from "../model/user-interface.mock";
import { createResultDtoInterfaceMock } from "../dtos/result/create-result-dto-interface.mock";
import { updateResultDtoInterfaceMock } from "../dtos/result/update-result-dto-interface.mock";
import { deleteResultDtoInterfaceMock } from "../dtos/result/delete-result-dto-interface.mock";
import { paginateResultDtoInterfaceMock } from "../dtos/result/pagination-result-dto-interface.mock";

export const userRepositoryInterfaceMock: UserRepositoryInterface = {
    findAll: jest.fn().mockReturnValue(userInterfaceMock),
    findById: jest.fn().mockReturnValue(userInterfaceMock),
    create: jest.fn().mockReturnValue(createResultDtoInterfaceMock),
    update: jest.fn().mockReturnValue(updateResultDtoInterfaceMock),
    delete: jest.fn().mockReturnValue(deleteResultDtoInterfaceMock),
    paginate: jest.fn().mockReturnValue(paginateResultDtoInterfaceMock),
    findByEmail: jest.fn().mockReturnValue(userInterfaceMock),
}