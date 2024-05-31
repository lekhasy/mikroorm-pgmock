import { MikroORM } from '@mikro-orm/core';
import { GetMiKroORMOptions } from './mikro-orm.config';
import dotenv from 'dotenv';
dotenv.config();

(async () => {
  const orm = await MikroORM.init(GetMiKroORMOptions());
  const migrator = orm.getMigrator();
  await migrator.createMigration();
  await orm.close(true);
})();
