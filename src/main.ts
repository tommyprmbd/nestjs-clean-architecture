import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorExceptionFilter, HttpExceptionFilter, RequestInterceptorFilter, TypeORMExceptionFilter } from './infra/filters';
import { LoggerContext, LoggerService } from './infra/logger';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import { AppConfigService } from './infra/config/environment';
import { AppEnvironmentConfigEnum } from './domain/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfigService } from './infra/config/environment/swagger-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfigServer = app.get(AppConfigService);
  const loggerService = app.get(LoggerService)
  const appSwaggerService = app.get(SwaggerConfigService);

  app.useGlobalFilters(new ErrorExceptionFilter(new LoggerService()));

  app.useGlobalFilters(new TypeORMExceptionFilter(new LoggerService()));

  app.useGlobalFilters(new HttpExceptionFilter(new LoggerService()));

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      whitelist: true,
      transform: true,
    })
  );

  app.useGlobalInterceptors(new RequestInterceptorFilter(new LoggerService()));

  const env = appConfigServer.getEnvironment()
  if (env.toLocaleLowerCase() !== AppEnvironmentConfigEnum.PRODUCTION.toLocaleLowerCase()) {
    loggerService.log(LoggerContext.SWAGGER, 'Setting up Swagger.');
    const swaggerConfig = new DocumentBuilder()
      .setTitle(appSwaggerService.getTitle())
      .setDescription(appSwaggerService.getDescription())
      .setVersion(appSwaggerService.getVersion())
      .build()
    const document = SwaggerModule.createDocument(app, swaggerConfig)
    SwaggerModule.setup(appSwaggerService.getPath(), app, document)
  }

  const port = appConfigServer.getPort()
  const logger = new ConsoleLogger()
  await app.listen(port, () => {
    logger.log(`Application running on port ${port}`)
  });
}
bootstrap();
