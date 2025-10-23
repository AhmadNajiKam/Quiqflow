import { Request, Response, Router } from 'express';
const stocksRouter = Router();
import { db } from '../models/index.js';
// This API is for making stocks
stocksRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { name, quantity, price } = req.body;
    if (!name || quantity === undefined || price === undefined) {
      return res.status(400).json({ error: 'Missing required fields: name, quantity, price' });
    }
    const stockDetails = await db.Stock.create({ name, quantity, price });
    res.status(201).json(stockDetails);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});
stocksRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.Stock.destroy({
      where: {
        id: id,
      }
    });
    res.status(204).json({ message: "the field is deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
})
export default stocksRouter;
