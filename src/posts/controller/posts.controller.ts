import { Body, Controller, Post, UploadedFile } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostsService } from '../services/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  createPost(@Body() createPostDto: CreatePostDto, @UploadedFile() image) {}
}
