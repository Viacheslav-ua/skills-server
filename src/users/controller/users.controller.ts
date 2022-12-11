import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles-auth.decorator';
import { RolesGuard } from 'src/auth/services/roles.guard';
import { User } from '../entities/users.entity';
import { UserService } from '../services/user.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('ADMIN', 'USER')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
