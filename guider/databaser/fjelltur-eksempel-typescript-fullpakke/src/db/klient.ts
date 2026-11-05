// Kobler til SQLite-databasen og lager et Drizzle-objekt ("db") som resten av serveren bruker.
// Fordi vi gir Drizzle skjemaet vårt, vet den hvilke tabeller og kolonner som finnes, og hvilke
// typer de har - det er dette som gir oss forslag i editoren og typefeil når noe er galt.

import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as skjema from './skjema';

export const DATABASEFIL = 'fjelltur.db';

export function kobleTil(filnavn: string = DATABASEFIL) {
    const sqlite = new Database(filnavn);
    // SQLite sjekker ikke fremmednøkler med mindre vi ber om det.
    // Med dette på får vi en feil hvis vi f.eks. prøver å registrere en tur på et fjell som ikke finnes.
    sqlite.pragma('foreign_keys = ON');
    return drizzle(sqlite, { schema: skjema });
}
