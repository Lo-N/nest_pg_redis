import { v4 as uuidv4 } from 'uuid';
import { UUID } from 'crypto';
import { Column, CreatedAt, Default, DeletedAt, Model, NotEmpty, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';

@Table
export class Purchase extends Model {
  @PrimaryKey
  @Default(uuidv4())
  @Column
  id: UUID;

  @Column
  @NotEmpty
  amount: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt?: Date;
}
