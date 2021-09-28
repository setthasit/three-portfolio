import { registerEnumType } from '@nestjs/graphql';
import { Profile } from 'src/profile/profile.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum LanguageSkillConfidenceLevel {
  NOT_AT_ALL = 'NOT_AT_ALL',
  BEGINNER = 'BEGINNER',
  INTERMIDATE = 'INTERMIDATE',
  PROFESSIONNAL = 'PROFESSIONNAL',
}

registerEnumType(LanguageSkillConfidenceLevel, {
  name: 'LanguageSkillConfidenceLevel',
});

@Entity()
export class LanguageSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: LanguageSkillConfidenceLevel,
  })
  confidenceLevel: LanguageSkillConfidenceLevel;

  @ManyToOne(() => Profile, (profile) => profile.languageSkills)
  profile: Profile;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
