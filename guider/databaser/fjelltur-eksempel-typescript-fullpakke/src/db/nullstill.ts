// Lager databasen helt på nytt: sletter fjelltur.db, lager tabellene og legger inn testdata.
// Kjøres med: npm run db:nullstill
//
// Tabellene lages av "migrasjonene" i mappen drizzle/. Dette er vanlige SQL-filer som drizzle-kit
// har laget ut fra skjemaet (npm run db:generer). Åpne gjerne filen der og se på CREATE TABLE-setningene!

import { existsSync, rmSync } from 'node:fs';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { kobleTil, DATABASEFIL } from './klient';
import * as skjema from './skjema';
import * as testdata from './testdata';

if (existsSync(DATABASEFIL)) {
    rmSync(DATABASEFIL);
    console.log(`Slettet gammel ${DATABASEFIL}`);
}

const db = kobleTil();

migrate(db, { migrationsFolder: 'drizzle' });
console.log('Tabellene er laget');

// Rekkefølgen er viktig: en fjelltur peker på en person og et fjell, så de må finnes først.
db.insert(skjema.person).values(testdata.personer).run();
db.insert(skjema.omraade).values(testdata.omraader).run();
db.insert(skjema.fjell).values(testdata.fjell).run();
db.insert(skjema.fjelltur).values(testdata.fjellturer).run();
db.insert(skjema.bilde).values(testdata.bilder).run();

console.log(`Testdata er lagt inn i ${DATABASEFIL}`);
