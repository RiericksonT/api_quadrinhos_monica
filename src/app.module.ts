import { Module } from '@nestjs/common';
import { ComicsModule } from './comics/comics.module';
import { ComicsController } from './comics/comics.controller';
import { PrismaService } from './database/prisma.service';
import { ComicsService } from './comics/comics.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './auth/roles-authorization/roles.guard';
import { CouponsModule } from './coupons/coupons.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [ComicsModule, UserModule, AuthModule, CouponsModule, OrdersModule],
  controllers: [ComicsController, UserController],
  providers: [
    PrismaService,
    ComicsService,
    UserService,
    {
      provide: 'APP_GUARD',
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
