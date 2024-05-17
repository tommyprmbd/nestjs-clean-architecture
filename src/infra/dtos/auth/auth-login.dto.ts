import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { AuthLoginDtoInterface } from "src/domain/dtos";

export class AuthLoginDto implements AuthLoginDtoInterface {
    @ApiProperty({
        example: 'john.doe@gmail.com'
    })
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty({
        example: 'secret'
    })
    @IsNotEmpty()
    @IsString()
    password: string

    getEmail(): string {
        return this.email
    }

    getPassword(): string {
        return this.password
    }
}