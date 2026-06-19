import { Entity, Column } from 'typeorm';
import { InjectBaseEntity } from './base.entity';

@Entity('subscription')
export class Subscription extends InjectBaseEntity {
  @Column({ type: 'int' })
  maxPlatforms: number;

  @Column({ type: 'int' })
  maxCmsUsers: number;

  // TypeORM returns BIGINT as string — cast with Number() at use sites
  @Column({ type: 'bigint' })
  storageQuotaBytes: string;

  @Column({ type: 'int' })
  requestsPerMinute: number;
}
