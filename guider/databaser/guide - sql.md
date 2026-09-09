# SQL - en kort introduksjon

SQL (`S`tructured `Q`uery `L`anguage) er språket vi bruker for å jobbe med databaser. Det inkluderer å opprette og endre struktur, legge inn og endre innhold, og å be databasen om å vise akkurat den informasjonen du er ute etter.

Et nyttig huskeord er **CRUD**: **C**reate, **R**ead, **U**pdate, **D**elete. Det er de fire tingene du i praksis gjør med data, og denne guiden er bygget opp i akkurat den rekkefølgen:

1. **Create** - lage tabell og legge inn data (`CREATE TABLE`, `INSERT INTO`)
2. **Read** - hente ut data (`SELECT`, med alt av filtrering, sortering og kobling av tabeller)
3. **Update** - endre data som allerede finnes (`UPDATE`), og endre selve tabellstrukturen (`ALTER TABLE`)
4. **Delete** - slette data (`DELETE`)

Grunnen til at rekkefølgen er viktig: hvis du kjører kodeblokkene i denne guiden fra toppen og nedover i én og samme database, skal alt fungere uten at data forsvinner underveis.

## Øvinger i nettleseren

Her er noen ressurser som lar deg øve på å skrive SQL i nettleseren, uten at du trenger å installere noe lokalt:

