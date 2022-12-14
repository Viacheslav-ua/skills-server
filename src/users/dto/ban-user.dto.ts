import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, MaxLength } from 'class-validator';

export class BanUserDto {
  @ApiProperty()
  @IsNumber({}, { message: 'Should be a number' })
  readonly userId: number;

  @ApiProperty()
  @IsBoolean({ message: 'Should be a boolean' })
  readonly ban: boolean;

  @ApiProperty()
  @MaxLength(200, { message: 'Allowed to 200 characters' })
  readonly banReason: string;
}
