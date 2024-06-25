import { UserMapperInterface } from 'src/domain/mapper/user-mapper.interface';
import { User } from 'src/domain/models';
import { PaginateResultDto } from '../dtos';

export class UserMapper implements UserMapperInterface {
  public asList(objects: User[]): User[] {
    return objects.map((obj) => this.asSingle(obj));
  }

  public asSingle(object: User): User {
    if (!object) return null;

    const user = new User();
    user.setId(object.gettId());
    user.setFullName(object.getFullName());
    user.setEmail(object.getEmail());
    user.setPhone(object.getPhone());
    user.setIsActive(object.isIsActive());
    user.setCreatedAt(object.getCreatedAt());
    user.setUpdatedAt(object.getUpdatedAt());
    return user;
  }

  public asSingleWithPassword(object: User): User {
    if (!object) return null;

    const user = new User();
    user.setId(object.gettId());
    user.setFullName(object.getFullName());
    user.setEmail(object.getEmail());
    user.setPassword(object.getPassword());
    user.setPhone(object.getPhone());
    user.setIsActive(object.isIsActive());
    user.setCreatedAt(object.getCreatedAt());
    user.setUpdatedAt(object.getUpdatedAt());
    return user;
  }

  public fromPagination(
    object: PaginateResultDto<User>,
  ): PaginateResultDto<User> {
    object.data = this.asList(object.data);
    return object;
  }
}
