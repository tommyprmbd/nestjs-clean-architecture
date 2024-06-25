import { Injectable, Logger } from '@nestjs/common';
import { LoggerInterface } from 'src/domain/logger/logger.interface';

@Injectable()
export class LoggerService extends Logger implements LoggerInterface {
  debug(context: string, message: string): void {
    super.debug(`[DEBUG] ${message}`, context);
  }

  log(context: string, message: string): void {
    super.log(`[INFO] ${message}`, context);
  }

  error(context: string, message: string, trace?: string): void {
    super.error(`[ERROR] ${message}`, trace, context);
  }

  warn(context: string, message: string): void {
    super.warn(`[WARN] ${message}`, context);
  }

  verbose(context: string, message: string): void {
    super.verbose(`[VERBOSE] ${message}`, context);
  }
}
