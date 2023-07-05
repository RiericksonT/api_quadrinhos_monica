import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ComicsService } from './comics.service';
import { CreateComicDto } from './dto/create-comic.dto';
import { UpdateComicDto } from './dto/update-comic.dto';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwTAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { Role } from 'src/auth/roles-authorization/roles.enum';
import { Roles } from 'src/auth/roles-authorization/roles.decorator';
import { Comic } from './entities/comic.entity';

@ApiTags('comics')
@Controller('comics')
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) {}

  @ApiOperation({ summary: 'Create a comic' })
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: 'The comic has been successfully created',
    type: Comic,
  })
  @ApiBadRequestResponse({ description: 'Invalid data provided' })
  @Roles(Role.ADMIN)
  @Post('create')
  create(@Body() createComicDto: CreateComicDto) {
    const {
      title,
      author,
      publisher,
      year,
      summary,
      cover,
      price,
      quantity,
      rarity,
    } = createComicDto;

    return this.comicsService.create(
      title,
      author,
      publisher,
      year,
      summary,
      cover,
      price,
      quantity,
      rarity,
    );
  }

  @ApiOperation({ summary: 'List all comics' })
  @ApiOkResponse({
    description: 'Retrieved all comics successfully',
    type: [Comic],
  })
  @Get('')
  findAll() {
    return this.comicsService.findAll();
  }

  @ApiOperation({ summary: 'Find a comic by ID' })
  @ApiOkResponse({
    description: 'Retrieved the comic successfully',
    type: Comic,
  })
  @ApiNotFoundResponse({ description: 'Comic not found' })
  @Get(':id')
  findByID(@Param('id') id: string) {
    return this.comicsService.findByID(+id);
  }

  @ApiOperation({ summary: 'List comics by title' })
  @ApiOkResponse({
    description: 'Retrieved comics by title successfully',
    type: [Comic],
  })
  @ApiNotFoundResponse({ description: 'No comics found with the given title' })
  @Get('/:title/title')
  searchByTitle(@Param('title') title: string) {
    return this.comicsService.searchByTitle(title);
  }

  @ApiOperation({ summary: 'List comics by author' })
  @ApiOkResponse({
    description: 'Retrieved comics by author successfully',
    type: [Comic],
  })
  @ApiNotFoundResponse({ description: 'No comics found with the given author' })
  @Get('/:author/author')
  searchByAuthor(@Param('author') author: string) {
    return this.comicsService.searchByAuthor(author);
  }

  @ApiOperation({ summary: 'Update a comic' })
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'The comic has been successfully updated',
    type: Comic,
  })
  @ApiBadRequestResponse({ description: 'Invalid data provided' })
  @UseGuards(JwTAuthGuard)
  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateComicDto: UpdateComicDto) {
    return this.comicsService.update(+id, updateComicDto);
  }

  @ApiOperation({ summary: 'Delete a comic' })
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'The comic has been successfully deleted' })
  @ApiBadRequestResponse({ description: 'Invalid comic ID provided' })
  @ApiNotFoundResponse({ description: 'Comic not found' })
  @UseGuards(JwTAuthGuard)
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.comicsService.remove(+id);
  }
}
