import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ModelInterface } from './model.interface';
import { Exclude } from 'class-transformer';

export abstract class ModelAbstract implements ModelInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  @Exclude()
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  @Exclude()
  updatedAt: Date;

  public gettId(): number {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public setCreatedAt(date: Date): void {
    this.createdAt = date;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setUpdatedAt(date: Date): void {
    this.updatedAt = date;
  }
}
