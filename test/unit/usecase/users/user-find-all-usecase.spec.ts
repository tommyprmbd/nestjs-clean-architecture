import { UserFindAllUseCase } from '../../../../src/usecase/users';
import { UserMapperMock } from '../../../mock/infra/mapper/user-mapper.mock';
import { UserRepositoryMock } from '../../../mock/infra/repository/user-repository.mock';
import { PageOptionsDtoInterface } from '../../../../src/domain/dtos';
import { OrderDirectionEnum } from '../../../../src/domain/common';

describe('UserFindAllUseCase', () => {
  let userFindAllUseCase: UserFindAllUseCase;

  let userRepository: UserRepositoryMock;
  let userMapper: UserMapperMock;

  const mockUsers = [
    {
      fullName: 'John Doe',
      email: 'example01@mail.com',
      password: 'plainPassword',
      phone: '0851',
    },
    {
      fullName: 'John Cena',
      email: 'example02@mail.com',
      password: 'plainPassword',
      phone: '0852',
    },
    {
      fullName: 'John Favreu',
      email: 'example03@mail.com',
      password: 'plainPassword',
      phone: '0853',
    },
  ];

  beforeEach(async () => {
    userRepository = new UserRepositoryMock();
    userMapper = new UserMapperMock();
    userFindAllUseCase = new UserFindAllUseCase(userRepository, userMapper);
  });

  it('should be defined', () => {
    expect(userFindAllUseCase).toBeDefined();
  });

  describe('execute()', () => {
    it('should return list users when it successfully', async () => {
      const mockPageOptionsDto: PageOptionsDtoInterface = {
        getOrder: jest.fn().mockReturnValue(OrderDirectionEnum.ASC),
        getPage: jest.fn().mockReturnValue(1),
        getSkip: jest.fn().mockReturnValue(0),
        getTake: jest.fn().mockReturnValue(10),
      };

      userRepository.paginate.mockResolvedValue(mockUsers);
      userMapper.fromPagination.mockReturnValue(mockUsers);

      const result = await userFindAllUseCase.execute(mockPageOptionsDto);

      expect(result).toEqual(mockUsers);
      expect(userRepository.paginate).toHaveBeenCalledWith(mockPageOptionsDto);
      expect(userMapper.fromPagination).toHaveBeenCalledWith(mockUsers);
    });
  });
});
