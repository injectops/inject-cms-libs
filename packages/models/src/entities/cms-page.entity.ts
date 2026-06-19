import { Entity, Column } from 'typeorm';
import { TenantBaseEntity } from './tenant-base.entity';

@Entity('cms_page')
export class CmsPage extends TenantBaseEntity {
  @Column({ type: 'varchar' })
  slug: string;

  @Column({ nullable: true, type: 'varchar' })
  url: string | null;

  @Column({ default: false, type: 'boolean' })
  isDefault: boolean;

  @Column({ nullable: true, type: 'timestamp with time zone' })
  publishedAt: Date | null;
}
