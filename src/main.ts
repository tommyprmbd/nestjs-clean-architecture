import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorExceptionFilter, HttpExceptionFilter, TypeORMExceptionFilter } from './infra/filters';
import { LoggerService } from './infra/logger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ErrorExceptionFilter(new LoggerService()));

  app.useGlobalFilters(new TypeORMExceptionFilter(new LoggerService()));

  app.useGlobalFilters(new HttpExceptionFilter(new LoggerService()))

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      whitelist: true,
      transform: true,
    })
  )

  await app.listen(3000);
}
bootstrap();
