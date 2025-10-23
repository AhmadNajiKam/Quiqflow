import { Router } from 'express';
const stocksRouter = Router();
import { db } from '../models/index.js';
// This API is for making stocks
stocksRouter.post('/', async (req, res) => {
    try {
        const { name, quantity, price } = req.body;
        if (!name || quantity === undefined || price === undefined) {
            return res.status(400).json({ error: 'Missing required fields: name, quantity, price' });
        }
        const stockDetails = await db.Stock.create({ name, quantity, price });
        res.status(201).json(stockDetails);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
stocksRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.Stock.destroy({
            where: {
                id: id,
            }
        });
        res.status(204).json({ message: "the field is deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
export default stocksRouter;
//# sourceMappingURL=stocksRoutes.js.map