import { DataTypes, Model, Optional } from 'sequelize';
import { User } from '@interfaces/User';
import { sequelize } from '../connection';

export type UserOptionalAttributes = Optional<User, 'id' | 'createdAt' | 'updatedAt'>;

export class ModelUser extends Model<User, UserOptionalAttributes> implements User {
  declare id: number;

  declare email: string;

  declare createdAt: Date;

  declare updatedAt: Date;
}

ModelUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
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
    tableName: 'Users',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['email'],
      },
    ],
  },
);
