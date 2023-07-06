import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../src/database/prisma.service';
import { usersRepository } from '../../src/repositories/usersRepository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService implements usersRepository {
  constructor(private prisma: PrismaService) {}
  async create(
    name: string,
    email: string,
    password: string,
    role: string,
    preferences: string,
  ) {
    //encrypt password --------------------------------------------------
    const hashPass = await bcrypt.hash(password, 10);

    return this.prisma.users.create({
      data: {
        name,
        email,
        password: hashPass,
        role,
        preferences,
      },
    });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findByID(id: number) {
    return this.prisma.users.findUnique({
      where: {
        id,
      },
    });
  }

  searchByName(name: string) {
    return this.prisma.users.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }

  searchByEmail(email: string) {
    const user = this.prisma.users.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: {
        id,
      },
      data: {
        ...updateUserDto,
      },
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where: {
        id,
      },
    });
  }
}
