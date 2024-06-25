export interface DbConfigInterface {
  getType(): string;

  getHost(): string;

  getPort(): number;

  getName(): string;

  getUsername(): string;

  getPassword(): string;

  isSync(): boolean;

  isAutoLoadEntities(): boolean;
}
