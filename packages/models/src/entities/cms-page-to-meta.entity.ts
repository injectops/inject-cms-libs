import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { TenantBaseEntity } from './tenant-base.entity';
import { CmsPage } from './cms-page.entity';
import { CmsPageMeta } from './cms-page-meta.entity';

@Entity('cms_page_to_meta')
export class CmsPageToMeta extends TenantBaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  pageId: string;

  @ManyToOne(() => CmsPage)
  @JoinColumn({ name: 'page_id' })
  page: CmsPage;

  @Column({ type: 'uuid' })
  @Index()
  metaId: string;

  @ManyToOne(() => CmsPageMeta)
  @JoinColumn({ name: 'meta_id' })
  meta: CmsPageMeta;
}
