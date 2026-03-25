# Selvrefererende relasjoner (rekursive relasjoner)

Vi skal nå lage en database for å modellere vennskap. Siden en venn i bunn og grunn er en person, må vi modellere relasjonen mellom to rader i den samme tabellen. Dette kalles en selvrefererende relasjon (eller en rekursiv relasjon). Her er den mest ryddige måten å løse dette på i en relasjonsdatabase.

Siden vennskap vanligvis er en mange-til-mange-relasjon (én person kan ha mange venner, og én person kan være vennen til mange), trenger vi en mellomtabell. Vi kan kalle denne `Vennskap`. I stedet for å lagre navn eller e-post på nytt, lagrer vi bare ID-ene til de to personene som er involvert.

```sql
-- 1. Aktiver fremmednøkkel-støtte
PRAGMA foreign_keys = ON;

-- 2. Opprett Person-tabellen
CREATE TABLE Person (
    person_id INTEGER PRIMARY KEY AUTOINCREMENT,
    navn TEXT NOT NULL
);

-- 3. Opprett Vennskap-tabellen
CREATE TABLE Vennskap (
    person_id INTEGER,
    venn_id INTEGER,
    PRIMARY KEY (person_id, venn_id),
    FOREIGN KEY (person_id) REFERENCES Person(person_id) ON DELETE CASCADE,
    FOREIGN KEY (venn_id) REFERENCES Person(person_id) ON DELETE CASCADE
);
```

**Hvorfor bruke ON DELETE CASCADE?** Hvis du sletter en person fra Person-tabellen, vil SQLite automatisk slette alle vennskapene denne personen var involvert i. Uten dette ville du endt opp med "orphan rows" (rader som peker til ingenting) i Vennskap-tabellen.

Vi kan legge inn en del testdata for å se hvordan dette fungerer:

```sql  
-- Aktiver fremmednøkler først
PRAGMA foreign_keys = ON;

-- 1. Legg inn 10 personer
INSERT INTO Person (navn) VALUES ('Anders');
INSERT INTO Person (navn) VALUES ('Beate');
INSERT INTO Person (navn) VALUES ('Christian');
INSERT INTO Person (navn) VALUES ('Dorthe');
INSERT INTO Person (navn) VALUES ('Erik');
INSERT INTO Person (navn) VALUES ('Frida');
INSERT INTO Person (navn) VALUES ('Gunnar');
INSERT INTO Person (navn) VALUES ('Hanna');
INSERT INTO Person (navn) VALUES ('Ivar');
INSERT INTO Person (navn) VALUES ('Janne');

-- 2. Legg inn vennskap (person_id, venn_id)
-- Her antar vi at ID-ene ble generert fra 1 til 10
INSERT INTO Vennskap (person_id, venn_id) VALUES 
(1, 2), (1, 3), (1, 4), -- Anders er venn med Beate, Christian og Dorthe
(2, 1), (2, 5),         -- Beate er venn med Anders og Erik
(3, 1), (3, 6),         -- Christian er venn med Anders og Frida
(4, 1), (4, 7), (4, 8), -- Dorthe er venn med Anders, Gunnar og Hanna
(5, 2), (5, 9),         -- Erik er venn med Beate og Ivar
(6, 3), (6, 10),        -- Frida er venn med Christian og Janne
(7, 4),                 -- Gunnar er venn med Dorthe
(8, 4),                 -- Hanna er venn med Dorthe
(9, 5),                 -- Ivar er venn med Erik
(10, 6);                -- Janne er venn med Frida
```

## SQL-eksempel: Hvordan se alle vennene til en gitt person?

```sql
SELECT p.navn AS Venn_Navn
FROM Vennskap v
JOIN Person p ON v.venn_id = p.person_id
WHERE v.person_id = 1;
```
Dette vil vise alle vennene til personen med `person_id = 1` (Anders).

## SQL-eksempel: Hvordan se alle relasjoner?

```sql
SELECT 
    p1.navn AS Person, 
    p2.navn AS Er_Venn_Med
FROM Vennskap v
JOIN Person p1 ON v.person_id = p1.person_id
JOIN Person p2 ON v.venn_id = p2.person_id
ORDER BY p1.navn;
```

Alternativt, vi kan telle hvor mange venner hver person har:

```sql
SELECT p.navn, COUNT(v.venn_id) AS antall_venner
FROM Person p
LEFT JOIN Vennskap v ON p.person_id = v.person_id
GROUP BY p.person_id
ORDER BY antall_venner DESC;
```

## NB: Ting å tenke på.

Når du bruker en slik koblingstabell, må du ta stilling til om relasjonen er retningsbestemt eller symmetrisk:

- Symmetrisk (Urettet): Hvis Per er venn med Pål, er Pål automatisk venn med Per. I databasen kan du enten lagre dette som én rad (og alltid spørre etter begge kolonner), eller legge inn to rader: (Per, Pål) og (Pål, Per).

- Asymmetrisk (Rettet): Som på Instagram eller X/Twitter (følgere). At Per følger Pål betyr ikke at Pål følger Per. Her holder det med én rad: (Følger_ID, Følger_ID).