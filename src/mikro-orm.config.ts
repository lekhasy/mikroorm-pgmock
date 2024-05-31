import { Logger } from '@nestjs/common';
import { PostgreSqlDriver, Utils, defineConfig } from '@mikro-orm/postgresql';
import { User } from './entities';
import { Migrator } from '@mikro-orm/migrations';

const logger = new Logger('MikroORM');

export const GetMiKroORMOptions = () =>
  defineConfig({
    driver: PostgreSqlDriver,
    clientUrl: process.env.DATABASE_URL,
    logger: logger.log.bind(logger),
    extensions: [Migrator],
    migrations: {
      path: Utils.detectTsNode() ? 'src/migrations' : 'dist/migrations',
    },
    entities: [User],
  });

export default GetMiKroORMOptions();
