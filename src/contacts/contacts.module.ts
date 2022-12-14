import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { FilesModule } from 'src/files/files.module';
import { ContactsController } from './controller/contacts.controller';
import { Contact } from './entities/contacts.entity';
import { ContactsService } from './services/contacts.service';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService],
  imports: [TypeOrmModule.forFeature([Contact]), AuthModule],
})
export class ContactsModule {}
