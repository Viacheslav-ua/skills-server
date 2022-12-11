import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/crete-user.dto';
import { UserService } from 'src/users/services/user.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/entities/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // async login(createUserDto: CreateUserDto) {}

  async registration(createUserDto: CreateUserDto) {
    const candidate = await this.userService.getUserByLogin(
      createUserDto.login,
    );
    if (candidate) {
      throw new HttpException(
        'User with this login already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const salt = Number(process.env.SALT);
    const hashPassword = await bcrypt.hash(createUserDto.password, salt);
    const user = await this.userService.createUser({
      ...createUserDto,
      password: hashPassword,
    });

    return this.generateToken(user);
  }

  async generateToken(user: User) {
    const payload = { login: user.login, id: user.id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
