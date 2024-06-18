import { UpdateUserDtoInterface } from "src/domain/dtos";

export const updateUserDtoInterfaceMock: UpdateUserDtoInterface = {
    getFullName: jest.fn().mockReturnValue('fullname')
}