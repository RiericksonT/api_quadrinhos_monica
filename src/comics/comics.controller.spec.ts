import { Test, TestingModule } from '@nestjs/testing';
import { ComicsController } from './comics.controller';
import { ComicsService } from './comics.service';
import { CreateComicDto } from './dto/create-comic.dto';
import { UpdateComicDto } from './dto/update-comic.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Comic } from './entities/comic.entity';

describe('ComicsController', () => {
  let comicsController: ComicsController;
  let comicsService: ComicsService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ComicsController],
      providers: [ComicsService],
    }).compile();

    comicsController = moduleRef.get<ComicsController>(ComicsController);
    comicsService = moduleRef.get<ComicsService>(ComicsService);
  });

  describe('create', () => {
    it('should create a comic', async () => {
      const createComicDto: CreateComicDto = {
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

      const createdComic = {
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

      jest.spyOn(comicsService, 'create').mockResolvedValue({
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
      });

      const result = await comicsController.create(createComicDto);

      expect(result).toEqual(createdComic);
      expect(comicsService.create).toHaveBeenCalledWith(createComicDto);
    });
  });

  describe('findAll', () => {
    it('should return all comics', async () => {
      const comics: any[] = [
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

      jest.spyOn(comicsService, 'findAll').mockResolvedValue(comics);

      const result = await comicsController.findAll();

      expect(result).toEqual(comics);
      expect(comicsService.findAll).toHaveBeenCalled();
    });
  });

  // Adicione testes para os outros métodos do ComicsController
});
