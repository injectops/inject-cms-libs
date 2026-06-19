import { Column, Index, ManyToOne, JoinColumn } from 'typeorm';
import { InjectBaseEntity } from './base.entity';
import { Platform } from './platform.entity';

export abstract class TenantBaseEntity extends InjectBaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  platformId: string;

  @ManyToOne(() => Platform)
  @JoinColumn({ name: 'platform_id' })
  platform: Platform;
}
