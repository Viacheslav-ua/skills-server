import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { ContactsController } from './controller/contacts.controller';
import { Contact } from './entities/contacts.entity';
import { ContactsService } from './services/contacts.service';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService],
  imports: [TypeOrmModule.forFeature([Contact]), AuthModule, UsersModule],
})
export class ContactsModule {}
