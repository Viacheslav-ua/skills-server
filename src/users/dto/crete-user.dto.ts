export class CreateUserDto {
  readonly login: string;
  readonly passwordHash: string;
  readonly email?: string;
}
