import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';

export class CreateContactDto {
  @ApiProperty()
  @IsString({ message: 'Should be a string' })
  @MaxLength(64, { message: 'Allowed to 64 characters' })
  readonly name: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Should be a string' })
  @MaxLength(64, { message: 'Allowed to 64 characters' })
  readonly nicName?: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Should be a string' })
  @MaxLength(64, { message: 'Allowed to 64 characters' })
  readonly lastName?: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Should be a string' })
  @MaxLength(200, { message: 'Allowed to 200 characters' })
  readonly description?: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Should be a string' })
  @MaxLength(64, { message: 'Allowed to 64 characters' })
  readonly phone?: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Should be a string' })
  @IsEmail()
  @MaxLength(64, { message: 'Allowed to 64 characters' })
  readonly email?: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Should be a string' })
  @MaxLength(128, { message: 'Allowed to 128 characters' })
  readonly avatar?: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  readonly markForRemove: boolean;

  @ApiProperty()
  @IsNumber({}, { message: 'Should be a number' })
  @Max(99999999999)
  readonly userId: number;
}
