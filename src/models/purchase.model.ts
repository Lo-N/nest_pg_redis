import { UUID } from 'crypto';
import {
  BelongsTo,
  Column,
  CreatedAt,
  Default,
  DeletedAt,
  ForeignKey,
  DataType,
  Model,
  NotEmpty,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from './user.model';

@Table
export class Purchase extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: UUID;

  @NotEmpty
  @Column
  amount: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt?: Date;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  userId: UUID;

  @BelongsTo(() => User)
  user: User;

  @NotEmpty
  @Column(DataType.ARRAY(DataType.UUID))
  itemsIds: UUID[];
}
