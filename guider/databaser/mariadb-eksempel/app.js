const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;

// Opprett en tilkoblingspool til MariaDB-databasen
const pool = mysql.createPool({
	host: '127.0.0.1',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'chatdb',
	connectionLimit: 5
});

// 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Rute som henter alle meldinger fra chat-tabellen
app.get('/chat', async (req, res) => {
	try {
		const [rows] = await pool.query('SELECT * FROM chat');
		res.json(rows);
	} catch (err) {
		console.error('Database error:', err);
		res.status(500).json({ error: 'Failed to fetch data from chatdb.chat' });
	}
});

// Rute som henter en spesifikk melding basert på ID - eksempel: /chat/1
app.get('/chat/:id', async (req, res) => {
	const id = Number(req.params.id); // hent ID fra URL og konverter til tall

	if (!Number.isInteger(id) || id <= 0) {
		return res.status(400).json({ error: 'ID must be a positive integer' });
	}

  	try {
		const [rows] = await pool.query('SELECT * FROM chat WHERE id = ?', [id]);

		if (rows.length === 0) {
			return res.status(404).json({ error: `Message with id ${id} not found` });
		}

    res.json(rows[0]);

	} 
	catch (err) {
		console.error('Database error:', err);
		res.status(500).json({ error: 'Failed to fetch message from chatdb.chat' });
	}
});

// Start serveren
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});