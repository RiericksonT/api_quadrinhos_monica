import { PartialType } from '@nestjs/mapped-types';
import { CreateComicDto } from './create-comic.dto';
import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateComicDto extends PartialType(CreateComicDto) {
  @ApiProperty({
    example: 'Turma da Mônica Jovem',
    description: 'Title of the comic',
    nullable: true,
  })
  title?: string;

  @ApiProperty({
    example: 'Mauricio de Sousa',
    description: 'Author of the comic',
  })
  author: string;

  @ApiProperty({
    example: 'Panini Comics',
    description: 'Publisher of the comic',
  })
  publisher: string;

  @ApiProperty({
    example: 2019,
    description: 'Year of the comic',
  })
  year: number;

  @ApiProperty({
    example:
      'A Turma da Mônica Jovem é uma série de histórias em quadrinhos criada por Mauricio de Sousa e publicada pela Panini Comics mensalmente desde agosto de 2008.',
    description: 'Summary of the comic',
  })
  @Length(10, 255)
  summary: string;

  @ApiProperty({
    example: 'https://i.imgur.com/1qZ6R5I.jpg',
    description: 'Cover of the comic',
  })
  cover: string;

  @ApiProperty({
    example: 29.9,
    description: 'Price of the comic',
  })
  price: number;

  @ApiProperty({
    example: 10,
    description: 'Quantity of the comic',
  })
  quantity: number;

  @ApiProperty({
    example: 'Raro',
    description: 'Rarity of the comic',
  })
  rarity: string;
}
