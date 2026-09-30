# Fagsamtale: Datamodellering og SQL – Fjellturer

Samtalen har to deler:

1. **Datamodellering** – du tegner en datamodell på papir og forklarer den.
2. **SQL** – du får en ferdig database (`fjelltur.db`) og løser oppgaver med spørringer.

Det er helt greit å tenke høyt, spørre om ting og prøve seg frem. Det viktigste er at du viser hva du forstår, og at du kan forklare hvorfor du gjør som du gjør.

> **Til lærer:** Hint og løsningsforslag ligger i sammenslåtte `<details>`-blokker, slik at dokumentet kan vises til eleven. Gi eleven en **kopi** av `fjelltur.db`, siden oppgavene i nivå 4 endrer databasen. Løsningsforslagene er testet mot den originale databasen – svarene i nivå 1–3 stemmer bare hvis disse løses *før* INSERT-oppgavene.

---

# Del 1: Datamodellering

## Oppgavetekst

En venn av deg har kommet på en idé til en app, der folk kan registrere fjelltopper de går på gjennom året. Vennen har derimot ikke peiling på hva som kreves for å kunne lagre denne informasjonen, og ber deg om å hjelpe til med planlegging av "backend". I første omgang skal du altså lage en datamodell, og forklare den.

Etter et møte med vennen din, sitter du igjen med en liste med krav:

- alle data er tilknyttet en person
- registrere fjell/fjelltopp
- registrere områder, som Jotunheimen, Hardanger, Bergen, Lofoten, Vossafjella, Femundsmarka etc. med tilhørende informasjon om disse
- registrere tidspunkt for turen
- registrere hvor lang tid turen tok
- registrere en beskrivelse/oppsummering av turen
- legge ved ett eller flere bilder

Kommentarer:

- Når det gjelder område, så er tanken at du kan lage noen typiske turområder eller regioner, ikke ferdigdefinerte fylker eller kommuner.
- En person kan gå mange turer til samme fjell.
- En fjelltopp kan bli besøkt av mange personer.
- Ta dine egne forutsetninger der det er aktuelt, og der du mener det mangler informasjon. Skriv ned disse forutsetningene.

**Oppgave:** Tegn datamodellen på papir, og forhold deg til normaliseringsreglene. Få med:

- tabeller (entiteter) og felt (attributter)
- primærnøkler og fremmednøkler
- relasjonene mellom tabellene (en-til-mange osv.)

Forklar deretter modellen din muntlig.

<details>

<summary>Til lærer: Oppfølgingsspørsmål og løsningsforslag</summary>

**Løsningsforslag:** [fjelltur-datamodell.png](../../guider/databaser/fjelltur-eksempel/fjelltur-datamodell.png)

Tabellene i databasen eleven får etterpå:

| Tabell     | Felt                                                                 |
| ---------- | -------------------------------------------------------------------- |
| `person`   | **brukernavn** (PK), fornavn, etternavn, epost                       |
| `omraade`  | **id** (PK), navn, beskrivelse                                       |
| `fjell`    | **fjell_id** (PK), fjellnavn, hoyde, beskrivelse, *omraade_id* (FK), foto |
| `fjelltur` | **fjelltur_id** (PK), tidspunkt, varighet, beskrivelse, *brukernavn* (FK), *fjell_id* (FK) |
| `bilde`    | **bilde_id** (PK), tittel, bildetekst, filnavn, *tur_id* (FK)        |

Forslag til oppfølgingsspørsmål (start enkelt):

1. Hvilke tabeller har du valgt, og hvorfor akkurat disse?
2. Hva er en primærnøkkel? Hvorfor har du valgt akkurat det feltet som primærnøkkel i `person`?
3. Hva er en fremmednøkkel? Pek på en i modellen din, og forklar hva den kobler sammen.
4. Hvorfor er ikke område bare et tekstfelt i fjell-tabellen? (Tenk: skrivefeil, "Jotunheimen" skrevet 50 ganger, ekstra informasjon om området.)
5. En person kan gå mange fjell, og et fjell kan gås av mange personer. Hva slags relasjon er det, og hvordan har du løst det? (Mange-til-mange, løst med koblingstabellen `fjelltur`.)
6. Hvorfor har bilder en egen tabell, og ikke bare feltene `bilde1`, `bilde2`, `bilde3` i fjelltur-tabellen?
7. Hvilke forutsetninger har du tatt? (F.eks. ett fjell per tur, én person per tur.)
8. Hvis vennen din vil at flere personer kan gå samme tur sammen – hvordan måtte modellen endres?

