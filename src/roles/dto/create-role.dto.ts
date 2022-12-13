import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, Max } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty()
  @IsString({ message: 'Should be a string' })
  @Length(1, 64, { message: 'Allowed from 1 to 64 characters' })
  readonly value: string;

  @ApiProperty()
  @IsString({ message: 'Should be a string' })
  @Max(200, { message: 'Allowed to 200 characters' })
  readonly description: string;
}
