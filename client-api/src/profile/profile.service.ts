import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExperinceCreateInput } from 'src/experience/dto/experince.create';
import { HardSkillCreateInput } from 'src/hardskill/dto/hardskill.create';
import { LangaugeSkillCreateInput } from 'src/languageskill/dto/languageskill.create';
import { SoftSkillCreateInput } from 'src/softskill/dto/softskill.create';
import { Repository } from 'typeorm';
import { ProfileCreateInput } from './dto/profile.create';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  public async getProfiles() {
    const profiles = await this.profileRepository.find({
      relations: ['experinces', 'hardSkills', 'softSkills', 'languageSkills'],
    });

    return profiles;
  }

  public async createProfiles(
    profileInput: ProfileCreateInput,
    expsInput: ExperinceCreateInput[],
    hardSkillsInput: HardSkillCreateInput[],
    softSkillsInput: SoftSkillCreateInput[],
    languageSkillsInput: LangaugeSkillCreateInput[],
  ) {
    try {
      let newProfile = this.profileRepository.create({
        ...profileInput,
        experinces: expsInput,
        hardSkills: hardSkillsInput,
        softSkills: softSkillsInput,
        languageSkills: languageSkillsInput,
      });

      this.profileRepository.save(newProfile);

      return newProfile;
    } catch (error) {
      console.log(error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
