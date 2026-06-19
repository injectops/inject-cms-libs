import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { InjectBaseEntity } from './base.entity';
import { User } from './user.entity';
import { Platform } from './platform.entity';

export type PlatformRole = 'viewer' | 'editor' | 'admin';

@Entity('user_platform')
export class UserPlatform extends InjectBaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: 'uuid' })
  @Index()
  platformId: string;

  @ManyToOne(() => Platform)
  @JoinColumn({ name: 'platform_id' })
  platform: Platform;

  @Column({ type: 'varchar', default: 'viewer' })
  role: PlatformRole;
}
