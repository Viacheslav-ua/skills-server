import { Controller, Post } from '@nestjs/common';

@Controller('contacts')
export class ContactsController {
  constructor() {}
  @Post()
  createPost() {}
}
