import { isEmpty } from './../../lib/utils/helper';
import { UpdateUserDtoInterface } from './../../domain/dtos';
import { User } from './../../domain/models';
import { UserRepositoryInterface } from './../../domain/repository/user.repository.interface';
import { UseCaseInterface } from './../../domain/usecase';
import { EncryptInterface } from './../../domain/encrypt';

export class UserUpdateUseCase implements UseCaseInterface {
  constructor(
    private readonly repository: UserRepositoryInterface,
    private readonly encrypt: EncryptInterface,
  ) {}

  async execute(updateUserDtoInterface: UpdateUserDtoInterface, id: number) {
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
