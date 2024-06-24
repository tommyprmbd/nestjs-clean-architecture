import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumberString, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator";
import { CreateUserDtoInterface } from "./../../../../src/domain/dtos";
import { User } from "./../../../domain/models/user";
import { StringHelper } from "./../../common/helpers/string.helper";

export class CreateUserDto implements CreateUserDtoInterface {
    @ApiProperty({
        example: 'Tommy Priambodo'
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(User.MIN_FULL_NAME_LENGTH)
    @MaxLength(User.MAX_FULL_NAME_LENGTH)
    @Transform(({value}) => StringHelper.toTitleCase(value))
    readonly fullName: string

    @ApiProperty({
        example: 'tommy@gmail.com'
    })
    @IsEmail()
    @IsNotEmpty()
    @Transform(({value}) => value.toLowerCase())
    readonly email: string

    @ApiProperty({
        example: 'AaBb1992#'
    })
    @IsStrongPassword()
    password: string

    @ApiProperty({
        example: '0812345678'
    })
    @IsNumberString()
    readonly phone: string

    getFullName(): string {
        return this.fullName
    }

    getEmail(): string {
        return this.email
    }

    getPassword(): string {
        return this.password
    }

    getPhone(): string {
        return this.phone
    }

    setPassword(password: string): void {
        this.password = password
    }
}