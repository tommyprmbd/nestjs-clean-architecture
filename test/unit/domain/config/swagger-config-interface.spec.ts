import { SwaggerConfigInterface } from "./../../../../src/domain/config"
import { swaggerConfigInterfaceMock } from "./../../../mock/domain/config/swagger-config-interface.mock"

describe('SwaggerConfigInterface', () => {
    const swaggerConfigInterface: SwaggerConfigInterface = swaggerConfigInterfaceMock

    it('should be defined', () => {
        expect(swaggerConfigInterface).toBeDefined()
    })

    describe('getTitle', () => {
        it('should be return string', () => {
            expect(typeof swaggerConfigInterface.getTitle()).toBe('string')
        })
    })

    describe('getDescription', () => {
        it('should be return string', () => {
            expect(typeof swaggerConfigInterface.getDescription()).toBe('string')
        })
    })

    describe('getVersion', () => {
        it('should be return string', () => {
            expect(typeof swaggerConfigInterface.getVersion()).toBe('string')
        })
    })

    describe('getPath', () => {
        it('should be return string', () => {
            expect(typeof swaggerConfigInterface.getPath()).toBe('string')
        })
    })
})