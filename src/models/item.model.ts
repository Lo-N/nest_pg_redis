import { v4 as uuidv4 } from 'uuid';
import { UUID } from 'crypto';
import { Column, CreatedAt, Default, DeletedAt, Model, NotEmpty, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';

@Table
export class Item extends Model {
  @PrimaryKey
  @Default(uuidv4())
  @Column
  id: UUID;

  @NotEmpty
  @Column
  title: string;

  @NotEmpty
  @Column
  price: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt?: Date;
}
