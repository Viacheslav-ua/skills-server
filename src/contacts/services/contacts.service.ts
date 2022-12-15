import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/users.entity';
import { UserService } from 'src/users/services/user.service';

import { Repository } from 'typeorm';
import { CreateContactDto } from '../dto/create-contact.dto';
import { Contact } from '../entities/contacts.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
    private readonly userService: UserService,
  ) {}

  async createContact(
    createContactDto: CreateContactDto,
    userId: number,
  ): Promise<Contact> {
    const contact = await this.contactRepository.save(createContactDto);
    const user = await this.userService.getOneUser(userId);
    contact.user = user;
    return await this.contactRepository.save(contact);
  }

  // async getAllContactsByUser(userId: number): Promise<Contact[]> {
  //   const user = await this.userService.getOneUser(userId);

  //   // console.log('user', {user});

  //   const contacts = await this.contactRepository.find({
  //     where: { user: { ...user } },
  //   });
  //   console.log(contacts);

  //   return contacts;
  // }

  // async getOneUser(id: number): Promise<User> {
  //   return await this.userRepository.findOne({
  //     where: { id },
  //     relations: ['roles'],
  //   });
  // }

  // async getUserByLogin(login: string): Promise<User> {
  //   return await this.userRepository.findOne({
  //     where: { login },
  //     relations: ['roles'],
  //   });
  // }

  // async getAllUsers(): Promise<User[]> {
  //   return await this.userRepository.find({ relations: ['roles'] });
  // }

  // async removeUser(id: number): Promise<number> {
  //   await this.userRepository.delete({ id });
  //   return id;
  // }

  // async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
  //   await this.userRepository.update(
  //     { id: updateUserDto.id },
  //     { ...updateUserDto },
  //   );
  //   return this.getOneUser(updateUserDto.id);
  // }

  // async addRole(addRoleDto: AddRoleDto) {
  //   const user = await this.getOneUser(addRoleDto.userId);
  //   const role = await this.roleService.getRoleByValue(addRoleDto.value);
  //   if (role && user) {
  //     user.roles.push(role);
  //     await this.userRepository.save(user);
  //     return await this.getOneUser(addRoleDto.userId);
  //   }

  //   return new HttpException('User or Role not found', HttpStatus.NOT_FOUND);
  // }

  // async ban(banUserDto: BanUserDto) {
  //   const user = await this.getOneUser(banUserDto.userId);
  //   if (user) {
  //     user.banned = banUserDto.ban;
  //     user.banReason = banUserDto.banReason;
  //     await this.userRepository.save(user);
  //     return await this.userRepository.save(user);
  //   }
  //   return new HttpException('User not found', HttpStatus.NOT_FOUND);
  // }
}
