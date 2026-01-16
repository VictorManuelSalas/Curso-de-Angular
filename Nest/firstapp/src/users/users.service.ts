import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  private users = [
    {
      id: 12,
      name: 'Test',
    },
  ];
  
  getUsers() {
    return this.users;
  }
}
