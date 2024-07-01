import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { AuthService } from './../../../../src/infra/auth';
import { Test, TestingModule } from '@nestjs/testing';
import { JwtConfigService } from './../../../../src/infra/config/environment';
import { JwtConfigServiceMock } from './../../../mock/infra/config/environment/jwt-config-service.mock';

describe('login()', () => {
  let authService: AuthService;
  let jwtService: JwtService;
  let jwtConfigService: JwtConfigService;

  const payload = { email: 'example@gmail.com' };
  const jwtSecret = 'jwtSecret';
  const token = 'signedToken';
  const signOptions: JwtSignOptions = {
    algorithm: 'HS512',
    secret: jwtSecret,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn(),
          },
        },
        {
          provide: JwtConfigService,
          useValue: JwtConfigServiceMock,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
    jwtConfigService = module.get<JwtConfigService>(JwtConfigService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('login()', () => {
    it('should sign the payload correctly', async () => {
      jest.spyOn(jwtService, 'signAsync').mockResolvedValue(token);
      jest.spyOn(jwtConfigService, 'getSecret').mockReturnValue(jwtSecret);

      const result = await authService.login(payload);

      expect(jwtConfigService.getSecret).toHaveBeenCalled();
      expect(jwtService.signAsync).toHaveBeenLastCalledWith(
        payload,
        signOptions,
      );
      expect(result).toBe(token);
    });

    it('should throw error if signing fails', async () => {
      jest.spyOn(jwtService, 'signAsync').mockRejectedValue(new Error());

      await expect(authService.login(payload)).rejects.toThrow();
    });
  });
});
