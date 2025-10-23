import { Sequelize, DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import 'dotenv/config';

class Stock extends Model<InferAttributes<Stock>, InferCreationAttributes<Stock>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare quantity: number;
  declare price: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}
export const initStockModel = (sequelize: Sequelize) => {
  Stock.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Define precision in the DB
      allowNull: false
    },
    // createdAt and updatedAt are added automatically
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,       // Pass the connection instance
    modelName: 'Stock', // Choose the model name
    // tableName: 'Stocks' // Explicitly set the table name
  });
  return Stock;
}
