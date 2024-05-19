import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { CreatePostDtoInterface } from "src/domain/dtos";

export class CreatePostDto implements CreatePostDtoInterface {
    @ApiProperty({
        example: 'Lorem Ipsum Dolor Sit Amet'
    })
    @IsString()
    @IsNotEmpty()
    readonly title: string

    @ApiProperty({
        example: 'Lorem Ipsum Dolor Sit Amet'
    })
    @IsString()
    @IsNotEmpty()
    readonly content: string

    getTitle(): string {
        return this.title
    }

    getContent(): string {
        return this.content
    }
}