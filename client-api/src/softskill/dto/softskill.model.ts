import { Field, ID, ObjectType } from '@nestjs/graphql';
import { SoftSkillConfidenceLevel } from '../softskill.entity';

@ObjectType('SoftSkill')
export class SoftSkillModel {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => SoftSkillConfidenceLevel)
  confidenceLevel: SoftSkillConfidenceLevel;
}
