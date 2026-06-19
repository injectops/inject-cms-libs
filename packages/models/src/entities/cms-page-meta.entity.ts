import { Entity, Column } from 'typeorm';
import { TenantBaseEntity } from './tenant-base.entity';

@Entity('cms_page_meta')
export class CmsPageMeta extends TenantBaseEntity {
  @Column({ nullable: true, type: 'varchar' })
  type: string | null;

  @Column({ nullable: true, type: 'varchar' })
  name: string | null;

  @Column({ nullable: true, type: 'text' })
  value: string | null;
}
