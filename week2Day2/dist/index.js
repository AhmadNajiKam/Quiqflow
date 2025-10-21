import express from 'express';
import { pingRouter } from './routes/ping.js';
import { Sequelize } from 'sequelize';
const app = express();
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/devdb');
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express.json());
// Routes
app.use('/api', pingRouter);
// Start server
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📍 Try: http://localhost:${PORT}/api/ping`);
});
//# sourceMappingURL=index.js.map