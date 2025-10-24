import { Request, Response, Router } from 'express';
const stocksRouter = Router();
import { db } from '../models/index.js';
// This API is for making stocks
const { Stock } = db;
stocksRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { name, quantity, price } = req.body;
    if (!name || quantity === undefined || price === undefined) {
      return res.status(400).json({ error: 'Missing required fields: name, quantity, price' });
    }
    const stockDetails = await Stock.create({ name, quantity, price });
    res.status(201).json(stockDetails);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});
stocksRouter.get('/', async (req: Request, res: Response) => {
  try {
    const stocks = await Stock.findAll();
    if (stocks)
      res.status(200).json(stocks);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});
stocksRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const stock = await Stock.findByPk(id);
    if (stock) {
      res.status(200).json(stock);
    } else {
      res.status(404).json({ error: 'Stock not found' });
    }
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});
stocksRouter.put('/:id', async (req: Request, res: Response) => {
  try {
    const stockId = req.params.id;
    const { name, quantity, price } = req.body;
    const [updated] = await Stock.update({ name, quantity, price }, {
      where: { id: stockId }
    });

    if (updated) {
      const updatedStock = await Stock.findByPk(stockId);
      res.status(200).json(updatedStock);
    } else {
      res.status(404).json({ error: 'Stock not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});
stocksRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted: number = await Stock.destroy({
      where: {
        id: id,
      }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Stock is not found" });
    }
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});
// Note : I'll update those routes by moving the logic into seperate controllers
export default stocksRouter;
