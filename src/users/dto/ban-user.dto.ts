import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty()
  readonly userId: number;

  @ApiProperty()
  readonly ban: boolean;

  @ApiProperty()
  readonly banReason: string;
}