</details>

---

# Del 2: SQL

Du får nå databasen `fjelltur.db`. Åpne den i verktøyet du foretrekker (f.eks. DB Browser for SQLite eller SQLite i VS Code), og se hvordan den er bygget opp før du starter.

Nyttig å vite:

- `tidspunkt` er lagret som tekst på formatet `ÅÅÅÅ-MM-DD`, f.eks. `'2026-01-05'`.
- `varighet` er antall minutter.
- Tekst skrives med enkle anførselstegn: `'hausnes'`.
- Avslutt hver spørring med semikolon `;`.

Oppgavene blir gradvis vanskeligere. Gjør dem i rekkefølge.

## Nivå 1: SELECT og WHERE

### Oppgave 1

Hent all informasjon om alle personene i databasen.

<details>
<summary>Hint</summary>

`*` betyr "alle kolonner".

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT * FROM person;
```

Gir 5 personer.

</details>

### Oppgave 2

Hent bare fjellnavn og høyde for alle fjellene.

<details>
<summary>Hint</summary>

Skriv navnene på kolonnene du vil ha, med komma mellom, i stedet for `*`.

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT fjellnavn, hoyde FROM fjell;
```

</details>

### Oppgave 3

Hent fjellnavn og høyde for alle fjell som er høyere enn 1500 meter.

<details>
<summary>Hint</summary>

Bruk `WHERE` etter `FROM fjell` for å filtrere radene.

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT fjellnavn, hoyde FROM fjell
WHERE hoyde > 1500;
```

Svar: Fanaråken (2010), Store Soleibotntind (1920) og Olsskavlen (1580).

</details>

### Oppgave 4

Hent alle turene som brukeren med brukernavn `hausnes` har gått.

<details>
<summary>Hint</summary>

Hvilken tabell inneholder turene? Hvilket felt i den tabellen sier hvem som gikk turen?

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT * FROM fjelltur
WHERE brukernavn = 'hausnes';
```

Gir 4 turer (fjelltur_id 1, 2, 3 og 8).

Oppfølging: Hvorfor bruker vi `brukernavn` og ikke `fornavn` her?

</details>

## Nivå 2: ORDER BY og COUNT

### Oppgave 5

Hent fjellnavn og høyde for alle fjellene, sortert fra høyest til lavest.

<details>
<summary>Hint</summary>

`ORDER BY` sorterer. `ASC` = stigende (standard), `DESC` = synkende.

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT fjellnavn, hoyde FROM fjell
ORDER BY hoyde DESC;
```

Fanaråken øverst, Nesheimshorgi nederst.

</details>

### Oppgave 6

Hent navnet på alle fjellene i Hardanger (`omraade_id = 3`), sortert alfabetisk.

<details>
<summary>Hint</summary>

Her trenger du både `WHERE` og `ORDER BY`. `WHERE` kommer alltid før `ORDER BY`.

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT fjellnavn FROM fjell
WHERE omraade_id = 3
ORDER BY fjellnavn;
```

Svar: Midtfjell, Nesheimshorgi, Oksen.

</details>

### Oppgave 7

Hvilken tur varte lengst? Vis all informasjon om bare denne ene turen.

<details>
<summary>Hint</summary>

Sorter turene etter varighet, og bruk `LIMIT 1` for å bare få den første raden.

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT * FROM fjelltur
ORDER BY varighet DESC
LIMIT 1;
```

Svar: fjelltur_id 11, 599 minutter, gått av `fjellguden`.

</details>

### Oppgave 8

Hvor mange fjell finnes det i databasen?

<details>
<summary>Hint</summary>

`COUNT(*)` teller antall rader.

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT COUNT(*) AS antall_fjell FROM fjell;
```

Svar: 8.

Oppfølging: Hva gjør `AS`?

</details>

### Oppgave 9

Hvor mange turer har brukeren `fjellguden` gått?

