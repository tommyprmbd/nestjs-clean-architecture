import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { ExtractJwt } from 'passport-jwt';
import { JwtStrategy } from './../../../../src/infra/auth/jwt.strategy';
import { JwtConfigService } from './../../../../src/infra/config/environment';
import { JwtConfigServiceMock } from './../../../mock/infra/config/environment/jwt-config-service.mock';

describe('JwtStrategy', () => {
  let jwtStrategy: JwtStrategy;

  const payload = { email: 'example@gmail.com' };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
      providers: [
        JwtStrategy,
        {
          provide: JwtConfigService,
          useValue: JwtConfigServiceMock,
        },
      ],
    }).compile();

    jwtStrategy = module.get<JwtStrategy>(JwtStrategy);
  });

  it('should be defined', () => {
    expect(jwtStrategy).toBeDefined();
  });

  describe('validate()', () => {
    it('should validate and return payload', async () => {
      const result = await jwtStrategy.validate(payload);

      expect(result).toEqual(payload);
    });
  });
});
