import { NotFoundException } from "@nestjs/common";
import { UseCaseInterface } from "src/domain/usecase";
import { UserRepository } from "src/infra/repositories/user.repository";

export class UserDeleteUseCase implements UseCaseInterface {
    constructor(
        private readonly repository: UserRepository,
    ){}
    async execute(id: number) {
        const user = await this.repository.findById(id)
        if (!user) {
            throw new NotFoundException()
        }
        return await this.repository.delete(id)
    }
}