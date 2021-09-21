import { Test, TestingModule } from '@nestjs/testing';
import { LanguageskillResolver } from './languageskill.resolver';

describe('LanguageskillResolver', () => {
  let resolver: LanguageskillResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguageskillResolver],
    }).compile();

    resolver = module.get<LanguageskillResolver>(LanguageskillResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
