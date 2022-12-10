import { Module } from '@nestjs/common';
import { RolesService } from './services/roles.service';
import { RolesController } from './controller/roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/roles.entity';
import { User } from 'src/users/entities/users.entity';

@Module({
  providers: [RolesService],
  imports: [TypeOrmModule.forFeature([Role, User])],
  controllers: [RolesController],
})
export class RolesModule {}
