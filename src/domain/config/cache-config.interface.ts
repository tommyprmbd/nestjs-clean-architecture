export interface CacheConfigInterface {
  getHost(): string;

  getPort(): number;

  getPassword(): string;

  isGlobal(): boolean;
}
