// Server-bit, setter opp en Express-app
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Databasen
const Database = require('better-sqlite3');
const db = new Database('fjellbilder.db');

// Oppretter tabeller dersom dei ikkje finst
db.exec(`
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS fjell (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        navn TEXT,
        beskrivelse TEXT,
        hoyde INTEGER
    );

    CREATE TABLE IF NOT EXISTS bilde (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sti TEXT,
        navn TEXT,
        alternativtekst TEXT,
        fjellid INTEGER REFERENCES fjell(id)
    );
`);

// Legg til eksempeldata berre dersom tabellane er tomme
const fjellCount = db.prepare('SELECT COUNT(*) as count FROM fjell').get();
if (fjellCount.count === 0) {
    db.exec(`
        INSERT INTO fjell (id, navn, beskrivelse, hoyde) VALUES (1, 'Nesheimshorgi', 'Flottaste utsikta over Granvinsvatnet.', 1134);
        INSERT INTO fjell (id, navn, beskrivelse, hoyde) VALUES (2, 'Oksen', 'Dronninga i Hardanger.', 1224);
        INSERT INTO bilde (id, sti, navn, alternativtekst, fjellid) VALUES (1, 'nesheimshorgi.jpg', 'Nesheimshorgi utsikt', 'Utsikt frå Horganipen i retning Granvinsvatnet.', 1);
        INSERT INTO bilde (id, sti, navn, alternativtekst, fjellid) VALUES (2, 'oksen2.jpg', 'Oksen frå drone', 'Eit bilete av Oksen frå Drone, der ein ser både ... og ... medan .. gjer sånn og sånn.', 2);
        INSERT INTO bilde (id, sti, navn, alternativtekst, fjellid) VALUES (3, 'oksen.jpg', 'Oksen i solnedgang', 'Sola skin inn Hardangerfjorden, og ... sitt fantastiske ljos over...', 2);
    `);
}

// Middleware for å servere statiske filer fra "public" mappen
app.use(express.static('public'));

// Middleware for å parse JSON i request body
app.use(express.json());

// Multer, for å handtere filopplasting
const multer = require('multer');
const uploadsDir = path.join(__dirname, 'public', 'uploads');

// Sørger for at upload-mappa finst før opplasting.
fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, uploadsDir); // cb er callback-funksjonen som tar (error, path) som argumenter - her, ingen feil, og path er uploadsDir.
    },
    filename: (_req, file, cb) => {
        const extension = path.extname(file.originalname);
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${extension}`;
        cb(null, uniqueName); // cb er callback-funksjonen som tar (error, filename) som argumenter - her, ingen feil, og filename er det unike navnet vi genererer.
    }
});

const upload = multer({ storage });

// Rute for å laste opp eit nytt bilde til eit fjell
app.post('/fjell/:id/bilder', upload.single('bilde'), (req, res) => {
    const fjellId = req.params.id;

    if (!req.file) {
        return res.status(400).json({ message: 'Du må velje ei bildefil.' });
    }

    const fjell = db.prepare('SELECT id FROM fjell WHERE id = ?').get(fjellId);
    if (!fjell) {
        return res.status(404).json({ message: 'Fjell vart ikkje funne.' });
    }

    const { originalname, filename } = req.file; // originalname er det opprinnelige filnavnet på den opplastede filen, mens filename er det unike navnet som multer har generert og lagret filen som på serveren.
    const alternativtekst = req.body.alternativtekst || '';
    const navn = originalname;
    const sti = `uploads/${filename}`;

    // Lagre bildeinformasjon i databasen
    db.prepare('INSERT INTO bilde (sti, navn, alternativtekst, fjellid) VALUES (?, ?, ?, ?)').run(sti, navn, alternativtekst, fjellId);
    res.json({ message: 'Bilde lasta opp vellykket!' });
});


// Rute som hentar alle bileta til eit gitt fjell
app.get('/fjell/:id/bilder', (req, res) => {
    const fjellId = req.params.id;
    const bilder = db.prepare('SELECT * FROM bilde WHERE fjellid = ?').all(fjellId);
    res.json(bilder);
});

// Rute som hentar alle fjella
app.get('/fjell', (req, res) => {
    const fjell = db.prepare('SELECT * FROM fjell').all();
    res.json(fjell);
});

// Åpner en viss port på serveren, og starter serveren
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});