import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  readonly login: string;
  @ApiProperty()
  readonly passwordHash: string;
  @ApiProperty()
  readonly email?: string;
}
