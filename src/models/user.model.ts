import { Column, Model, NotEmpty, Table, Unique, CreatedAt, UpdatedAt, DeletedAt, PrimaryKey, Default, DataType } from 'sequelize-typescript';
import { UUID } from 'crypto';

@Table
export class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: UUID;

  @Unique
  @NotEmpty
  @Column
  login: string;

  @NotEmpty
  @Column
  firstName: string;

  @NotEmpty
  @Column
  lastName: string;

  @Unique
  @NotEmpty
  @Column
  email: string;

  @NotEmpty
  @Column
  password: string;

  @NotEmpty
  @Column
  age: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt?: Date;
}