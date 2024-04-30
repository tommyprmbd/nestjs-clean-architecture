export interface DbConfig {
    getType(): string;
  
    getHost(): string;
  
    getPort(): number;
  
    getName(): string;
  
    getUsername(): string;
  
    getPassword(): string;
  
    isSync(): boolean;
  
    isAutoLoadEntities(): boolean;
  }
  