<details>
<summary>Hint</summary>

Kombiner `COUNT(*)` med `WHERE`.

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT COUNT(*) AS antall_turer FROM fjelltur
WHERE brukernavn = 'fjellguden';
```

Svar: 3.

</details>

### Oppgave 10

Hvor mange turer har tatt mer enn 4 timer?

<details>
<summary>Hint</summary>

`varighet` er lagret i minutter. Hvor mange minutter er 4 timer?

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT COUNT(*) AS antall_turer FROM fjelltur
WHERE varighet > 240;
```

Svar: 6.

</details>

## Nivå 3: GROUP BY

### Oppgave 11

Tell hvor mange turer hver person har gått. Vis brukernavn og antall turer.

<details>
<summary>Hint</summary>

`GROUP BY brukernavn` samler alle rader med samme brukernavn i én gruppe. `COUNT(*)` teller da antall rader i hver gruppe.

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT brukernavn, COUNT(*) AS antall_turer
FROM fjelltur
GROUP BY brukernavn;
```

Svar: fjellguden 3, harry 2, hausnes 4, larry 2.

Oppfølging: `visjonæren` finnes i person-tabellen, men er ikke med i svaret. Hvorfor? (Hen har ingen turer, og vi henter bare fra `fjelltur`. Kan løses med `LEFT JOIN` fra `person`, se bonusoppgavene.)

</details>

### Oppgave 12

Gjør det samme som i forrige oppgave, men sorter slik at personen med flest turer kommer øverst.

<details>
<summary>Hint</summary>

`ORDER BY` kommer etter `GROUP BY`. Du kan sortere på navnet du ga kolonnen med `AS`.

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT brukernavn, COUNT(*) AS antall_turer
FROM fjelltur
GROUP BY brukernavn
ORDER BY antall_turer DESC;
```

`hausnes` (4) øverst.

</details>

### Oppgave 13

Tell hvor mange fjell det er i hvert område. Vis `omraade_id` og antall fjell.

<details>
<summary>Hint</summary>

Hvilken tabell sier hvilket område et fjell ligger i? Grupper på det feltet.

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT omraade_id, COUNT(*) AS antall_fjell
FROM fjell
GROUP BY omraade_id;
```

Svar: område 1 har 2 fjell, område 2 har 3 og område 3 har 3.

</details>

### Oppgave 14

Tell hvor mange turer det har vært til hvert fjell (bruk `fjell_id`). Sorter slik at det mest populære fjellet kommer øverst.

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT fjell_id, COUNT(*) AS antall_turer
FROM fjelltur
GROUP BY fjell_id
ORDER BY antall_turer DESC;
```

Svar: fjell_id 1 (Fanaråken) med 4 turer. Alle de andre har 1.

</details>

## Nivå 4: INSERT INTO og CREATE TABLE

### Oppgave 15

Legg inn et nytt område: Lofoten, med en kort beskrivelse. Sjekk etterpå at det ble lagt inn.

<details>
<summary>Hint</summary>

```sql
INSERT INTO tabell (kolonne1, kolonne2) VALUES ('verdi1', 'verdi2');
```

Trenger du å fylle inn `id` selv?

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
INSERT INTO omraade (navn, beskrivelse)
VALUES ('Lofoten', 'Fjell rett opp av havet.');

SELECT * FROM omraade;
```

Lofoten får `id` 4 automatisk.

Oppfølging: Hvorfor trenger vi ikke oppgi `id`? (`AUTOINCREMENT`.)

</details>

### Oppgave 16

Legg deg selv inn som ny person i databasen.

<details>
<summary>Hint</summary>

Se på hvilke kolonner `person`-tabellen har. Her er primærnøkkelen *ikke* et tall som lages automatisk.

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
INSERT INTO person (brukernavn, fornavn, etternavn, epost)
VALUES ('ola', 'Ola', 'Nordmann', 'ola@test.no');
```

Oppfølging: Hva skjer hvis du prøver å legge inn samme brukernavn en gang til? Hvorfor?

</details>

### Oppgave 17

Registrer en fjelltur for deg selv: Du gikk til Nesheimshorgi i dag, og turen tok 3 timer. Skriv også en kort beskrivelse. Sjekk etterpå at turen er lagret, med en spørring som bare viser dine turer.

