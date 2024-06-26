import { AuthServicePayloadInterface } from '../auth';
import { CreateUserDtoInterface, UpdateUserDtoInterface } from '../dtos';
import { ModelAbstract } from './model.abstract';
import { UserInterface } from './user.interface';

export class User extends ModelAbstract implements UserInterface {
  static DEF_ACTIVE_STATUS_AFTR_REG: boolean = false;
  static MIN_FULL_NAME_LENGTH: number = 6;
  static MAX_FULL_NAME_LENGTH: number = 100;

  fullName: string;
  email: string;
  password: string;
  phone: string;
  isActive: boolean;

  public getFullName(): string {
    return this.fullName;
  }

  public setFullName(fullName: string): void {
    this.fullName = fullName;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

  public getPhone(): string {
    return this.phone;
  }

  public setPhone(phone: string): void {
    this.phone = phone;
  }

  public isIsActive(): boolean {
    return this.isActive;
  }

  public setIsActive(isActive: boolean): void {
    this.isActive = isActive;
  }

  login(): AuthServicePayloadInterface {
    return {
      email: this.getEmail(),
      fullName: this.getFullName(),
      phone: this.getPhone(),
    };
  }

  create(createUserDtoInterface: CreateUserDtoInterface) {
    this.setEmail(createUserDtoInterface.getEmail());
    this.setPassword(createUserDtoInterface.getPassword());
    this.setFullName(createUserDtoInterface.getFullName());
    this.setPhone(createUserDtoInterface.getPhone());
    this.setIsActive(true);
  }

  update(updateUserDtoInterface: UpdateUserDtoInterface) {
    this.setFullName(updateUserDtoInterface.getFullName());
    if (updateUserDtoInterface.getPassword()) {
      this.setPassword(updateUserDtoInterface.getPassword());
    }
  }
}
