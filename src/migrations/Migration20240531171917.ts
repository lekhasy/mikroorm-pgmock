import { Migration } from '@mikro-orm/migrations';

export class Migration20240531171917 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("id" serial primary key, "full_name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null, "bio" text not null default \'\');',
    );
    this.addSql(
      'alter table "user" add constraint "user_email_unique" unique ("email");',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }
}
