import { ModelAbstract } from "./model.abstract"

export class User extends ModelAbstract {
    static DEF_ACTIVE_STATUS_AFTR_REG: boolean = false
    static MIN_FULL_NAME_LENGTH: number = 6
    static MAX_FULL_NAME_LENGTH: number = 100

    fullName: string
    email: string
    password: string
    phone: string
    isActive: boolean

    public getFullName(): string {
        return this.fullName;
    }

    public setFullName(fullName: string): void {
        this.fullName = fullName;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }

    public isIsActive(): boolean {
        return this.isActive;
    }

    public setIsActive(isActive: boolean): void {
        this.isActive = isActive;
    }
    
}