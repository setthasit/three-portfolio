import { Field, InputType } from '@nestjs/graphql';
import { SoftSkillConfidenceLevel } from '../softskill.entity';

@InputType('SoftSkillCreateInput')
export class SoftSkillCreateInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => SoftSkillConfidenceLevel)
  confidenceLevel: SoftSkillConfidenceLevel;
}
