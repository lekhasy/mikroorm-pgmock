import { MikroORM } from '@mikro-orm/core';
import { PostgresMock } from 'pgmock';
import { GetMiKroORMOptions } from './mikro-orm.config';
import { User } from './entities';
import dotenv from 'dotenv';
dotenv.config();

describe('pgmock migration with mikro orm', () => {
  it('Should migrate successfully', async () => {
    const pgmock = await PostgresMock.create();
    const dbConnectionString = await pgmock.listen(0);
    process.env.DATABASE_URL = dbConnectionString;

    const orm = await MikroORM.init(GetMiKroORMOptions());
    await orm.getMigrator().up();

    const allUsers = await orm.em.fork().findAll(User);
    console.log(allUsers);
  });
});
