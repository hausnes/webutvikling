// Server-bit, setter opp en Express-app
const express = require('express');
const app = express();

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

// Åpner en viss port på serveren, og starter serveren
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});