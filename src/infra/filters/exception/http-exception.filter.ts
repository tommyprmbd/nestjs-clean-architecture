import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { LoggerInterface } from 'src/domain/logger/logger.interface';
import { StatusResponseDto } from 'src/infra/dtos';
import { LoggerContext } from 'src/infra/logger';
import { BasePresenter } from 'src/infra/presenter/base.presenter';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggerInterface) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const exceptionResponse = exception.getResponse();

    const code = exception.getStatus();
    let message =
      exception instanceof HttpException
        ? exceptionResponse.hasOwnProperty('message')
          ? exceptionResponse['message']
          : null
        : HttpStatus.INTERNAL_SERVER_ERROR;

    if (typeof message == 'object') {
      message = message.length ? message[0] : message;
    }
    const statusResponseDto = new StatusResponseDto(message, 1);
    const presenter = new BasePresenter(null, statusResponseDto);

    this.logger.error(LoggerContext.EXCEPTION_FILTER, message);

    response.status(code).json(presenter);
  }
}
