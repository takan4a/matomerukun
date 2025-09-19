import { db } from '@vercel/postgres';
import express from 'express';
import type { Request, Response } from 'express';

// Expressアプリを初期化
const app = express();
// JSONリクエストボディを自動でパースするミドルウェアを追加
app.use(express.json());

// POSTリクエストを処理するエンドポイント
app.post('/api/posts', async (req: Request, res: Response) => {
  const client = await db.connect();
  try {
    await client.sql`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        url TEXT NOT NULL,
        title TEXT,
        author TEXT,
        date TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    const { url } = req.body;
    if (!url) {
      return res.status(400).send('URL is required.');
    }

    await client.sql`
      INSERT INTO posts (url, title, author)
      VALUES (${url}, 'Placeholder Title', 'Placeholder Author');
    `;
    return res.status(200).json({ message: 'URL saved to database!', url });
  } catch (error) {
    console.error('Database operation failed:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    client.release();
  }
});

// GETリクエストを処理するエンドポイント
app.get('/api/posts', async (req: Request, res: Response) => {
  const client = await db.connect();
  try {
    const { rows } = await client.sql`SELECT * FROM posts ORDER BY date DESC;`;
    return res.status(200).json(rows);
  } catch (error) {
    console.error('Database operation failed:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    client.release();
  }
});

// Vercelがエクスポートするハンドラ関数
export default function handler(req: Request, res: Response) {
  return app(req, res);
}