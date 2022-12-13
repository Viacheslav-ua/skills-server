import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length } from 'class-validator';

export class AddRoleDto {
  @ApiProperty()
  @IsNumber({}, { message: 'Should be a number' })
  readonly userId: number;

  @ApiProperty()
  @IsString({ message: 'Should be a string' })
  @Length(1, 64, { message: 'Allowed from 1 to 64 characters' })
  readonly value: string;
}
