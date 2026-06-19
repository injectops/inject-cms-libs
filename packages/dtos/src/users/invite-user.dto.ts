import { IsString, IsNotEmpty, IsIn } from 'class-validator';

// Inline type for browser safety — @inject-cms/models is server-only (TypeORM decorators)
export type PlatformRole = 'viewer' | 'editor' | 'admin';

export class InviteUserDto {
  @IsString()
  @IsNotEmpty()
  keycloakSub!: string;

  @IsIn(['viewer', 'editor', 'admin'])
  role!: PlatformRole;
}
