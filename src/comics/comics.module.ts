import { Module } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { ComicsController } from './comics.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ComicsController],
  providers: [ComicsService, PrismaService],
})
export class ComicsModule {}
