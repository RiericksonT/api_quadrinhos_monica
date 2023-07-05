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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwTAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { Role } from '../auth/roles-authorization/roles.enum';
import { Roles } from '../auth/roles-authorization/roles.decorator';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiCreatedResponse({ description: 'User created successfully' })
  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    const { name, email, password, role, preferences } = createUserDto;
    return this.userService.create(name, email, password, role, preferences);
  }

  @ApiOkResponse({ description: 'Returns all users' })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOkResponse({ description: 'Returns a specific user' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findByID(+id);
  }

  @ApiBearerAuth()
  @ApiOkResponse({ description: 'User updated successfully' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @UseGuards(JwTAuthGuard)
  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @ApiBearerAuth()
  @ApiOkResponse({ description: 'User deleted successfully' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @Roles(Role.ADMIN)
  @UseGuards(JwTAuthGuard)
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
