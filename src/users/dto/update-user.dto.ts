import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly login: string;

  @ApiProperty()
  readonly passwordHash: string;

  @ApiProperty()
  readonly email?: string;
}
