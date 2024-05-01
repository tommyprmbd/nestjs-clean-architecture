import { ModelAbstract } from "./model.abstract"

export class User extends ModelAbstract {
    static MIN_FULL_NAME_LENGTH: number = 6
    static MAX_FULL_NAME_LENGTH: number = 100

    protected fullName: string
    protected email: string
    protected password: string
    protected phone: string
    protected isActive: boolean

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