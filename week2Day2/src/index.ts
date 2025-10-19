import express, { Application } from 'express';
import { pingRouter } from './routes/ping.js';

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', pingRouter);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📍 Try: http://localhost:${PORT}/api/ping`);
});
