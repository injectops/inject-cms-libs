import { Entity, Column } from 'typeorm';
import { TenantBaseEntity } from './tenant-base.entity';

@Entity('file')
export class File extends TenantBaseEntity {
  @Column({ type: 'varchar' })
  s3Key: string;

  @Column({ type: 'varchar' })
  mimetype: string;

  @Column({ type: 'int' })
  size: number;

  @Column({ type: 'varchar' })
  originalFilename: string;
}
