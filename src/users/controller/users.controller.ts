import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/crete-user.dto';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
