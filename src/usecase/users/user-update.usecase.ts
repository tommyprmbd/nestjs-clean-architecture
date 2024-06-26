import { isEmpty } from './../../lib/utils/helper';
import { UpdateUserDtoInterface } from './../../domain/dtos';
import { User } from './../../domain/models';
import { UserRepositoryInterface } from './../../domain/repository/user.repository.interface';
import { UseCaseInterface } from './../../domain/usecase';
import { EncryptInterface } from './../../domain/encrypt';
import { HttpException, HttpStatus } from '@nestjs/common';

export class UserUpdateUseCase implements UseCaseInterface {
  constructor(
    private readonly repository: UserRepositoryInterface,
    private readonly encrypt: EncryptInterface,
  ) {}

  async execute(updateUserDtoInterface: UpdateUserDtoInterface, id: number) {
    const findById = await this.repository.findById(id);
    if (!findById) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    if (!isEmpty(updateUserDtoInterface.getPassword())) {
      const hashedPassword = await this.encrypt.hashPassword(
        updateUserDtoInterface.getPassword(),
      );
      updateUserDtoInterface.setPassword(hashedPassword);
    }

    const user = new User();
    user.update(updateUserDtoInterface);

    return await this.repository.update(user, id);
  }
}
