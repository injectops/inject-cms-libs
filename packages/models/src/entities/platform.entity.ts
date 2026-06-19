import { Entity, Column, Index } from 'typeorm';
import { InjectBaseEntity } from './base.entity';

@Entity('platform')
export class Platform extends InjectBaseEntity {
  @Column({ unique: true, type: 'varchar' })
  name: string;

  @Column({ unique: true, type: 'varchar' })
  @Index()
  slug: string;

  @Column({ type: 'jsonb', nullable: true })
  settings: Record<string, unknown> | null;

  @Column({ nullable: true, type: 'varchar' })
  subscriptionRef: string | null;
}
