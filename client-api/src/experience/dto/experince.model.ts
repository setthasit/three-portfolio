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

  @Field(() => Boolean)
  isCurrent: boolean;

  @Field(() => Date)
  startAt: Date;

  @Field(() => Date)
  endAt?: Date;
}
