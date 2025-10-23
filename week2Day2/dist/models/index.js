// models/index.ts
import { Sequelize } from 'sequelize';
import { initStockModel } from './stock.js';
import 'dotenv/config';
const { DEV_DB_NAME, DB_USER, DB_PASS, DEV_DB_IP } = process.env;
const sequelize = new Sequelize(DEV_DB_NAME, DB_USER, DB_PASS, {
    host: DEV_DB_IP,
    dialect: 'postgres'
});
// authenticate with the database
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
const Stock = initStockModel(sequelize);
export const db = {
    sequelize,
    Sequelize,
    Stock,
};
//# sourceMappingURL=index.js.map