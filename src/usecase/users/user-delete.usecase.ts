import { NotFoundException } from "@nestjs/common";
import { UserRepositoryInterface } from "./../../domain/repository/user.repository.interface";
import { UseCaseInterface } from "./../../domain/usecase";

export class UserDeleteUseCase implements UseCaseInterface {
    constructor(
        private readonly repository: UserRepositoryInterface,
    ){}
    async execute(id: number) {
        const user = await this.repository.findById(id)
        if (!user) {
            throw new NotFoundException()
        }
        return await this.repository.delete(id)
    }
}