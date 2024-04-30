import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from './infra/config/type-orm/type-orm.module';
import { RepositoriesModule } from './infra/repositories/repositories.module';

@Module({
  imports: [
    TypeOrmModule,
    RepositoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
