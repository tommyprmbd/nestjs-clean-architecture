export interface CacheConfigInterface {
  getHost(): string;

  getPort(): number;

  getPassword(): string;

  getTTL(): number;

  isGlobal(): boolean;
}
