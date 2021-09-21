import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ConfidenceLevel } from '../hardskill.entity';

@ObjectType('HardSkill')
export class HardSkillModel {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => ConfidenceLevel)
  confidenceLevel: ConfidenceLevel;
}
