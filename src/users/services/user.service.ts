import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from 'src/users/dto/crete-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.save(createUserDto);
  }

  async getOneUser(id: number): Promise<User> {
    return await this.userRepository.findOneBy({ id });
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async removeUser(id: number): Promise<number> {
    await this.userRepository.delete({ id });
    return id;
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(
      { id: updateUserDto.id },
      { ...updateUserDto },
    );
    return this.getOneUser(updateUserDto.id);
  }
}
