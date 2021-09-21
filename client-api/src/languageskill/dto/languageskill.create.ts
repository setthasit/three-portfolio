import { Field, InputType } from '@nestjs/graphql';
import { LanguageSkillConfidenceLevel } from '../languageskill.entity';

@InputType('LangaugeSkillCreateInput')
export class LangaugeSkillCreateInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => LanguageSkillConfidenceLevel)
  confidenceLevel: LanguageSkillConfidenceLevel;
}
