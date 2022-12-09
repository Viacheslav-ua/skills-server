import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from './entities/users.entity';
import { UserService } from './services/user/user.service';

@Module({
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([UserEntity])],
})
export class UsersModule {}
