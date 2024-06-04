import { AppConfigInterface } from "src/domain/config";

export const appConfigInterfaceMock: AppConfigInterface = {
    getEnvironment: jest.fn().mockReturnValue('local'),
    getPort: jest.fn().mockReturnValue(3000),
}