const express = require("express");
const app = express();
const bcrypt = require("bcrypt"); // Importerer bcrypt, ein pakke for å m.a. hashe passord
const session = require("express-session");
const PORT = 3000;

// Middleware for å servere statiske filer fra public-mappen
app.use(express.static('public'));

// Middleware for å parse JSON fra request body
app.use(express.json());

// For å håndtere filstier
const path = require('path');

// Databasen
const Database = require('better-sqlite3');
const db = new Database('./brukere.db');
// Opprett tabell dersom den ikkje finst
db.exec(`CREATE TABLE IF NOT EXISTS person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fornavn TEXT,
    etternavn TEXT,
    passord TEXT,
    rolle TEXT DEFAULT 'vanlig'
)`);

// Middleware for sessions
// Dette gir hver bruker en unik "sesjon" som lagres på serveren
// Nettleseren får en cookie som identifiserer sesjonen
app.use(
    session({
        secret: "hemmeligNøkkel", // Brukes for å kryptere session-ID (bytt i produksjon!)
        resave: false,              // Ikke lagre sesjonen på nytt hvis den ikke er endret
        saveUninitialized: false,   // Ikke lag session før noe lagres i den
        cookie: { 
            secure: false,          // Sett til true hvis du bruker HTTPS
            maxAge: 1000 * 60 * 60  // Session utløper etter 1 time
        }
    })
);

// Middleware for å logge alle innkommende og utgående requests (for debugging)
//  Skal logge: tidspunkt, http-metode, body og url og hvilken bruker
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - Body: ${JSON.stringify(req.body)} - Bruker: ${req.session.bruker ? req.session.bruker.fornavn : "Ingen"}`);
    next();
});

// Middleware for å beskytte sider bak "innloggings-mur"
function kreverInnlogging(req, res, next) {
    if (!req.session.bruker) { // Dersom brukaren ikkje har ein session (er logga inn)
        return res.redirect("/"); // Startsida som inneheld opprett brukar og logg inn
    }
    next(); // Brukaren er logga inn, gå vidare
}

// Gammel middleware som krever admin-rolle
// function kreverAdmintilgang(req, res, next) {
//     if (!req.session.bruker) {
//         return res.redirect("/");
//     }
//     if (req.session.bruker.rolle !== 'admin') {
//         return res.status(403).json({ message: "Ingen tilgang – krever admin-rolle" });
//     }
//     next();
// }

// Gammel middleware som krever support-rolle
// function kreverSupport(req, res, next) {
//     if (!req.session.bruker) {
//         return res.redirect("/");
//     }
//     if (req.session.bruker.rolle !== 'support') {
//         return res.status(403).json({ message: "Ingen tilgang – krever support-rolle" });
//     }
//     next();
// }

// Middleware som er mer generell, som kan brukes for alle mulige roller - og som er lett å utvide i fremtiden
function kreverRolle(...roller) {
    return (req, res, next) => {
        if (!req.session.bruker) { // Dersom brukeren ikke har en session (er logga inn)
            return res.redirect("/");
        }
        if (!roller.includes(req.session.bruker.rolle)) { // Dersom brukeren sin rolle ikke er i listen over roller som har tilgang
            return res.status(403).json({ message: "Ingen tilgang" });
        }
        next();
    };
}

// Eksempel på rute som viser deg index.html fra public-mappen (alltid tilgjengelig)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Beskyttet rute som krever innlogging, her gjør vi alle filer fra beskyttet-mappen tilgjengelig
app.use('/beskyttet', kreverInnlogging, express.static(path.join(__dirname, 'beskyttet')));

// Beskyttet rute som viser alle data om brukeren (kun egne data)
app.get("/api/minside", kreverInnlogging, (req, res) => {
    const brukerId = req.session.bruker.id;
    const bruker = db.prepare("SELECT id, fornavn, etternavn, passord, rolle FROM person WHERE id = ?").get(brukerId);
    res.json({ bruker });
});

// Ny måte: Admin-rute: henter all informasjon om alle brukere
app.get("/api/admin/brukere", kreverRolle('admin'), (req, res) => {
    const brukere = db.prepare("SELECT id, fornavn, etternavn, passord, rolle FROM person").all();
    res.json({ brukere });
});

// Gammel måte: Admin-rute: henter all informasjon om alle brukere
// app.get("/api/admin/brukere", kreverAdmintilgang, (req, res) => {
//     const brukere = db.prepare("SELECT id, fornavn, etternavn, passord, rolle FROM person").all();
//     res.json({ brukere });
// });

// Ny måte: Support-rute: henter kun fornavn og etternavn for alle brukere
app.get("/api/support/brukere", kreverRolle('support', 'admin'), (req, res) => { // NB: Se at både support og admin har tilgang til denne ruten!
    const brukere = db.prepare("SELECT fornavn, etternavn FROM person").all();
    res.json({ brukere });
});

// Gammel måte: Support-rute: henter kun fornavn og etternavn for alle brukere
// app.get("/api/support/brukere", kreverSupport, (req, res) => {
//     const brukere = db.prepare("SELECT fornavn, etternavn FROM person").all();
//     res.json({ brukere });
// });

// Rute for å legge til ein ny person
app.post("/api/leggtilperson", async (req, res) => {
    const { fornavn, etternavn, passord } = req.body;

    // Her bør du legge til validering av input-data, og sjekke om brukeren allerede finnes
    const eksisterendeBruker = db.prepare("SELECT * FROM person WHERE fornavn = ?").get(fornavn);
    if (eksisterendeBruker) {
        return res.status(400).json({ message: "Bruker med dette fornavnet finnes allerede" });
    }

    try {
        // Hash passordet med bcrypt
        const saltRounds = 10;
        const hashPassord = await bcrypt.hash(passord, saltRounds);

        const rolle = req.body.rolle && ['admin', 'support', 'vanlig'].includes(req.body.rolle)
            ? req.body.rolle
            : 'vanlig';

        const stmt = db.prepare("INSERT INTO person (fornavn, etternavn, passord, rolle) VALUES (?, ?, ?, ?)");
        const info = stmt.run(fornavn, etternavn, hashPassord, rolle);

        res.status(201).json({ message: "Ny bruker opprettet", id: info.lastInsertRowid });
    } catch (error) {
        console.error("Feil ved oppretting av bruker:", error);
        res.status(500).json({ message: "Noe gikk galt på serveren" });
    }
});

// Rute for å logge inn
app.post("/api/login", async (req, res) => {
    const { fornavn, passord } = req.body;

    const bruker = db.prepare("SELECT * FROM person WHERE fornavn = ?").get(fornavn);
    if (!bruker) {
        return res.status(401).json({ message: "Feil fornavn eller passord" });
    }

    const passordErGyldig = await bcrypt.compare(passord, bruker.passord);
    if (!passordErGyldig) {
        return res.status(401).json({ message: "Feil fornavn eller passord" });
    }

    // Lagre brukerdata i session
    req.session.bruker = { id: bruker.id, fornavn: bruker.fornavn, rolle: bruker.rolle };
    res.json({ message: "Innlogging vellykket" });
});

// Rute for å logge ut
app.post("/api/logout", (req, res) => {
    req.session.destroy();
    res.json({ message: "Du er logget ut" });
});

// Starter serveren
app.listen(PORT, () => {
    console.log(`Server oppe: http://localhost:${PORT}`);
});