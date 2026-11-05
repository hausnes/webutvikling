// =============================================================================
// Databaseskjemaet - "én kilde til sannhet"
// =============================================================================
// Her beskriver vi alle tabellene i databasen, i TypeScript. Fra denne ene filen får vi:
//   1. selve databasen (drizzle-kit lager SQL-en for oss, se mappen "drizzle/")
//   2. TypeScript-typer for radene (nederst i filen)
//   3. validering av data som kommer inn til serveren (se src/server/validering.ts)
//
// Sammenlign gjerne med CREATE TABLE i SQL: integer() tilsvarer INTEGER, text() tilsvarer TEXT,
// .notNull() tilsvarer NOT NULL og .references() tilsvarer REFERENCES (fremmednøkkel).
//
// Navnet i anførselstegn, f.eks. 'fjell_id', er kolonnenavnet i databasen. Navnet foran kolonet,
// f.eks. fjellId, er det vi bruker i TypeScript-koden. Slik kan databasen beholde de samme
// kolonnenavnene som i de andre fjelltur-eksemplene (og SQL-oppgavene).

import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const person = sqliteTable('person', {
    brukernavn: text('brukernavn').primaryKey(),
    fornavn: text('fornavn').notNull(),
    etternavn: text('etternavn').notNull(),
    epost: text('epost'), // Uten .notNull() kan feltet være NULL -> typen blir "string | null"
});

export const omraade = sqliteTable('omraade', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    navn: text('navn').notNull(),
    beskrivelse: text('beskrivelse'),
});

export const fjell = sqliteTable('fjell', {
    id: integer('fjell_id').primaryKey({ autoIncrement: true }),
    fjellnavn: text('fjellnavn').notNull().unique(),
    hoyde: integer('hoyde').notNull(), // meter over havet
    beskrivelse: text('beskrivelse'),
    omraadeId: integer('omraade_id').notNull()
        .references(() => omraade.id),
    foto: text('foto'), // filnavn i public/bilder
});

export const fjelltur = sqliteTable('fjelltur', {
    id: integer('fjelltur_id').primaryKey({ autoIncrement: true }),
    tidspunkt: text('tidspunkt').notNull(), // dato på formen ÅÅÅÅ-MM-DD
    varighet: integer('varighet').notNull(), // minutter
    beskrivelse: text('beskrivelse'),
    brukernavn: text('brukernavn').notNull()
        .references(() => person.brukernavn),
    fjellId: integer('fjell_id').notNull()
        .references(() => fjell.id),
});

export const bilde = sqliteTable('bilde', {
    id: integer('bilde_id').primaryKey({ autoIncrement: true }),
    tittel: text('tittel'),
    bildetekst: text('bildetekst'),
    filnavn: text('filnavn').notNull(),
    turId: integer('tur_id').notNull()
        .references(() => fjelltur.id),
});

// =============================================================================
// Typer - laget AUTOMATISK ut fra tabellene over
// =============================================================================
// $inferSelect: slik en rad ser ut når vi LESER den fra databasen (alle felt er med).
// $inferInsert: slik en rad ser ut når vi SETTER DEN INN. Felt som databasen kan fylle ut selv
//               (id-er med autoIncrement) eller som kan være NULL, er valgfrie her.
//
// Hold musepekeren over f.eks. "Fjelltur" i VS Code for å se hvordan typen faktisk ser ut.

export type Person = typeof person.$inferSelect;
export type NyPerson = typeof person.$inferInsert;

export type Omraade = typeof omraade.$inferSelect;
export type NyttOmraade = typeof omraade.$inferInsert;

export type Fjell = typeof fjell.$inferSelect;
export type NyttFjell = typeof fjell.$inferInsert;

export type Fjelltur = typeof fjelltur.$inferSelect;
export type NyFjelltur = typeof fjelltur.$inferInsert;

export type Bilde = typeof bilde.$inferSelect;
export type NyttBilde = typeof bilde.$inferInsert;
