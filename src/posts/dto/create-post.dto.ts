import { ApiProperty } from '@nestjs/swagger';
import { IsString, Max, Min } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsString({ message: 'Should be a string' })
  // @Min(200, { message: 'Allowed to 200 characters' })
  readonly title: string;

  @IsString({ message: 'Should be a string' })
  // @Max(200, { message: 'Allowed to 200 characters' })
  readonly content: string;

  @ApiProperty()
  readonly userId: number;
}
