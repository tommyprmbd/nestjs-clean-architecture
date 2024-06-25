export interface UpdateUserDtoInterface {
  getFullName(): string;

  getPassword(): string;

  setPassword(password: string): void;
}
