import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateComicDto {
  @ApiProperty({
    example: 'Turma da Mônica Jovem',
    description: 'Title of the comic',
  })
  @IsNotEmpty({
    message: 'Title is required',
  })
  title: string;

  @ApiProperty({
    example: 'Mauricio de Sousa',
    description: 'Author of the comic',
  })
  @IsNotEmpty({
    message: 'Author is required',
  })
  author: string;

  @ApiProperty({
    example: 'Panini Comics',
    description: 'Publisher of the comic',
  })
  @IsNotEmpty({
    message: 'Publisher is required',
  })
  publisher: string;

  @ApiProperty({
    example: 2019,
    description: 'Year of the comic',
  })
  @IsNotEmpty({
    message: 'Year is required',
  })
  year: number;

  @ApiProperty({
    example:
      'A Turma da Mônica Jovem é uma série de histórias em quadrinhos criada por Mauricio de Sousa e publicada pela Panini Comics mensalmente desde agosto de 2008.',
    description: 'Summary of the comic',
  })
  @IsNotEmpty({
    message: 'Summary is required',
  })
  @Length(10, 255)
  summary: string;

  @ApiProperty({
    example: 'https://i.imgur.com/1qZ6R5I.jpg',
    description: 'Cover of the comic',
  })
  @IsNotEmpty({
    message: 'Cover is required',
  })
  cover: string;

  @ApiProperty({
    example: 29.9,
    description: 'Price of the comic',
  })
  @IsNotEmpty({
    message: 'Price is required',
  })
  price: number;

  @ApiProperty({
    example: 10,
    description: 'Quantity of the comic',
  })
  @IsNotEmpty({
    message: 'Quantity is required',
  })
  quantity: number;

  @ApiProperty({
    example: 'Raro',
    description: 'Rarity of the comic',
  })
  @IsNotEmpty({
    message: 'Rarity is required',
  })
  rarity: string;
}
