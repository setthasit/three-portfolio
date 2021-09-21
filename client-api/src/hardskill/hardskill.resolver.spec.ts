import { Test, TestingModule } from '@nestjs/testing';
import { HardSkillResolver } from './hardskill.resolver';

describe('SkillResolver', () => {
  let resolver: HardSkillResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HardSkillResolver],
    }).compile();

    resolver = module.get<HardSkillResolver>(HardSkillResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
