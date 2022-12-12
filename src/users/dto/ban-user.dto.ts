import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty()
  readonly userId: number;

  @ApiProperty()
  readonly banReason: string;
}
