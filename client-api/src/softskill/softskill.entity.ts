import { registerEnumType } from '@nestjs/graphql';
import { Profile } from 'src/profile/profile.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export enum SoftSkillConfidenceLevel {
  NOT_AT_ALL = 'NOT_AT_ALL',
  BEGINNER = 'BEGINNER',
  INTERMIDATE = 'INTERMIDATE',
  PROFESSIONNAL = 'PROFESSIONNAL',
}

registerEnumType(SoftSkillConfidenceLevel, {
  name: 'SoftSkillConfidenceLevel'
})

@Entity()
export class SoftSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: SoftSkillConfidenceLevel,
  })
  confidenceLevel: SoftSkillConfidenceLevel;

  @ManyToOne(() => Profile, (profile) => profile.softSkills)
  profile: Profile;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
