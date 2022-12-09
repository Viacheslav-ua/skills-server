import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/users.entity';
import { UserService } from './services/user.service';
import { UserController } from './controller/user.controller';

@Module({
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
})
export class UsersModule {}
