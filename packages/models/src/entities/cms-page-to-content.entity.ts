import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { TenantBaseEntity } from './tenant-base.entity';
import { CmsPage } from './cms-page.entity';
import { CmsContent } from './cms-content.entity';

@Entity('cms_page_to_content')
export class CmsPageToContent extends TenantBaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  pageId: string;

  @ManyToOne(() => CmsPage)
  @JoinColumn({ name: 'page_id' })
  page: CmsPage;

  @Column({ type: 'uuid' })
  @Index()
  contentId: string;

  @ManyToOne(() => CmsContent)
  @JoinColumn({ name: 'content_id' })
  content: CmsContent;

  @Column({ default: 0, type: 'int' })
  order: number;
}
