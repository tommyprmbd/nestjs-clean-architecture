import { UserFindByIdUseCase } from '../../../../src/usecase/users';
import { UserMapperMock } from '../../../mock/infra/mapper/user-mapper.mock';
import { UserRepositoryMock } from '../../../mock/infra/repository/user-repository.mock';

describe('UserFindByIdUseCase', () => {
  let userFindByIdUseCase: UserFindByIdUseCase;

  let userRepository: UserRepositoryMock;
  let userMapper: UserMapperMock;

  const id: number = 1;

  beforeEach(async () => {
    userRepository = new UserRepositoryMock();
    userMapper = new UserMapperMock();
    userFindByIdUseCase = new UserFindByIdUseCase(userRepository, userMapper);
  });

  it('should be defined', () => {
    expect(userFindByIdUseCase).toBeDefined();
  });

  describe('execute()', () => {
    it('should return user when it successfully', async () => {
      const mockUser = {
        fullName: 'John Doe',
        email: 'example01@mail.com',
        password: 'plainPassword',
        phone: '0851',
      };

      userRepository.findById.mockResolvedValue(mockUser);
      userMapper.asSingle.mockReturnValue(mockUser);

      const result = await userFindByIdUseCase.execute(id);

      expect(result).toBe(mockUser);
      expect(userRepository.findById).toHaveBeenCalledWith(id);
      expect(userMapper.asSingle).toHaveBeenCalledWith(mockUser);
    });

    it('should throw error when user not found', async () => {});
  });
});
