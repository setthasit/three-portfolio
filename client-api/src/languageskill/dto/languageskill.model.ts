import { Field, ID, ObjectType } from '@nestjs/graphql';
import { LanguageSkillConfidenceLevel } from '../languageskill.entity';

@ObjectType('LanguageSkill')
export class LanguageSkillModel {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => LanguageSkillConfidenceLevel)
  confidenceLevel: LanguageSkillConfidenceLevel;
}