<details>
<summary>Hint</summary>

Du trenger `fjell_id` til Nesheimshorgi – finn den med en `SELECT` først. `brukernavn` må være det samme som du la inn i forrige oppgave.

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
INSERT INTO fjelltur (tidspunkt, varighet, beskrivelse, brukernavn, fjell_id)
VALUES ('2026-09-30', 180, 'Fin tur med god utsikt.', 'ola', 5);

SELECT * FROM fjelltur
WHERE brukernavn = 'ola';
```

NB: Turen får `fjelltur_id` 13 (ikke 12), fordi en tidligere rad er slettet. Kan være et fint samtaletema.

Oppfølging: Hvorfor lagrer vi `fjell_id` (5) og ikke fjellnavnet? Hva skjer med resultatet i oppgave 11 nå?

</details>

### Oppgave 18

Vennen din vil at brukerne skal kunne skrive kommentarer på andres turer. En kommentar har en tekst og et tidspunkt, og vi må vite hvem som skrev den og hvilken tur den gjelder.

1. Lag en ny tabell `kommentar` med `CREATE TABLE`.
2. Legg inn en kommentar fra deg selv på en tur.
3. Hent ut alle kommentarene.

<details>
<summary>Hint</summary>

```sql
CREATE TABLE tabellnavn (
    id_kolonne INTEGER PRIMARY KEY AUTOINCREMENT,
    tekstkolonne TEXT,
    ...
);
```

Hvilke fremmednøkler trenger tabellen? Se hvordan `fjelltur` peker på `person` og `fjell`.

</details>

<details>
<summary>Løsningsforslag</summary>

```sql
CREATE TABLE kommentar (
    kommentar_id INTEGER PRIMARY KEY AUTOINCREMENT,
    tekst TEXT,
    tidspunkt TEXT,
    brukernavn TEXT REFERENCES person (brukernavn),
    fjelltur_id INTEGER REFERENCES fjelltur (fjelltur_id)
);

INSERT INTO kommentar (tekst, tidspunkt, brukernavn, fjelltur_id)
VALUES ('Imponerande tid!', '2026-09-30', 'ola', 8);

SELECT * FROM kommentar;
```

Oppfølging: Hvordan ville du tegnet `kommentar` inn i datamodellen fra del 1? Hvilke relasjoner får den?

</details>

## Bonus: Hente fra flere tabeller (JOIN)

Bare hvis det er tid igjen og det har gått greit så langt.

### Bonusoppgave 1

Vis fjellnavn sammen med **navnet** på området fjellet ligger i (ikke bare `omraade_id`).

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT fjell.fjellnavn, omraade.navn
FROM fjell
JOIN omraade ON fjell.omraade_id = omraade.id;
```

</details>

### Bonusoppgave 2

Tell hvor mange turer hver person har gått, men vis **fornavn**, og få med personer som ikke har gått noen turer (de skal vise 0). Sorter med flest turer øverst.

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT person.fornavn, COUNT(fjelltur.fjelltur_id) AS antall_turer
FROM person
LEFT JOIN fjelltur ON person.brukernavn = fjelltur.brukernavn
GROUP BY person.brukernavn
ORDER BY antall_turer DESC;
```

Oppfølging: Hvorfor `LEFT JOIN` og ikke `JOIN`? Hvorfor `COUNT(fjelltur.fjelltur_id)` og ikke `COUNT(*)`? (`COUNT(*)` ville gitt 1 for Visjo.)

</details>

---

<details>

<summary>Til lærer: Notater underveis</summary>

| Område                                      | Observasjoner |
| ------------------------------------------- | ------------- |
| Tabeller og felt                            |               |
| Primær- og fremmednøkler                    |               |
| Relasjoner (1–M, M–M og koblingstabell)     |               |
| Normalisering / begrunnelser                |               |
| SELECT og WHERE (oppg. 1–4)                 |               |
| ORDER BY og COUNT (oppg. 5–10)              |               |
| GROUP BY (oppg. 11–14)                      |               |
| INSERT INTO og CREATE TABLE (oppg. 15–18)   |               |
| JOIN (bonus)                                |               |
| Selvstendighet / bruk av hint               |               |

</details>
