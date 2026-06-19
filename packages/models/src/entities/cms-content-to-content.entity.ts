import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { TenantBaseEntity } from './tenant-base.entity';
import { CmsContent } from './cms-content.entity';

@Entity('cms_content_to_content')
export class CmsContentToContent extends TenantBaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  parentId: string;

  @ManyToOne(() => CmsContent)
  @JoinColumn({ name: 'parent_id' })
  parent: CmsContent;

  @Column({ type: 'uuid' })
  @Index()
  childId: string;

  @ManyToOne(() => CmsContent)
  @JoinColumn({ name: 'child_id' })
  child: CmsContent;

  @Column({ default: 0, type: 'int' })
  order: number;
}
