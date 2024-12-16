import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { User } from './User';
import { Receipt } from './Receipt';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @ManyToOne(() => User, user => user.categories)
  user!: User;

  @OneToMany(() => Receipt, receipt => receipt.category)
  receipts!: Receipt[];

  @CreateDateColumn()
  created_at!: Date;
}