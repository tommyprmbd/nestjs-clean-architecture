export interface AuthServiceInterface {
    login(payload: any): Promise<string>
}