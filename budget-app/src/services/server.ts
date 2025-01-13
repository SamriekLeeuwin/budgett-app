import express, { Request, Response } from 'express';
import pool from '../utils/Database';

const app = express();
app.use(express.json()); // Voor JSON-body parsing

const PORT = 3000;

// Testroute om verbinding te controleren
app.get('/', async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    res.json({ message: 'Database werkt!', result: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Databaseverbinding mislukt' });
  }
});

// Start de server
app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});
