import { SetMetadata } from '@nestjs/common';
import { KeysEnum } from 'src/helpers/keys.enum';

export const Roles = (...roles: string[]) =>
  SetMetadata(KeysEnum.ROLES_KEY, roles);
