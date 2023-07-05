import { Injectable } from '@nestjs/common';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { PrismaService } from 'src/database/prisma.service';
import { format } from 'date-fns';

@Injectable()
export class CouponsService {
  constructor(private prisma: PrismaService) {}
  async create() {
    const rarity = Math.random() < 0.5 ? 'common' : 'rare';
    const discount =
      rarity === 'common'
        ? Math.floor(Math.random() * 10)
        : Math.floor(Math.random() * 30) + 5;
    //date in format RFC 3339 and 1 week of expiration
    const dataAtual = new Date();
    const umaSemanaDepois = new Date(
      dataAtual.getTime() + 7 * 24 * 60 * 60 * 1000,
    );
    const formatoPrisma = format(
      umaSemanaDepois,
      "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
    );

    //create a random coupon, rarity is common or rare, and discount is between 5 and 25
    const coupon = await this.prisma.coupons.create({
      data: {
        code: Math.random().toString(36).substring(7),
        discount: discount,
        expires: formatoPrisma,
        rarity: rarity,
      },
    });

    return {
      coupon: coupon.code,
    };
  }

  findAll() {
    return this.prisma.coupons.findMany();
  }
}
