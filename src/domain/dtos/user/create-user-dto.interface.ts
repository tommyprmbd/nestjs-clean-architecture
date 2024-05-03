import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { User } from "src/domain/models";

export interface CreateUserDtoInterface {
    getFullName(): string

    getEmail(): string

    getPassword(): string

    getPhone(): string

    setPassword(password: string): void
}