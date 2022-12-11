import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesService } from 'src/roles/services/roles.service';

import { CreateUserDto } from 'src/users/dto/crete-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly roleService: RolesService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.save(createUserDto);
    const role = await this.roleService.getRoleByValue('USER');
    user.roles = [role];
    await this.userRepository.save(user);
    return user;
  }

  async getOneUser(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: { id },
      loadRelationIds: true,
    });
  }

  async getUserByLogin(login: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { login },
      loadRelationIds: true,
    });
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find({ loadRelationIds: true });
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
