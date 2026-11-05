// =============================================================================
// Serveren: Express + Drizzle
// =============================================================================
// Spørringene skrives med Drizzle i stedet for SQL i tekststrenger. De ligner fortsatt mye på SQL
// (select, from, where, innerJoin), men nå vet TypeScript hvilke tabeller og kolonner som finnes.
// Skriver du f.eks. fjell.hoyd i stedet for fjell.hoyde, kompilerer ikke koden.
//
// Legg også merke til Response<...> på hver rute: den sier hva ruten skal svare med, og typene
// kommer fra src/felles/api.ts - de samme typene som nettleserkoden bruker.

import express, { type Request, type Response } from 'express';
import { eq } from 'drizzle-orm';
import { kobleTil } from '../db/klient';
import { fjell, fjelltur, person } from '../db/skjema';
import type { FjellKort, FjellValg, PersonValg, TurForPerson, Kvittering, Feilmelding } from '../felles/api';
import { nyTurSkjema } from './validering';

const app = express();
const PORT = 3000;
const db = kobleTil();

// Serverer HTML, CSS, bilder og den ferdig bygde nettleserkoden (public/js) fra "public"-mappen
app.use(express.static('public'));

// Gjør om JSON i request body til et JavaScript-objekt (req.body)
app.use(express.json());

// Henter alle fjell, med høyde, beskrivelse og bilde
app.get('/api/fjell', (req: Request, res: Response<FjellKort[]>) => {
    const rader = db
        .select({
            fjellnavn: fjell.fjellnavn,
            hoyde: fjell.hoyde,
            beskrivelse: fjell.beskrivelse,
            foto: fjell.foto,
        })
        .from(fjell)
        .all();

    res.json(rader);
});

// Henter id og navn på alle fjell (brukes i nedtrekkslisten når man registrerer en tur)
app.get('/api/fjell/navn', (req: Request, res: Response<FjellValg[]>) => {
    const rader = db
        .select({ id: fjell.id, fjellnavn: fjell.fjellnavn })
        .from(fjell)
        .orderBy(fjell.fjellnavn)
        .all();

    res.json(rader);
});

// Henter brukernavnene til alle personene
app.get('/api/personer', (req: Request, res: Response<PersonValg[]>) => {
    const rader = db
        .select({ brukernavn: person.brukernavn })
        .from(person)
        .orderBy(person.brukernavn)
        .all();

    res.json(rader);
});

// Henter alle fjellturene til en gitt person. Tilsvarer denne SQL-en:
//   SELECT fjell.fjellnavn, fjelltur.tidspunkt, fjelltur.varighet
//   FROM fjelltur JOIN fjell ON fjelltur.fjell_id = fjell.fjell_id
//   WHERE fjelltur.brukernavn = ? ORDER BY fjelltur.tidspunkt
app.get('/api/fjellturer/:brukernavn', (req: Request<{ brukernavn: string }>, res: Response<TurForPerson[]>) => {
    const rader = db
        .select({
            fjellnavn: fjell.fjellnavn,
            tidspunkt: fjelltur.tidspunkt,
            varighet: fjelltur.varighet,
        })
        .from(fjelltur)
        .innerJoin(fjell, eq(fjelltur.fjellId, fjell.id))
        .where(eq(fjelltur.brukernavn, req.params.brukernavn))
        .orderBy(fjelltur.tidspunkt)
        .all();

    res.json(rader);
});

// Registrerer en ny fjelltur
app.post('/api/fjellturer', (req: Request, res: Response<Kvittering | Feilmelding>) => {
    // 1. Sjekk dataene "ved døren". req.body kan inneholde hva som helst!
    const resultat = nyTurSkjema.safeParse(req.body);
    if (!resultat.success) {
        res.status(400).json({
            feil: 'Ugyldige data',
            detaljer: resultat.error.issues.map((feil) => `${feil.path.join('.')}: ${feil.message}`),
        });
        return;
    }

    // 2. Herfra vet TypeScript at nyTur har riktige felt med riktige typer
    const nyTur = resultat.data;

    // 3. Sjekk at personen og fjellet finnes, så vi kan gi en tydelig feilmelding
    const finnesPerson = db.select().from(person).where(eq(person.brukernavn, nyTur.brukernavn)).get();
    if (!finnesPerson) {
        res.status(404).json({ feil: `Fant ingen person med brukernavn "${nyTur.brukernavn}"` });
        return;
    }

    const finnesFjell = db.select().from(fjell).where(eq(fjell.id, nyTur.fjellId)).get();
    if (!finnesFjell) {
        res.status(404).json({ feil: `Fant ikke noe fjell med id ${nyTur.fjellId}` });
        return;
    }

    // 4. Lagre turen. .returning() gir oss id-en databasen lagde.
    const lagret = db
        .insert(fjelltur)
        .values(nyTur)
        .returning({ id: fjelltur.id })
        .get();

    res.status(201).json({ melding: 'Fjellturen er registrert!', id: lagret.id });
});

app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});
