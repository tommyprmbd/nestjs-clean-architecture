export interface EncryptInterface {
    hashPassword(password: string): Promise<string>

    comparePassword(plain: string, hashed: string): Promise<boolean>
}