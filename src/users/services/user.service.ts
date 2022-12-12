import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesService } from 'src/roles/services/roles.service';

import { CreateUserDto } from 'src/users/dto/crete-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { AddRoleDto } from '../dto/add-role.dto';
import { BanUserDto } from '../dto/ban-user.dto';

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
      relations: ['roles'],
    });
  }

  async getUserByLogin(login: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { login },
      relations: ['roles'],
    });
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find({ relations: ['roles'] });
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

  async addRole(addRoleDto: AddRoleDto) {
    const user = await this.getOneUser(addRoleDto.userId);
    const role = await this.roleService.getRoleByValue(addRoleDto.value);
    if (role && user) {
      user.roles.push(role);
      await this.userRepository.save(user);
      return await this.getOneUser(addRoleDto.userId);
    }

    return new HttpException('User or Role not found', HttpStatus.NOT_FOUND);
  }

  async ban(banUserDto: BanUserDto) {
    const user = await this.getOneUser(banUserDto.userId);
    if (user) {
      user.banned = banUserDto.ban;
      user.banReason = banUserDto.banReason;
      await this.userRepository.save(user);
      return await this.userRepository.save(user);
    }
  }
}
