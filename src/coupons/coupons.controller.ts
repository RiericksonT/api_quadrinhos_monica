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
import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { ApiTags, ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { JwTAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';

@ApiTags('coupons')
@Controller('coupons')
export class CouponsController {
  constructor(private readonly couponsService: CouponsService) {}

  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Creates a new coupon' })
  @UseGuards(JwTAuthGuard)
  @Get()
  create() {
    return this.couponsService.create();
  }

  @ApiOkResponse({ description: 'Returns all active coupons' })
  @Get('active')
  findAll() {
    return this.couponsService.findAll();
  }
}
