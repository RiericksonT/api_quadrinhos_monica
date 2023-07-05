import { CreateComicDto } from 'src/comics/dto/create-comic.dto';

export abstract class ComicsRepository {
  abstract create(
    title: string,
    author: string,
    publisher: string,
    year: number,
    summary: string,
    cover: string,
    price: number,
    quantity: number,
    rarity: string,
  ): Promise<any>;

  abstract findAll(): Promise<Array<CreateComicDto>>;

  abstract findByID(id: number): Promise<CreateComicDto>;

  abstract searchByTitle(title: string): Promise<Array<CreateComicDto>>;

  abstract searchByAuthor(author: string): Promise<Array<CreateComicDto>>;

  abstract update(id: number, updateComicDto: CreateComicDto): Promise<any>;

  abstract remove(id: number): Promise<any>;
}
