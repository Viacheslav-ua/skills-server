import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/users.entity';
import { UserService } from './services/user.service';
import { UserController } from './controller/users.controller';
import { Role } from 'src/roles/entities/roles.entity';

@Module({
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([User, Role])],
  controllers: [UserController],
})
export class UsersModule {}
