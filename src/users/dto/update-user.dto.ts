export class UpdateUserDto {
  readonly id: number;
  readonly login: string;
  readonly passwordHash: string;
  readonly email?: string;
}
