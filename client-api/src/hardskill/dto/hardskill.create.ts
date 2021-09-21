import { Field, InputType } from '@nestjs/graphql';
import { ConfidenceLevel } from '../hardskill.entity';

@InputType('HardSkillCreateInput')
export class HardSkillCreateInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => ConfidenceLevel)
  confidenceLevel: ConfidenceLevel;
}
