import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];

  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto): CreateUserDto {
    this.users.push({ ...user, id: this.users.length + 1 });
    return {
      ...user,
      id: this.users.length + 1,
    };
  }
}
