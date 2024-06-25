export interface UserInterface {
  getFullName(): string;

  setFullName(fullName: string): void;

  getEmail(): string;

  setEmail(email: string): void;

  getPassword(): string;

  setPassword(password: string): void;

  getPhone(): string;

  setPhone(phone: string): void;

  isIsActive(): boolean;

  setIsActive(isActive: boolean): void;
}
