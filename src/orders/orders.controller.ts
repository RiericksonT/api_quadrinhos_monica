import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiCreatedResponse({ description: 'Order created successfully' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    const { userID, couponID, total, status, comics } = createOrderDto;
    return this.ordersService.create(userID, couponID, total, status, comics);
  }

  @ApiOkResponse({ description: 'Returns all orders' })
  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @ApiOkResponse({ description: 'Returns a specific order' })
  @ApiNotFoundResponse({ description: 'Order not found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @ApiOkResponse({ description: 'Order updated successfully' })
  @ApiNotFoundResponse({ description: 'Order not found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @ApiOkResponse({ description: 'Order deleted successfully' })
  @ApiNotFoundResponse({ description: 'Order not found' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
