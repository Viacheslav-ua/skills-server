import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsString({ message: 'Should be a string' })
  @MaxLength(200, { message: 'Allowed to 200 characters' })
  readonly title: string;

  @IsString({ message: 'Should be a string' })
  @MaxLength(200, { message: 'Allowed to 200 characters' })
  readonly content: string;

  @ApiProperty()
  readonly userId: number;
}
