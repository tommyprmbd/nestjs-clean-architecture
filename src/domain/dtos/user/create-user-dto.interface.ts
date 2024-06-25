export interface CreateUserDtoInterface {
  getFullName(): string;

  getEmail(): string;

  getPassword(): string;

  getPhone(): string;

  setPassword(password: string): void;
}
