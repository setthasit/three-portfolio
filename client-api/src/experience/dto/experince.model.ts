import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Experince')
export class ExperinceModel {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  company: string;

  @Field(() => String)
  description: string;
}

