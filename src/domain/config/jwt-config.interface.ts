export interface JwtConfigInterface {
    getSecret(): string

    getAlgorithm(): string
}