import { Module } from '@nestjs/common';
import { TypeOrmModule as TypeOrmModuleMaster } from '@nestjs/typeorm';
import { EnvironmentModule } from '../environment/environment.module';
import { TypeOrmOptions } from './type-orm.option';
import { EnvironmentService } from '../environment/environment.service';

@Module({
  imports: [
    TypeOrmModuleMaster.forRootAsync({
      imports: [EnvironmentModule],
      inject: [EnvironmentService],
      useFactory: TypeOrmOptions
    }),
  ],
})
export class TypeOrmModule {}
