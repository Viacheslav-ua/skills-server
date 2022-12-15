import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionEnum } from 'src/helpers/exception.enum';
import { UserService } from 'src/users/services/user.service';

import { DeleteResult, Repository } from 'typeorm';
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

  async getOneContact(id: number) {
    return await this.contactRepository.findOne({ where: { id } });
  }

  async removeMarkContact(id: number): Promise<DeleteResult> {
    const contact = await this.getOneContact(id);
    if (!contact) {
      throw new HttpException(ExceptionEnum.CONTACT_N_F, HttpStatus.NOT_FOUND);
    }
    if (contact.markForRemove === true) {
      return await this.contactRepository.delete({ id });
    }
    throw new HttpException(
      ExceptionEnum.CONTACT_N_MARKED,
      HttpStatus.NOT_IMPLEMENTED,
    );
  }
}
