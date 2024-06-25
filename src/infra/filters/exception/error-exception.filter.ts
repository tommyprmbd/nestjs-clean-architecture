import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { LoggerInterface } from 'src/domain/logger/logger.interface';
import { StatusResponseDto } from 'src/infra/dtos';
import { LoggerContext } from 'src/infra/logger';
import { BasePresenter } from 'src/infra/presenter/base.presenter';

@Catch(Error)
export class ErrorExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggerInterface) {}

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const statusResponseDto = new StatusResponseDto(exception.message, 1);
    const presenter = new BasePresenter(null, statusResponseDto);

    this.logger.error(LoggerContext.ERROR_EXCEPTION_FILTER, exception.message);

    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(presenter);
  }
}
