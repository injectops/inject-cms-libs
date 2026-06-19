import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TenantBaseEntity } from './tenant-base.entity';
import { File } from './file.entity';

@Entity('cms_menu')
export class CmsMenu extends TenantBaseEntity {
  @Column({ nullable: true, type: 'varchar' })
  title: string | null;

  @Column({ nullable: true, type: 'varchar' })
  slug: string | null;

  @Column({ nullable: true, type: 'varchar' })
  url: string | null;

  @Column({ nullable: true, type: 'varchar' })
  imageUrl: string | null;

  @Column({ nullable: true, type: 'varchar' })
  target: string | null;

  @Column({ default: 0, type: 'int' })
  order: number;

  @Column({ nullable: true, type: 'varchar' })
  zone: string | null;

  @Column({ nullable: true, type: 'timestamp with time zone' })
  publishedAt: Date | null;

  @Column({ nullable: true, type: 'uuid' })
  fileId: string | null;

  @ManyToOne(() => File, { nullable: true, eager: false })
  @JoinColumn({ name: 'file_id' })
  file: File | null;
}
