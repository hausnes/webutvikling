const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'chatdb',
  connectionLimit: 5
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/chat', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM chat');
    res.json(rows);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Failed to fetch data from chatdb.chat' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});