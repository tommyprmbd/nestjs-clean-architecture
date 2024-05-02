import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { Response } from "express";
import { LoggerInterface } from "src/domain/logger/logger.interface";
import { StatusResponseDto } from "src/infra/dtos";
import { LoggerContext } from "src/infra/logger";
import { BasePresenter } from "src/infra/presenter/base.presenter";
import { TypeORMError } from "typeorm";

@Catch(TypeORMError)
export class TypeORMExceptionFilter implements ExceptionFilter {
    constructor(
        private readonly logger: LoggerInterface
    ){}

    catch(exception: TypeORMError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        const statusResponseDto = new StatusResponseDto(exception.message, 1)
        const presenter = new BasePresenter(null, statusResponseDto)

        this.logger.error(LoggerContext.EXCEPTION_FILTER, exception.message)

        response
            .status(HttpStatus.BAD_REQUEST)
            .json(presenter);
    }
}