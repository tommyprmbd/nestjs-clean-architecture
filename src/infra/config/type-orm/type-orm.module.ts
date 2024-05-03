import { Module } from '@nestjs/common';
import { TypeOrmModule as TypeOrmModuleMaster } from '@nestjs/typeorm';
import { EnvironmentModule } from '../environment/environment.module';
import { TypeOrmOptions } from './type-orm.option';
import { DbConfigService } from '../environment/db-config.service';

@Module({
  imports: [
    TypeOrmModuleMaster.forRootAsync({
      imports: [EnvironmentModule],
      inject: [DbConfigService],
      useFactory: TypeOrmOptions
    }),
  ],
})
export class TypeOrmModule {}
