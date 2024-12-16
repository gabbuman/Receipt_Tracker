import { DataSource } from 'typeorm';
import { config } from './index';
import { User } from '../entities/User';
import { Receipt } from '../entities/Receipt';
import { Category } from '../entities/Category';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  synchronize: config.nodeEnv === 'development', // Disable in production
  logging: config.nodeEnv === 'development',
  entities: [User, Receipt, Category],
  migrations: ['src/migrations/*.ts'],
});