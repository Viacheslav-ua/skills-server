import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/services/jwt-auth.guard';
import { EndpointEnum } from 'src/helpers/endpoint.enum';
import { UserService } from 'src/users/services/user.service';
import { DeleteResult } from 'typeorm';
import { CreateContactDto } from '../dto/create-contact.dto';
import { Contact } from '../entities/contacts.entity';
import { ContactsService } from '../services/contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(
    private contactsService: ContactsService,
    private userService: UserService,
  ) {}

  @ApiOperation({ summary: 'Create contact' })
  @ApiResponse({ status: 201, type: Contact })
  @UseGuards(JwtAuthGuard)
  @Post()
  createContact(@Body() createContactDto: CreateContactDto, @Request() req) {
    return this.contactsService.createContact(createContactDto, req.user.id);
  }

  @ApiOperation({ summary: 'Get contacts by user' })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Get()
  getContacts(@Request() req) {
    return this.userService.getContactsByUser(req.user.id);
  }

  @ApiOperation({ summary: 'Remove mark contact by id' })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Delete(EndpointEnum.ID)
  removeContact(@Param('id') id: number) {
    return this.contactsService.removeMarkContact(id);
  }

  @ApiOperation({ summary: 'Remove all mark contacts' })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Delete()
  removeAllContacts(@Request() req) {
    return this.contactsService.removeAllMarkContacts(req.user.id);
  }

  @ApiOperation({ summary: 'Toggle mark for remove contacts' })
  @ApiResponse({ status: 200, type: Contact })
  @UseGuards(JwtAuthGuard)
  @Patch(EndpointEnum.MARK_ID)
  ToggleMark(@Param('id') id: number) {
    return this.contactsService.toggleMarkForRemove(id);
  }
}
