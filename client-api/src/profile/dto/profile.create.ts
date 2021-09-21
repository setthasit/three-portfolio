import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ExperinceModel } from 'src/experience/dto/experince.model';
import { HardSkillModel } from 'src/hardskill/dto/hardskill.model';
import { LanguageSkillModel } from 'src/languageskill/dto/languageskill.model';
import { SoftSkillModel } from 'src/softskill/dto/softskill.model';

@InputType()
export class ProfileCreateInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  github: string;

  @Field(() => String)
  coverLetter: string;
}

@ObjectType()
export class ProfileCreateObject {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  github: string;

  @Field(() => String)
  coverLetter: string;

  @Field(() => [ExperinceModel])
  experinces: ExperinceModel[];

  @Field(() => [HardSkillModel])
  hardSkills: HardSkillModel[];

  @Field(() => [SoftSkillModel])
  softSkills: SoftSkillModel[];

  @Field(() => [LanguageSkillModel])
  languageSkills: LanguageSkillModel[];
}
