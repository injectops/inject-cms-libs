import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { InjectBaseEntity } from './base.entity';
import { Subscription } from './subscription.entity';

@Entity('user')
export class User extends InjectBaseEntity {
  @Column({ unique: true, type: 'varchar' })
  keycloakSub: string;

  @Column({ nullable: true, type: 'varchar' })
  email: string | null;

  @Column({ nullable: true, type: 'varchar' })
  name: string | null;

  @Column({ nullable: true, type: 'uuid' })
  subscriptionId: string | null;

  @OneToOne(() => Subscription)
  @JoinColumn({ name: 'subscription_id' })
  subscription: Subscription | null;
}
