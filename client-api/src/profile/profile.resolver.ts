import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ExperinceCreateInput } from 'src/experience/dto/experince.create';
import { HardSkillCreateInput } from 'src/hardskill/dto/hardskill.create';
import { LangaugeSkillCreateInput } from 'src/languageskill/dto/languageskill.create';
import { SoftSkillCreateInput } from 'src/softskill/dto/softskill.create';
import { ProfileCreateInput, ProfileCreateObject } from './dto/profile.create';
import { ProfileModel } from './dto/profile.model';
import { ProfileService } from './profile.service';

@Resolver(() => ProfileModel)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => [ProfileModel])
  async getProfile(): Promise<ProfileModel[]> {
    const result = await this.profileService.getProfiles();

    return result;
  }

  @Mutation(() => ProfileCreateObject)
  async createProfile(
    @Args('profile') profile: ProfileCreateInput,
    @Args({ name: 'experinces', type: () => [ExperinceCreateInput]}) experinces: [ExperinceCreateInput],
    @Args({name:'hardSkills', type: () => [HardSkillCreateInput]}) hardSkills: [HardSkillCreateInput],
    @Args({name:'softSkills', type: () => [SoftSkillCreateInput]}) softSkills: [SoftSkillCreateInput],
    @Args({name:'languageSkills', type: () => [LangaugeSkillCreateInput]}) languageSkills: [LangaugeSkillCreateInput],
  ): Promise<ProfileCreateObject> {
    const result = await this.profileService.createProfiles(
      profile,
      experinces,
      hardSkills,
      softSkills,
      languageSkills
    );

    return result;
  }
}
