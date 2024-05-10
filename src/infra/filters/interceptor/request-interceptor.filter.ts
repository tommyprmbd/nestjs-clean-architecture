import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";
import { LoggerInterface } from "src/domain/logger/logger.interface";
import { LoggerContext } from "src/infra/logger";

@Injectable()
export class RequestInterceptorFilter implements NestInterceptor {
    constructor(
        private readonly logger: LoggerInterface
    ){}
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const ctx = context.switchToHttp()
        const request = ctx.getRequest()

        this.logger.log(LoggerContext.REQUEST_INTERCEPTOR, `Incoming ${ request.method } request on ${ request.path }.`)
        return next.handle().pipe(
            tap(() => {
                this.logger.log(
                    LoggerContext.REQUEST_INTERCEPTOR,
                    `End ${ request.method } request on ${ request.path }.`
                )
            })
        )
    }
}