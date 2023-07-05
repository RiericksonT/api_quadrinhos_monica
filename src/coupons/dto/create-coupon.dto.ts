import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCouponDto {
  @ApiProperty({ example: 'ABC123', description: 'Coupon code' })
  @IsNotEmpty({
    message: 'code is required',
  })
  code: string;

  @ApiProperty({ example: 10, description: 'Discount percentage' })
  @IsNotEmpty()
  discount: number;

  @ApiProperty({
    example: '2023-12-31',
    description: 'Expiration date of the coupon',
  })
  @IsNotEmpty()
  expireDate: Date;

  @ApiProperty({ example: 'common', description: 'Rarity level of the coupon' })
  @IsNotEmpty()
  rarity: string;
}
