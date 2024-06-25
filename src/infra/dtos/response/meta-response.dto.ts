import { ApiProperty } from '@nestjs/swagger';
import { MetaPaginationResponseDto } from './meta-pagination-response.dto';

export class MetaResponseDto {
  @ApiProperty()
  timestamp: string;

  @ApiProperty()
  pagination: MetaPaginationResponseDto;

  constructor(paginationResponseDto: MetaPaginationResponseDto = null) {
    this.pagination = paginationResponseDto;
    this.timestamp = new Date().toISOString();
  }
}
