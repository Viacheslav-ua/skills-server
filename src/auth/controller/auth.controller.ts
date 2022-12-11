import { Body, Controller, Post, Request } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/crete-user.dto';
import { User } from 'src/users/entities/users.entity';
import { AuthService } from '../services/auth.service';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Login' })
  @ApiResponse({ status: 200, type: User })
  @Post('/login')
  login(@Body() createUserDto: CreateUserDto) {
    return this.authService.login(createUserDto);
  }

  @ApiOperation({ summary: 'Create and registration user' })
  @ApiResponse({ status: 200, type: User })
  @Post('/registration')
  registration(@Body() createUserDto: CreateUserDto) {
    return this.authService.registration(createUserDto);
  }

  // @Post('refresh')
  // refresh(@Request() req) {

  //   return this.authService.refresh(req.user.id);
  // }
}
