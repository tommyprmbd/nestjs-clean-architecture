import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorExceptionFilter, HttpExceptionFilter, TypeORMExceptionFilter } from './infra/filters';
import { LoggerService } from './infra/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ErrorExceptionFilter(new LoggerService()));

  app.useGlobalFilters(new TypeORMExceptionFilter(new LoggerService()));

  app.useGlobalFilters(new HttpExceptionFilter(new LoggerService()))

  await app.listen(3000);
}
bootstrap();
