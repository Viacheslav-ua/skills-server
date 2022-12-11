import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/crete-user.dto';
import { AuthService } from '../services/auth.service';
import { JwtAuthGuard } from '../services/jwt-auth.guard';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Login' })
  @ApiResponse({ status: 200, type: 'accessToken' })
  @Post('/login')
  login(@Body() createUserDto: CreateUserDto) {
    return this.authService.login(createUserDto);
  }

  @ApiOperation({ summary: 'Create and registration user' })
  @ApiResponse({ status: 200, type: 'accessToken' })
  @Post('/registration')
  registration(@Body() createUserDto: CreateUserDto) {
    return this.authService.registration(createUserDto);
  }

  @ApiOperation({ summary: 'Refresh token' })
  @ApiResponse({ status: 201, type: 'accessToken' })
  @UseGuards(JwtAuthGuard)
  @Post('/refresh')
  refresh(@Request() req) {
    return this.authService.refresh(req.user.id);
  }
}
