import { db } from '@vercel/postgres';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function (req: VercelRequest, res: VercelResponse) {
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

    if (req.method === 'POST') {
      const { url } = req.body;
      if (!url) {
        return res.status(400).send('URL is required.');
      }
      await client.sql`
        INSERT INTO posts (url, title, author)
        VALUES (${url}, 'Placeholder Title', 'Placeholder Author');
      `;
      return res.status(200).json({ message: 'URL saved to database!', url });

    } else if (req.method === 'GET') {
      const { rows } = await client.sql`SELECT * FROM posts ORDER BY date DESC;`;
      return res.status(200).json(rows);
    }
    
    return res.status(405).send('Method Not Allowed');
  } catch (error) {
    console.error('Database operation failed:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    client.release();
  }
}