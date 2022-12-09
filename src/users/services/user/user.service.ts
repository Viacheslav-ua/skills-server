import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from 'src/users/dto/crete-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { UserEntity } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    return await this.userRepository.save({ ...createUserDto });
  }

  async getOneUser(id: number): Promise<UserEntity> {
    return await this.userRepository.findOneBy({ id });
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async removeUser(id: number): Promise<number> {
    await this.userRepository.delete({ id });
    return id;
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    await this.userRepository.update(
      { id: updateUserDto.id },
      { ...updateUserDto },
    );
    return this.getOneUser(updateUserDto.id);
  }
}
