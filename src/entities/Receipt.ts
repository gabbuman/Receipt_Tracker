import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';
import { Category } from './Category';

// src/entities/Receipt.ts
@Entity('receipts')
export class Receipt {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  merchant!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  total!: number;

  @Column({ type: 'date' })
  date!: Date;

  @Column({ nullable: true })
  image_url!: string;

  @ManyToOne(() => User, user => user.receipts)
  user!: User;

  @ManyToOne(() => Category, category => category.receipts)
  category!: Category;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}