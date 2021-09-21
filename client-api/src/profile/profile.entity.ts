import { Experince } from 'src/experience/experince.entity';
import { HardSkill } from 'src/hardskill/hardskill.entity';
import { LanguageSkill } from 'src/languageskill/languageskill.entity';
import { SoftSkill } from 'src/softskill/softskill.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  github: string;

  @Column()
  coverLetter: string;

  @OneToMany(() => Experince, (experince) => experince.profile, {
    cascade: true,
  })
  experinces: Experince[];

  @OneToMany(() => HardSkill, (skill) => skill.profile, { cascade: true })
  hardSkills: HardSkill[];

  @OneToMany(() => SoftSkill, (skill) => skill.profile, { cascade: true })
  softSkills: SoftSkill[];

  @OneToMany(() => LanguageSkill, (skill) => skill.profile, { cascade: true })
  languageSkills: LanguageSkill[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
