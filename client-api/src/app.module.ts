import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from './database/database.module';
import { ProfileModule } from './profile/profile.module';
import { ExperienceResolver } from './experience/experience.resolver';
import { HardSkillResolver } from './hardskill/hardskill.resolver';
import { configuration } from './config/configuration';
import { LanguageskillResolver } from './languageskill/languageskill.resolver';
import { SoftskillResolver } from './softskill/softskill.resolver';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
      path: configuration.app.gqlPrefixPath,
      debug: configuration.app.gqlDebug,
      playground: configuration.app.gqlPlayground,
    }),
    ProfileModule,
  ],
  providers: [
    ExperienceResolver,
    HardSkillResolver,
    LanguageskillResolver,
    SoftskillResolver,
  ],
})
export class AppModule {}
