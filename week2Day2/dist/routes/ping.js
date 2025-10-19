import { Router } from 'express';
export const pingRouter = Router();
// GET /api/ping - Returns "pong"
pingRouter.get('/ping', (req, res) => {
    res.status(200).json({
        message: 'pong',
    });
});
//# sourceMappingURL=ping.js.map