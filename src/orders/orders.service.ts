import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/database/prisma.service';
import { th } from 'date-fns/locale';
import { connect } from 'http2';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  async create(userID, couponID, total, status, comics) {
    for (const comic of comics) {
      await this.prisma.comics.update({
        where: { id: comic },
        data: { quantity: { decrement: 1 } },
      });
      await this.prisma.comics
        .findFirst({
          where: { id: comic },
        })
        .then((comic) => {
          total += comic.price;
        });
    }

    if (couponID) {
      await this.prisma.coupons
        .findFirst({
          where: { code: couponID },
        })
        .then((coupon) => {
          //discount is in percent
          total = total - (total * coupon.discount) / 100;
        });
    }

    return await this.prisma.orders.create({
      data: {
        userId: userID,
        couponId: couponID,
        total,
        status,
        comics: {
          connect: comics.map((comic) => ({ id: comic })),
        },
      },
    });
  }

  findAll() {
    return this.prisma.orders.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
