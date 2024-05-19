import { ModelAbstract } from "./model.abstract";

export class RolePermission extends ModelAbstract {
    role: string

    permission: string

    public getRole() {
        return this.role
    }

    public getPermission() {
        return this.permission
    }
}