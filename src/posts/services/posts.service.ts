import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dto/create-post.dto';
import { Post } from '../entities/posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto, image: any) {
    const fileName = 'jhg';
    const post = await this.postRepository.save({
      ...createPostDto,
      image: fileName,
    });
    return post;
  }
}
