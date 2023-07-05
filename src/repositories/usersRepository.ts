import { User } from 'src/user/entities/user.entity';

export abstract class usersRepository {
  abstract create(
    name: string,
    email: string,
    password: string,
    preferences: string,
    role: string,
  ): Promise<any>;

  abstract findAll(): Promise<Array<any>>;

  abstract findByID(id: number): Promise<any>;

  abstract searchByName(name: string): Promise<Array<any>>;

  abstract searchByEmail(email: string): Promise<any>;

  abstract update(id: number, updateUserDto: any): Promise<any>;

  abstract remove(id: number): Promise<any>;
}
