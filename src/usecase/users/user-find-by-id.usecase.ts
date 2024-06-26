import { HttpException, HttpStatus } from '@nestjs/common';
import { UserMapperInterface } from './../../domain/mapper';
import { UserRepositoryInterface } from './../../domain/repository/user.repository.interface';
import { UseCaseInterface } from './../../domain/usecase';

export class UserFindByIdUseCase implements UseCaseInterface {
  constructor(
    private readonly repository: UserRepositoryInterface,
    private readonly mapper: UserMapperInterface,
  ) {}

  async execute(id: number) {
    const user = await this.repository.findById(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return this.mapper.asSingle(user);
  }
}
