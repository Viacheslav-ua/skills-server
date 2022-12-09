export class UpdateUserDto {
  id: number;
  login: string;
  passwordHash: string;
  email?: string;
}
