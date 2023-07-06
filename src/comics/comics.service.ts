import { Injectable } from '@nestjs/common';
import { CreateComicDto } from './dto/create-comic.dto';
import { UpdateComicDto } from './dto/update-comic.dto';
import { PrismaService } from '../../src/database/prisma.service';
import { ComicsRepository } from 'src/repositories/comicsReository';

@Injectable()
export class ComicsService implements ComicsRepository {
  constructor(private prisma: PrismaService) {}
  create(
    title: string,
    author: string,
    publisher: string,
    year: number,
    summary: string,
    cover: string,
    price: number,
    quantity: number,
    rarity: string,
  ) {
    return this.prisma.comics.create({
      data: {
        title,
        author,
        publisher,
        year,
        summary,
        cover,
        price,
        quantity,
        rarity,
      },
    });
  }

  findAll() {
    return this.prisma.comics.findMany();
  }

  findByID(id: number) {
    return this.prisma.comics.findUnique({
      where: {
        id: id,
      },
    });
  }

  searchByTitle(title: string) {
    return this.prisma.comics.findMany({
      where: {
        title: {
          contains: title,
        },
      },
    });
  }

  searchByAuthor(author: string) {
    return this.prisma.comics.findMany({
      where: {
        author: {
          contains: author,
        },
      },
    });
  }

  update(id: number, updateComicDto: UpdateComicDto) {
    return this.prisma.comics.update({
      where: {
        id: id,
      },
      data: updateComicDto,
    });
  }

  remove(id: number) {
    return this.prisma.comics.delete({
      where: {
        id: id,
      },
    });
  }
}
