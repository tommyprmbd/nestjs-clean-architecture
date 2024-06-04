import { SwaggerConfigInterface } from "src/domain/config";

export const swaggerConfigInterfaceMock: SwaggerConfigInterface = {
    getTitle: jest.fn().mockReturnValue('title'),

    getDescription: jest.fn().mockReturnValue('description'),

    getVersion: jest.fn().mockReturnValue('version'),

    getPath: jest.fn().mockReturnValue('path')
}