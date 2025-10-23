import express from 'express';
import { pingRouter } from './routes/ping.js';
import stocksRouter from './routes/stocksRoutes.js';
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express.json());
// Routes
app.use('/api', pingRouter);
app.use('/stocks', stocksRouter);
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📍 Try: http://localhost:${PORT}/api/ping`);
});
//# sourceMappingURL=index.js.map