- [Sandbox SQL](https://sandboxsql.com/)
- [SQL PD](https://sqlpd.com/) (du er "politi" og skal løse saker vha. SQL)
- [SQLBolt](https://sqlbolt.com/)

## Slik jobber du med SQLite3

Dere bruker SQLite3, som skiller seg litt fra f.eks. MySQL/MariaDB:

- **Hele databasen er én fil** (f.eks. `skole.db`). Det gjør den enkel å kopiere, sende til andre eller legge i et prosjekt, siden du slipper å ha en egen databaseserver kjørende.
- Du åpner (eller oppretter, hvis den ikke finnes) databasefilen fra terminalen med `sqlite3 skole.db`. Alternativt kan du bruke et grafisk verktøy som **DB Browser for SQLite**, eller en av nettsandkassene over.
- Inne i `sqlite3`-terminalen har du noen praktiske **punktum-kommandoer** (disse er ikke SQL, men spesielle for `sqlite3`-verktøyet):

    | Kommando | Hva den gjør |
    |---|---|
    | `.tables` | Lister alle tabeller i databasen |
    | `.schema elever` | Viser hvordan tabellen `elever` er definert |
    | `.headers on` | Viser kolonnenavn over resultatene |
    | `.mode column` | Formaterer resultater som ryddige kolonner |
    | `.quit` | Avslutter `sqlite3` |

- SQLite er ikke like strengt på datatyper som mange andre databaser (dette kalles *type affinity*). Du kan i praksis lure inn feil datatype i en kolonne uten at SQLite stopper deg. Følg likevel alltid den deklarerte typen - det gjør koden lesbar, og forhindrer overraskelser hvis dere senere bytter til en strengere database.
- **Fremmednøkler håndheves ikke automatisk** i SQLite. Skal du bruke `FOREIGN KEY` og faktisk få det håndhevet (f.eks. hindre at du legger inn en karakter for en elev som ikke finnes), må du kjøre `PRAGMA foreign_keys = ON;` hver gang du kobler til databasen.

## 1. CREATE TABLE - lag en ny tabell

```sql
CREATE TABLE elever (
    id INTEGER PRIMARY KEY,
    navn TEXT NOT NULL,
    alder INTEGER,
    klasse TEXT,
    by TEXT
);
```

Litt om hva som skjer her:

- `id INTEGER PRIMARY KEY` er den unike identifikatoren (primærnøkkelen) til hver elev. I SQLite gjør denne kombinasjonen at `id` automatisk fylles ut med et stigende tall når du setter inn en ny rad - du trenger altså ikke skrive `AUTOINCREMENT` (det finnes, men brukes sjelden - det garanterer i tillegg at et slettet id ikke gjenbrukes).
- `navn TEXT NOT NULL` betyr at feltet er tekst, og at det *må* fylles ut - du får en feilmelding hvis du prøver å sette inn en elev uten navn.
- `alder` og `klasse` og `by` har ingen `NOT NULL`, så de kan stå tomme (`NULL`) hvis vi ikke vet verdien.

## 2. INSERT INTO - legg til data

Vi setter inn 20 elever i ett og samme kommando, slik at vi har et realistisk datagrunnlag å spørre mot videre i guiden:

```sql
INSERT INTO elever (navn, alder, klasse, by) VALUES
('Ola Nordmann', 17, 'VG2', 'Oslo'),
('Kari Hansen', 18, 'VG3', 'Bergen'),
('Ali Reza', 16, 'VG1', 'Oslo'),
('Emma Larsen', 17, 'VG2', 'Trondheim'),
('Noah Johansen', 16, 'VG1', 'Stavanger'),
('Sofie Andersen', 19, 'VG3', 'Oslo'),
('Markus Berg', 17, 'VG2', 'Bergen'),
('Ingrid Solberg', 16, 'VG1', 'Tromsø'),
('Mohammed Al-Amin', 18, 'VG2', 'Oslo'),
('Nora Kristiansen', 18, 'VG3', 'Kristiansand'),
('Jonas Haugen', 16, 'VG1', 'Trondheim'),
('Amalie Pedersen', 17, 'VG2', 'Bergen'),
('Lucas Eide', 19, 'VG3', 'Oslo'),
('Maja Olsen', 16, 'VG1', 'Stavanger'),
('Elias Moen', 17, 'VG2', 'Tromsø'),
('Thea Vik', 18, 'VG3', 'Bergen'),
('Oliver Dahl', 16, 'VG1', 'Oslo'),
('Frida Nystrøm', 17, 'VG2', 'Trondheim'),
('William Strand', 18, 'VG3', 'Stavanger'),
('Sara Iqbal', 16, 'VG1', 'Oslo');
```

Vi lister eksplisitt hvilke kolonner vi setter inn i (`navn, alder, klasse, by`). Det er god vane fordi det gjør kommandoen tydelig og robust - den fungerer fortsatt selv om rekkefølgen på kolonnene i tabellen skulle endre seg senere. `id` er ikke med, siden SQLite fyller den ut selv.

---

## READ - hente ut data med SELECT

### Grunnleggende SELECT

```sql
-- Hent alt om alle elever
SELECT * FROM elever;

-- Hent bare navn og alder
SELECT navn, alder FROM elever;

-- Hent alle unike byer elevene kommer fra (fjerner duplikater)
SELECT DISTINCT by FROM elever;

-- Hent bare de 5 første radene
SELECT * FROM elever LIMIT 5;
```

### WHERE - filtrering

```sql
-- Elever over 17 år
SELECT * FROM elever WHERE alder > 17;

-- Elever i VG2
SELECT * FROM elever WHERE klasse = 'VG2';

-- Kombinere betingelser med AND
SELECT * FROM elever WHERE alder >= 17 AND klasse = 'VG2';

-- OR - elever i enten Bergen eller Trondheim
SELECT * FROM elever WHERE by = 'Bergen' OR by = 'Trondheim';

-- IN - samme som over, men ryddigere når det er flere alternativer
SELECT * FROM elever WHERE by IN ('Bergen', 'Trondheim', 'Tromsø');

-- BETWEEN - elever mellom 16 og 17 år (inklusiv begge grenser)
SELECT * FROM elever WHERE alder BETWEEN 16 AND 17;
```

### ORDER BY - sortering

```sql
-- Sorter etter alder (stigende - dette er standard)
SELECT * FROM elever ORDER BY alder;

-- Sorter etter navn (synkende)
SELECT * FROM elever ORDER BY navn DESC;

-- Sorter etter klasse, og alder innenfor hver klasse
SELECT * FROM elever ORDER BY klasse, alder;
```

### LIKE - tekstsøk

```sql
-- Alle navn som starter med 'O'
SELECT * FROM elever WHERE navn LIKE 'O%';

-- Alle navn som inneholder 'sen'
SELECT * FROM elever WHERE navn LIKE '%sen%';

-- Alle navn som slutter på 'a'
SELECT * FROM elever WHERE navn LIKE '%a';
```

`%` betyr "null eller flere tegn". Det finnes også `_`, som betyr "nøyaktig ett tegn".

### Aggregering - COUNT, SUM, AVG, GROUP BY

```sql
-- Antall elever totalt
SELECT COUNT(*) FROM elever;

-- Gjennomsnittlig alder
SELECT AVG(alder) FROM elever;

-- Eldste og yngste elev
SELECT MAX(alder), MIN(alder) FROM elever;

-- Antall elever per klasse
SELECT klasse, COUNT(*) FROM elever GROUP BY klasse;

-- Antall elever per by, sortert fra flest til færrest
SELECT by, COUNT(*) AS antall FROM elever
GROUP BY by
ORDER BY antall DESC;
```

`GROUP BY` deler radene inn i grupper (her: én gruppe per by), og aggregeringsfunksjonen (`COUNT`, `AVG`, osv.) regnes ut for hver gruppe for seg.

### JOIN - koble tabeller

Til nå har vi bare jobbet med én tabell. Nå lager vi en ny tabell for karakterer, som viser til `elever` via en **fremmednøkkel** (se også [guide - begreper rundt databaser.md](guide%20-%20begreper%20rundt%20databaser.md) for definisjoner):

```sql
CREATE TABLE karakterer (
    id INTEGER PRIMARY KEY,
    elev_id INTEGER NOT NULL,
    fag TEXT NOT NULL,
    karakter INTEGER NOT NULL CHECK (karakter BETWEEN 1 AND 6),
    FOREIGN KEY (elev_id) REFERENCES elever(id)
);

INSERT INTO karakterer (elev_id, fag, karakter) VALUES
(1, 'Matematikk', 5), (1, 'Norsk', 4), (1, 'Engelsk', 5),
(2, 'Matematikk', 6), (2, 'Naturfag', 5),
(3, 'Matematikk', 6), (3, 'Norsk', 5), (3, 'Kroppsøving', 6),
(4, 'Norsk', 4), (4, 'Engelsk', 4), (4, 'Historie', 5),
(5, 'Matematikk', 3), (5, 'Naturfag', 4),
(6, 'Matematikk', 5), (6, 'Norsk', 6), (6, 'Samfunnsfag', 5),
(7, 'Engelsk', 4), (7, 'Kroppsøving', 5),
(8, 'Matematikk', 4), (8, 'Norsk', 4), (8, 'Naturfag', 3),
(9, 'Matematikk', 6), (9, 'Engelsk', 6), (9, 'Historie', 6),
(10, 'Norsk', 5), (10, 'Samfunnsfag', 4),
(11, 'Matematikk', 2), (11, 'Kroppsøving', 4),
(12, 'Naturfag', 5), (12, 'Engelsk', 5),
(13, 'Matematikk', 5), (13, 'Norsk', 5), (13, 'Historie', 4),
(14, 'Matematikk', 4), (14, 'Engelsk', 4),
(15, 'Norsk', 3), (15, 'Kroppsøving', 5),
(16, 'Matematikk', 6), (16, 'Naturfag', 6), (16, 'Samfunnsfag', 6),
(17, 'Engelsk', 3), (17, 'Matematikk', 3);
```

Legg merke til at elevene med id 18, 19 og 20 (Frida, William og Sara) bevisst ikke har fått noen karakterer ennå - det bruker vi til å vise forskjellen på `INNER JOIN` og `LEFT JOIN`:

```sql
-- INNER JOIN - bare elever som faktisk har minst én karakter
SELECT elever.navn, karakterer.fag, karakterer.karakter
FROM elever
INNER JOIN karakterer ON elever.id = karakterer.elev_id;

-- LEFT JOIN - ALLE elever, også de uten karakterer (fag/karakter blir NULL for disse)
SELECT elever.navn, karakterer.fag, karakterer.karakter
FROM elever
LEFT JOIN karakterer ON elever.id = karakterer.elev_id
ORDER BY elever.navn;
```

Kjør begge og sammenlign resultatet: med `INNER JOIN` forsvinner Frida, William og Sara helt fra listen, fordi de ikke har noen match i `karakterer`. Med `LEFT JOIN` er de fortsatt med, men med `NULL` i `fag`- og `karakter`-kolonnene.

### Underspørringer (subquery)

```sql
-- Elever med karaktersnitt over 4
SELECT elever.navn, AVG(karakterer.karakter) AS snitt
FROM elever
INNER JOIN karakterer ON elever.id = karakterer.elev_id
GROUP BY elever.id, elever.navn
HAVING AVG(karakterer.karakter) > 4;

-- Eldste elev(er) - en underspørring inni WHERE
-- (merk at flere kan stå igjen samtidig hvis flere er like gamle)
SELECT * FROM elever
WHERE alder = (SELECT MAX(alder) FROM elever);

-- Elever som ennå ikke har fått registrert noen karakterer
SELECT navn FROM elever
WHERE id NOT IN (SELECT elev_id FROM karakterer);
```

`HAVING` er som `WHERE`, men brukes for å filtrere *etter* at `GROUP BY` har regnet ut aggregeringen - `WHERE` kan ikke bruke `AVG(...)` direkte.

---

## UPDATE - endre data som finnes fra før

```sql
-- Oppdater alderen til én elev (f.eks. etter bursdag)
UPDATE elever SET alder = 18 WHERE navn = 'Ali Reza';

-- Flytt en elev opp ett klassetrinn
UPDATE elever SET klasse = 'VG3' WHERE navn = 'Emma Larsen';

-- Oppdater flere kolonner i samme kommando
UPDATE elever SET alder = 17, klasse = 'VG2' WHERE id = 11;
```

**Viktig:** Glemmer du `WHERE`, oppdaterer du *alle* radene i tabellen - `UPDATE elever SET klasse = 'VG3';` ville satt alle 20 elevene til VG3. Skriv gjerne `WHERE`-betingelsen som en `SELECT` først, og sjekk at den treffer nøyaktig de radene du forventer, før du bytter om til `UPDATE`.

## ALTER TABLE - endre tabellstruktur

```sql
-- Legg til en ny kolonne for e-post
ALTER TABLE elever ADD COLUMN epost TEXT;

-- Eksisterende rader får automatisk NULL i den nye kolonnen
SELECT navn, epost FROM elever LIMIT 5;

-- Fyll inn e-post for en elev med UPDATE
UPDATE elever SET epost = 'ola.nordmann@skole.no' WHERE navn = 'Ola Nordmann';

-- Finn alle elever som fortsatt mangler registrert e-post
SELECT navn FROM elever WHERE epost IS NULL;

-- Fjerne en kolonne (krever SQLite 3.35.0 / mars 2021 eller nyere)
ALTER TABLE elever DROP COLUMN epost;
```

## DELETE - slette data

Dette er siste steg i CRUD, og siste gang vi bruker `elever`-tabellen i denne guiden - derfor kan du trygt kjøre eksemplene under uten at det ødelegger noe tidligere i guiden.

```sql
-- Slett én bestemt elev
DELETE FROM elever WHERE id = 20;

-- Slett alle elever fra en bestemt by
DELETE FROM elever WHERE by = 'Kristiansand';

-- Slett ALL data i tabellen (bruk med forsiktighet!)
DELETE FROM elever;
```

**Viktig:** Akkurat som med `UPDATE`, sletter `DELETE FROM elever;` uten `WHERE` *alle* radene. Test alltid betingelsen med en `SELECT` først, slik at du er sikker på at du sletter riktige rader - og ikke flere enn du mente å.

---

## Nyttige tips

- Bruk alltid **semikolon (;)** for å avslutte SQL-setninger
- **STORE BOKSTAVER** for SQL-nøkkelord er tradisjonelt, men ikke påkrevd
- Bruk **--** for kommentarer på én linje
- Test alltid **SELECT** med samme `WHERE`-betingelse før du kjører **UPDATE** eller **DELETE**
- Husk **WHERE** i `UPDATE`/`DELETE` for å unngå å påvirke hele tabellen
- Har du en database du er redd for å ødelegge? Kopier `.db`-filen først, så har du alltid en fungerende backup å gå tilbake til

## Øvingsoppgaver

Lag en ny database (eller en ny tabell i samme database) og løs oppgavene i rekkefølge. Prøv deg selv først - åpne løsningsforslaget bare hvis du står fast eller vil sammenligne.

### Oppgave 1

Lag en tabell `bøker` med `id`, `tittel`, `forfatter`, `år` og `sjanger`.

<details>
<summary>Løsningsforslag</summary>

```sql
CREATE TABLE bøker (
    id INTEGER PRIMARY KEY,
    tittel TEXT NOT NULL,
    forfatter TEXT NOT NULL,
    år INTEGER,
    sjanger TEXT
);
```

</details>

### Oppgave 2

Sett inn minst 8 bøker, med minst tre forskjellige forfattere.

<details>
<summary>Løsningsforslag</summary>

```sql
INSERT INTO bøker (tittel, forfatter, år, sjanger) VALUES
('Sult', 'Knut Hamsun', 1890, 'Roman'),
('Pan', 'Knut Hamsun', 1894, 'Roman'),
('Kristin Lavransdatter', 'Sigrid Undset', 1920, 'Roman'),
('Snømannen', 'Jo Nesbø', 2007, 'Krim'),
('Gjenferd', 'Jo Nesbø', 2011, 'Krim'),
('Sofies verden', 'Jostein Gaarder', 1991, 'Roman'),
('Doppler', 'Erlend Loe', 2004, 'Roman'),
('Naiv Super', 'Erlend Loe', 1996, 'Roman');
```

Legg merke til at den siste tittelen mangler punktum (den skal egentlig hete «Naiv. Super.») - det retter vi opp i oppgave 6.

</details>

### Oppgave 3

Finn alle bøker utgitt etter 2010.

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT * FROM bøker WHERE år > 2010;
```

</details>

### Oppgave 4

Sorter bøkene alfabetisk etter forfatter.

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT * FROM bøker ORDER BY forfatter;
```

</details>

### Oppgave 5

Tell hvor mange bøker hver forfatter har skrevet i tabellen.

<details>
<summary>Løsningsforslag</summary>

```sql
SELECT forfatter, COUNT(*) AS antall
FROM bøker
GROUP BY forfatter;
```

</details>

### Oppgave 6

Du oppdager at du har skrevet feil tittel på en av bøkene («Naiv Super» skal være «Naiv. Super.») - rett den opp med `UPDATE`.

<details>
<summary>Løsningsforslag</summary>

```sql
UPDATE bøker SET tittel = 'Naiv. Super.' WHERE tittel = 'Naiv Super';
```

</details>

### Oppgave 7

Legg til en kolonne `forlag` med `ALTER TABLE`.

<details>
<summary>Løsningsforslag</summary>

```sql
ALTER TABLE bøker ADD COLUMN forlag TEXT;
```

</details>

### Oppgave 8

Lag i tillegg en tabell `utlan` med `id`, `bok_id`, `laaner` og `dato`, sett inn noen utlån, og bruk `JOIN` for å finne hvilke bøker som er lånt ut (og til hvem).

<details>
<summary>Løsningsforslag</summary>

```sql
CREATE TABLE utlan (
    id INTEGER PRIMARY KEY,
    bok_id INTEGER NOT NULL,
    laaner TEXT NOT NULL,
    dato TEXT,
    FOREIGN KEY (bok_id) REFERENCES bøker(id)
);

INSERT INTO utlan (bok_id, laaner, dato) VALUES
(1, 'Petter', '2026-01-10'),
(4, 'Petter', '2026-02-03'),
(4, 'Live', '2026-03-15'),
(6, 'Live', '2026-04-01');

SELECT bøker.tittel, utlan.laaner, utlan.dato
FROM bøker
INNER JOIN utlan ON bøker.id = utlan.bok_id;
```

</details>

### Oppgave 9

Slett én bok du ikke lenger har registrert - husk `WHERE`!

<details>
<summary>Løsningsforslag</summary>

```sql
-- Sjekk først at betingelsen treffer riktig bok
SELECT * FROM bøker WHERE id = 2;

-- Slett den
DELETE FROM bøker WHERE id = 2;
```

</details>
