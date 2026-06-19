import { IsIn, IsNotEmpty } from 'class-validator';
import { PlatformRole } from './invite-user.dto';

export class UpdateUserRoleDto {
  @IsIn(['viewer', 'editor', 'admin'])
  @IsNotEmpty()
  role!: PlatformRole;
}
