import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DbConfigInterface } from 'src/domain/config';

export const TypeOrmOptions = (
  dbConfig: DbConfigInterface,
): TypeOrmModuleOptions =>
  ({
    type: dbConfig.getType(),
    host: dbConfig.getHost(),
    port: dbConfig.getPort(),
    database: dbConfig.getName(),
    username: dbConfig.getUsername(),
    password: dbConfig.getPassword(),
    synchronize: dbConfig.isSync(),
    autoLoadEntities: dbConfig.isAutoLoadEntities(),
    entities: [],
  }) as TypeOrmModuleOptions;
