import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator";
import { UpdateUserDtoInterface } from "./../../../../src/domain/dtos";
import { User } from "./../../../domain/models/user";
import { StringHelper } from "./../../../lib/utils/helper";

export class UpdateUserDto implements UpdateUserDtoInterface {
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
        example: 'AaBb1992#'
    })
    @IsOptional()
    @IsString()
    @IsStrongPassword()
    password: string
    
    getFullName(): string {
        return this.fullName
    }

    getPassword(): string {
        return this.password
    }

    setPassword(password: string): void {
        this.password = password
    }
}