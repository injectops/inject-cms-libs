import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { TenantBaseEntity } from './tenant-base.entity';
import { CmsMenu } from './cms-menu.entity';

@Entity('cms_menu_to_menu')
export class CmsMenuToMenu extends TenantBaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  parentId: string;

  @ManyToOne(() => CmsMenu)
  @JoinColumn({ name: 'parent_id' })
  parent: CmsMenu;

  @Column({ type: 'uuid' })
  @Index()
  childId: string;

  @ManyToOne(() => CmsMenu)
  @JoinColumn({ name: 'child_id' })
  child: CmsMenu;

  @Column({ default: 0, type: 'int' })
  order: number;
}
