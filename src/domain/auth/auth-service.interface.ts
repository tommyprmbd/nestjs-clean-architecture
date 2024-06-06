export interface AuthServiceInterface {
    signIn(payload: any): Promise<string>
}