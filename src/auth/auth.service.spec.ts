import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UserService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: {
            searchByEmail: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('validateUser', () => {
    it('should validate user credentials and return user if valid', async () => {
      const mockEmail = 'test@example.com';
      const mockPassword = 'password';

      const mockUser = {
        id: 1,
        name: 'Test User',
        email: 'test@example.com',
        password: 'hashedPassword',
        role: 'user',
        preferences: 'Marvel',
      };

      jest.spyOn(userService, 'searchByEmail').mockResolvedValue({
        id: 1,
        name: 'Test User',
        email: 'test@example.com',
        password: 'hashedPassword',
        role: 'user',
        preferences: 'Marvel',
      });
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(true as never);

      const result = await service.validateUser(mockEmail, mockPassword);

      expect(userService.searchByEmail).toHaveBeenCalledWith(mockEmail);
      expect(bcrypt.compare).toHaveBeenCalledWith(
        mockPassword,
        mockUser.password,
      );
      expect(result).toEqual({
        id: mockUser.id,
        name: mockUser.name,
        email: mockUser.email,
        role: mockUser.role,
        preferences: mockUser.preferences,
      });
    });

    it('should return null if user is not found or password does not match', async () => {
      const mockEmail = 'test@example.com';
      const mockPassword = 'password';

      jest.spyOn(userService, 'searchByEmail').mockResolvedValue(null);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(false as never);

      const result = await service.validateUser(mockEmail, mockPassword);

      expect(userService.searchByEmail).toHaveBeenCalledWith(mockEmail);
      expect(bcrypt.compare).toHaveBeenCalledWith(mockPassword, null);
      expect(result).toBeNull();
    });
  });

  describe('login', () => {
    it('should generate and return an access token', () => {
      const mockUser = {
        id: 1,
        name: 'Test User',
        email: 'test@example.com',
        role: 'user',
        preferences: 'Marvel',
      };

      const mockAccessToken = 'generatedAccessToken';

      jest.spyOn(jwtService, 'sign').mockReturnValue(mockAccessToken);

      const result = service.login(mockUser);

      expect(jwtService.sign).toHaveBeenCalledWith({
        sub: mockUser.id,
        email: mockUser.email,
        role: mockUser.role,
      });
      expect(result).toEqual({ access_token: mockAccessToken });
    });
  });

  // Add more tests as needed
});
