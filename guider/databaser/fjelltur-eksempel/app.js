// Server-bit, setter opp en Express-app
const express = require('express');
const app = express();

const PORT = 3000;

// Databasen
const Database = require('better-sqlite3');
const db = new Database('fjelltur.db');

// Middleware for å servere statiske filer fra "public" mappen
app.use(express.static('public'));

// CORS-middleware for å tillate forespørsler fra andre domener
const cors = require('cors');
app.use(cors());

// Eksempel på en rute som henter alle fjell, beskrivelse, høydene og bilde deres
app.get('/api/fjell_info', (req, res) => {
    const rows = db.prepare('SELECT fjellnavn, hoyde, beskrivelse, foto FROM fjell').all();
    res.json(rows);
});

// Eksempel på en rute som henter alle fjellnavnene som finnes i databasen
app.get('/api/fjell_alle', (req, res) => {
    const rows = db.prepare('SELECT fjellnavn FROM fjell').all();
    res.json(rows);
});

// Eksempel på en rute som henter alle brukernavnene til alle personene i databasen
app.get('/api/personer_alle', (req, res) => {
    const rows = db.prepare('SELECT brukernavn FROM person').all();
    res.json(rows);
});

// Rute som henter fjellturene til en gitt person, der vi bruker en URL-parameter
app.get('/api/fjellturer/:brukernavn', (req, res) => {
    const brukernavn = req.params.brukernavn;
    if (!brukernavn) return res.status(400).json({ error: 'Mangler brukernavn' });

    const rows = db.prepare(`
        SELECT fjell.fjellnavn, fjelltur.tidspunkt
        FROM person
        JOIN fjelltur ON person.brukernavn = fjelltur.brukernavn
        JOIN fjell ON fjelltur.fjell_id = fjell.fjell_id
        WHERE person.brukernavn = ?
    `).all(brukernavn);

    res.json(rows);
});

// Rute som lar oss registrere en ny fjelltur for en person
app.post('/api/registrer_tur', express.json(), (req, res) => {
    // Henter ut data fra request body
    const { brukernavn, fjellnavn, tidspunkt, varighet, beskrivelse } = req.body;

    // Sjekk om personen eksisterer
    const person = db.prepare('SELECT * FROM person WHERE brukernavn = ?').get(brukernavn);
    if (!person) return res.status(404).json({ error: 'Person ikke funnet' });

    // Sjekk om fjellet eksisterer
    const fjell = db.prepare('SELECT * FROM fjell WHERE fjellnavn = ?').get(fjellnavn);
    if (!fjell) return res.status(404).json({ error: 'Fjell ikke funnet' });

    // Registrer den nye fjellturen
    db.prepare('INSERT INTO fjelltur (brukernavn, fjell_id, tidspunkt, varighet, beskrivelse) VALUES (?, ?, ?, ?, ?)').run(brukernavn, fjell.fjell_id, tidspunkt, varighet, beskrivelse);

    res.status(201).json({ message: 'Fjellturen er registrert!' });
});

// Åpner en viss port på serveren, og starter serveren
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});