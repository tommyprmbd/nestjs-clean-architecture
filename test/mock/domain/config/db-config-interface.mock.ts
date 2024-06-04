import { DbConfigInterface } from "src/domain/config";

export const dbConfigInterfaceMock: DbConfigInterface = {
    getType: jest.fn().mockReturnValue('mysql'),
    
    getHost: jest.fn().mockReturnValue('localhost'),

    getPort: jest.fn().mockReturnValue(3306),

    getName: jest.fn().mockReturnValue('bsi'),

    getUsername: jest.fn().mockReturnValue('root'),

    getPassword: jest.fn().mockReturnValue('password'),

    isSync: jest.fn().mockReturnValue(true),

    isAutoLoadEntities: jest.fn().mockReturnValue(true),
}