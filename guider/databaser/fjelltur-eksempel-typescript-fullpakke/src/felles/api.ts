// =============================================================================
// "Kontrakten" mellom server og nettleser
// =============================================================================
// Denne filen beskriver hva hvert API-endepunkt sender tilbake. Både serveren (src/server/app.ts)
// og nettleserkoden (src/nettleser/*.ts) bruker de samme typene. Endrer vi noe her, får begge
// sider typefeil der koden ikke lenger passer - i stedet for at feilen dukker opp i nettleseren.
//
// Typene er bygget av typene fra skjemaet. "Pick" plukker ut noen av feltene fra en type.

import type { Fjell, Fjelltur, Person } from '../db/skjema';

// GET /api/fjell
export type FjellKort = Pick<Fjell, 'fjellnavn' | 'hoyde' | 'beskrivelse' | 'foto'>;

// GET /api/fjell/navn
export type FjellValg = Pick<Fjell, 'id' | 'fjellnavn'>;

// GET /api/personer
export type PersonValg = Pick<Person, 'brukernavn'>;

// GET /api/fjellturer/:brukernavn
export type TurForPerson = Pick<Fjell, 'fjellnavn'> & Pick<Fjelltur, 'tidspunkt' | 'varighet'>;

// Svar fra POST /api/fjellturer
export interface Kvittering {
    melding: string;
    id: number;
}

// Svar når noe går galt
export interface Feilmelding {
    feil: string;
    detaljer?: string[];
}
