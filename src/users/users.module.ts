import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/users.entity';
import { UserService } from './services/user.service';
import { UserController } from './controller/users.controller';
import { Role } from 'src/roles/entities/roles.entity';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([User, Role]), RolesModule],
  controllers: [UserController],
  exports: [UserService],
})
export class UsersModule {}
