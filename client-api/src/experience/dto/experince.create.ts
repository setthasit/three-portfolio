import { Field, ID, InputType } from '@nestjs/graphql';

@InputType('ExperinceCreateInput')
export class ExperinceCreateInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  company: string;

  @Field(() => String)
  description: string;
}

