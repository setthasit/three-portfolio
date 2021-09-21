import { registerEnumType } from '@nestjs/graphql';
import { Profile } from 'src/profile/profile.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export enum ConfidenceLevel {
  NOT_AT_ALL = 'NOT_AT_ALL',
  BEGINNER = 'BEGINNER',
  INTERMIDATE = 'INTERMIDATE',
  PROFESSIONNAL = 'PROFESSIONNAL',
}

registerEnumType(ConfidenceLevel, {
  name: 'ConfidenceLevel'
})

@Entity()
export class HardSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: ConfidenceLevel,
  })
  confidenceLevel: ConfidenceLevel;

  @ManyToOne(() => Profile, (profile) => profile.hardSkills)
  profile: Profile;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
