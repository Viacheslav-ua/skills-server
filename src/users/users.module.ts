import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from './entities/users.entity';
import { UserService } from './services/user/user.service';
import { UserResolver } from './resolvers/user/user.resolver';

@Module({
  providers: [UserService, UserResolver],
  imports: [TypeOrmModule.forFeature([UserEntity])],
})
export class UsersModule {}
