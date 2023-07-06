import { Test, TestingModule } from '@nestjs/testing';
import { ComicsService } from './comics.service';
import { PrismaService } from '../../src/database/prisma.service';
import { CreateComicDto } from './dto/create-comic.dto';

describe('ComicsService', () => {
  let comicsService: ComicsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        ComicsService,
        {
          provide: PrismaService,
          useValue: {
            comics: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    comicsService = moduleRef.get<ComicsService>(ComicsService);
    prismaService = moduleRef.get<PrismaService>(PrismaService);
  });

  describe('create', () => {
    it('should create a comic', async () => {
      const mockCreateComicDto: CreateComicDto = {
        title: 'Comic Title',
        author: 'Comic Author',
        publisher: 'Comic Publisher',
        year: 2021,
        summary: 'Comic Summary',
        cover: 'Comic Cover',
        price: 9.99,
        quantity: 10,
        rarity: 'Common',
      };

      const mockCreatedComic = {
        id: 1,
        title: 'Comic 1',
        author: 'Author 1',
        publisher: 'Publisher 1',
        year: 2021,
        summary: 'Summary 1',
        cover: 'Cover 1',
        price: 9.99,
        quantity: 10,
        rarity: 'Common',
      };

      jest
        .spyOn(prismaService.comics, 'create')
        .mockResolvedValue(mockCreatedComic);

      const result = await comicsService.create(
        mockCreateComicDto.title,
        mockCreateComicDto.author,
        mockCreateComicDto.publisher,
        mockCreateComicDto.year,
        mockCreateComicDto.summary,
        mockCreateComicDto.cover,
        mockCreateComicDto.price,
        mockCreateComicDto.quantity,
        mockCreateComicDto.rarity,
      );

      expect(result).toEqual(mockCreatedComic);
      expect(prismaService.comics.create).toHaveBeenCalledWith({
        data: mockCreateComicDto,
      });
    });
  });

  describe('findAll', () => {
    it('should return all comics', async () => {
      const mockComics = [
        {
          id: 1,
          title: 'Comic 1',
          author: 'Author 1',
          publisher: 'Publisher 1',
          year: 2021,
          summary: 'Summary 1',
          cover: 'Cover 1',
          price: 9.99,
          quantity: 10,
          rarity: 'Common',
        },
        {
          id: 2,
          title: 'Comic 2',
          author: 'Author 2',
          publisher: 'Publisher 2',
          year: 2022,
          summary: 'Summary 2',
          cover: 'Cover 2',
          price: 14.99,
          quantity: 5,
          rarity: 'Rare',
        },
      ];

      jest
        .spyOn(prismaService.comics, 'findMany')
        .mockResolvedValue(mockComics);

      const result = await comicsService.findAll();

      expect(result).toEqual(mockComics);
      expect(prismaService.comics.findMany).toHaveBeenCalled();
    });
  });
});
