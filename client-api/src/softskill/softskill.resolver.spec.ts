import { Test, TestingModule } from '@nestjs/testing';
import { SoftskillResolver } from './softskill.resolver';

describe('SoftskillResolver', () => {
  let resolver: SoftskillResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoftskillResolver],
    }).compile();

    resolver = module.get<SoftskillResolver>(SoftskillResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
