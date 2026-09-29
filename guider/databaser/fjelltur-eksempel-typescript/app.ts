// Server-bit, setter opp en Express-app
import express, { Request, Response } from 'express';
const app = express();

const PORT = 3000;

// Databasen
import Database from 'better-sqlite3';
const db = new Database('fjelltur.db');

// Middleware for å servere statiske filer fra "public" mappen
app.use(express.static('public'));

// CORS-middleware for å tillate forespørsler fra andre domener
import cors from 'cors';
app.use(cors());

// --- Typer som beskriver formen på dataene våre ---
// Disse typene finnes bare mens vi skriver og kompilerer koden. Når koden kjører (som vanlig
// JavaScript), er typene borte igjen - de finnes ikke i det hele tatt på det tidspunktet.

interface FjellInfo {
    fjellnavn: string;
    hoyde: number;
    beskrivelse: string;
    foto: string;
}

interface FjellNavn {
    fjellnavn: string;
}

interface FjellRad {
    fjell_id: number;
    fjellnavn: string;
    hoyde: number;
    beskrivelse: string;
    omraade_id: number;
    foto: string;
}

interface Person {
    brukernavn: string;
}

interface PersonRad {
    brukernavn: string;
    fornavn: string | null;
    etternavn: string | null;
    epost: string | null;
}

interface FjellturForPerson {
    fjellnavn: string;
    tidspunkt: string;
}

interface NyFjelltur {
    brukernavn: string;
    fjellnavn: string;
    tidspunkt: string;
    varighet: string;
    beskrivelse: string;
}

// Eksempel på en rute som henter alle fjell, beskrivelse, høydene og bilde deres
app.get('/api/fjell', (req: Request, res: Response) => {
    const rows = db.prepare<[], FjellInfo>('SELECT fjellnavn, hoyde, beskrivelse, foto FROM fjell').all();
    res.json(rows);
});

// Eksempel på en rute som henter alle fjellnavnene som finnes i databasen
app.get('/api/fjell/navn', (req: Request, res: Response) => {
    const rows = db.prepare<[], FjellNavn>('SELECT fjellnavn FROM fjell').all();
    res.json(rows);
});

// Eksempel på en rute som henter alle brukernavnene til alle personene i databasen
app.get('/api/personer', (req: Request, res: Response) => {
    const rows = db.prepare<[], Person>('SELECT brukernavn FROM person').all();
    res.json(rows);
});

// Rute som henter fjellturene til en gitt person, der vi bruker en URL-parameter
app.get('/api/fjellturer/:brukernavn', (req: Request<{ brukernavn: string }>, res: Response) => {
    const brukernavn = req.params.brukernavn;

    const rows = db.prepare<[string], FjellturForPerson>(`
        SELECT fjell.fjellnavn, fjelltur.tidspunkt
        FROM person
        JOIN fjelltur ON person.brukernavn = fjelltur.brukernavn
        JOIN fjell ON fjelltur.fjell_id = fjell.fjell_id
        WHERE person.brukernavn = ?
    `).all(brukernavn);

    res.json(rows);
});

// Rute som lar oss registrere en ny fjelltur for en person
app.post('/api/fjellturer', express.json(), (req: Request<{}, {}, NyFjelltur>, res: Response) => {
    // Henter ut data fra request body
    const { brukernavn, fjellnavn, tidspunkt, varighet, beskrivelse } = req.body;

    // Sjekk om personen eksisterer
    const person = db.prepare<[string], PersonRad>('SELECT * FROM person WHERE brukernavn = ?').get(brukernavn);
    if (!person) return res.status(404).json({ error: 'Person ikke funnet' });

    // Sjekk om fjellet eksisterer
    const fjell = db.prepare<[string], FjellRad>('SELECT * FROM fjell WHERE fjellnavn = ?').get(fjellnavn);
    if (!fjell) return res.status(404).json({ error: 'Fjell ikke funnet' });

    // Registrer den nye fjellturen
    db.prepare('INSERT INTO fjelltur (brukernavn, fjell_id, tidspunkt, varighet, beskrivelse) VALUES (?, ?, ?, ?, ?)')
        .run(brukernavn, fjell.fjell_id, tidspunkt, Number(varighet), beskrivelse);

    res.status(201).json({ message: 'Fjellturen er registrert!' });
});

// Åpner en viss port på serveren, og starter serveren
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});
