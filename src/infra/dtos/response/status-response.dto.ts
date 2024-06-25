import { ApiProperty } from '@nestjs/swagger';

export class StatusResponseDto {
  @ApiProperty({
    required: true,
    example: 0,
    default: 0,
    description: 'Status code',
  })
  code: number;

  @ApiProperty({
    required: true,
    example: 'Ok',
    default: 'Ok',
  })
  message: string;

  constructor(message: string = 'Ok', code: number = 0) {
    this.code = code;
    this.message = message;
  }
}
