import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  @IsNotEmpty({ message: 'user is required' })
  userID: number;

  @ApiProperty({ example: 2, description: 'Coupon ID' })
  @IsString()
  couponID: number;

  @ApiProperty({ example: 100, description: 'Total amount' })
  @IsNotEmpty({ message: 'total is required' })
  total: number;

  @ApiProperty({ example: 'pending', description: 'Order status' })
  @IsString()
  status: string;

  @ApiProperty({ example: [1, 2, 3], description: 'Array of comic IDs' })
  @IsNotEmpty({ message: 'comics array is required' })
  comics: number[];
}
