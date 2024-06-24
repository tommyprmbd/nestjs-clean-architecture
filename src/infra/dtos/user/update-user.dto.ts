import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { UpdateUserDtoInterface } from "./../../../../src/domain/dtos";
import { User } from "./../../../domain/models/user";
import { StringHelper } from "./../../common/helpers/string.helper";

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
    
    getFullName(): string {
        return this.fullName
    }
}