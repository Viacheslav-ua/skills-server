import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './controller/posts.controller';
import { Post } from './entities/posts.entity';
import { PostsService } from './services/posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [TypeOrmModule.forFeature([Post])],
})
export class PostsModule {}
