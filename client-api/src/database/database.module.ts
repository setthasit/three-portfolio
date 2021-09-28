import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from 'src/config/configuration';
import { Experince } from 'src/experience/experince.entity';
import { Profile } from 'src/profile/profile.entity';
import { HardSkill } from 'src/hardskill/hardskill.entity';
import { LanguageSkill } from 'src/languageskill/languageskill.entity';
import { SoftSkill } from 'src/softskill/softskill.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      useUTC: true,
      host: configuration.database.host,
      port: configuration.database.port,
      username: configuration.database.username,
      password: configuration.database.password,
      database: configuration.database.database,
      autoLoadEntities: true,
      entities: [
        Profile,
        Experince,
        HardSkill,
        SoftSkill,
        LanguageSkill
      ],
      migrations: ['src/migrations/*.ts'],
      cli: {
        migrationsDir: 'src/migrations',
      },
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
