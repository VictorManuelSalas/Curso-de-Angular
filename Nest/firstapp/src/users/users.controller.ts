import { Controller, Get, Post , Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller()
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Get('/users')
  getUsers() {
    return this.usersServices.getUsers();
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {

  }
}
