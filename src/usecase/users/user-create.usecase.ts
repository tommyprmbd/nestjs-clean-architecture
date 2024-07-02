import { User } from '../../domain/models/user';
import { CreateUserDtoInterface } from './../../domain/dtos';
import { EncryptInterface } from './../../domain/encrypt';
import { UserRepositoryInterface } from './../../domain/repository/user.repository.interface';
import { UseCaseInterface } from './../../domain/usecase';
import { ConflictException } from '@nestjs/common';

export class UserCreateUseCase implements UseCaseInterface {
  constructor(
    private readonly repository: UserRepositoryInterface,
    private readonly encrypt: EncryptInterface,
  ) {}

  async execute(createUserDtoInterface: CreateUserDtoInterface) {
    const findByEmail = await this.repository.findByEmail(
      createUserDtoInterface.getEmail(),
    );

    if (findByEmail) {
      throw new ConflictException('Email already in use');
    }

    const findByPhone = await this.repository.findByCondition({
      where: {
        phone: createUserDtoInterface.getPhone(),
      },
    });

    if (findByPhone) {
      throw new ConflictException('Phone already in use');
    }

    const hashedPassword = await this.encrypt.hashPassword(
      createUserDtoInterface.getPassword(),
    );
    createUserDtoInterface.setPassword(hashedPassword);

    const user = new User();
    user.create(createUserDtoInterface);

    return await this.repository.create(user);
  }
}
