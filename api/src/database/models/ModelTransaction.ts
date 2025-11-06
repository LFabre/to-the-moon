import { DataTypes, Model, Optional } from 'sequelize';
import { Transaction } from '@interfaces/Transaction';
import { sequelize } from '../connection';

type TransactionOptionalAttributes = Optional<Transaction, 'id' | 'createdAt' | 'updatedAt'>;

export class ModelTransaction
  extends Model<Transaction, TransactionOptionalAttributes>
  implements Transaction
{
  declare id: number;

  declare userId: number;

  declare amount: number;

  declare type: string;

  declare createdAt: string;

  declare updatedAt: string;
}

ModelTransaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'transactions',
    modelName: 'transactions',
    timestamps: true,
    indexes: [
      {
        fields: ['userId'],
      },
    ],
  },
);
