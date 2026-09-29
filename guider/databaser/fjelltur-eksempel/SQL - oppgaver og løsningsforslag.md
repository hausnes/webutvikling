# Eksempel på spørringer mot fjelltur-databasen

## Tips og hjelp til oppgavene

### Småtips

- Bruk alltid **semikolon (;)** for å avslutte SQL-setninger
- **STORE BOKSTAVER** for SQL-nøkkelord er tradisjonelt, men ikke påkrevd
- Bruk **--** for kommentarer på én linje
- Bruk **GROUP BY** for å gruppere resultater basert på et felt

### Forskjeller mellom JOIN-typer

NB: Når du kommer til oppgaver som begynner å bruke JOIN, LEFT JOIN, INNER JOIN og ev. andre varianter, så kan du komme tilbake til denne forklaringen:

1. `INNER JOIN` (og bare `JOIN`):

   I SQLite er `JOIN` og `INNER JOIN` det samme.

   Hva den gjør: Den henter bare rader der det finnes en match i begge tabellene.

   I ditt tilfelle: Hvis du har en person ("Visjo") som nettopp har registrert seg, men ikke har gått noen turer ennå, vil Visjo forsvinne helt fra resultatlisten. Hen blir ikke talt som 0; hen blir rett og slett ikke med i oversikten.

2. `LEFT JOIN` (eller `LEFT OUTER JOIN`):

   Hva den gjør: Den henter alle rader fra den venstre tabellen (person), uavhengig av om de har en match i den høyre tabellen (fjelltur).

   I ditt tilfelle: Hvis "Visjo" ikke har gått noen turer, vil hen likevel dukke opp i listen. Feltet for fjell_id vil være tomt (NULL), og COUNT vil telle dette som 0.

## Oppgave 1

Hent all informasjon om alle fjellene.

<details>

<summary>Løsningsforslag:</summary>

```sql
SELECT * FROM fjell;
```

</details>

## Oppgave 2

Hent all informasjon om et gitt fjell, for eksempel Fanaråken (fjell_id = 1).

<details>

<summary>Løsningsforslag:</summary>

```sql
SELECT * FROM fjell
WHERE fjell_id = 1;
```
</details>

## Oppgave 3

Hent bare fjellnavn og høyde for alle fjellene.

<details>

<summary>Løsningsforslag:</summary>

```sql
SELECT fjellnavn, hoyde FROM fjell;
```

</details>

## Oppgave 4

Hent bare fjellnavn og høyde for alle fjellene som er høyere enn 2000 meter.

<details>

<summary>Løsningsforslag:</summary>

```sql
SELECT fjellnavn, hoyde FROM fjell
WHERE hoyde > 2000;
```

</details>

## Oppgave 5

Hent fjellnavn, høyde og navn på område for alle fjell. NB: Her må du hente informasjon fra både fjell-tabellen og omrade-tabellen.

<details>

<summary>Løsningsforslag:</summary>

```sql
SELECT fjell.fjellnavn, fjell.hoyde, omraade.navn
FROM fjell
JOIN omraade ON fjell.omraade_id = omraade.id;
```

</details>

## Oppgave 6

Hent all informasjon om alle turer (fra fjelltur-tabellen).

<details>

<summary>Løsningsforslag:</summary>

```sql
SELECT * FROM fjelltur;
```

</details>

## Oppgave 7

Hent tidspunkt, varighet, beskrivelse, fjellnavn og høyde for alle turer.

<details>

<summary>Løsningsforslag:</summary>

```sql
SELECT fjelltur.tidspunkt, fjelltur.varighet, fjelltur.beskrivelse, fjell.fjellnavn, fjell.hoyde
FROM fjelltur
JOIN fjell ON fjelltur.fjell_id = fjell.fjell_id;
```

</details>

## Oppgave 8

Hent det samme som fra forrige oppgave, men bare for fjellturer til Fanaråken (fjell_id = 1).

<details>

<summary>Løsningsforslag:</summary>

```sql
SELECT fjelltur.tidspunkt, fjelltur.varighet, fjelltur.beskrivelse, fjell.fjellnavn, fjell.hoyde
FROM fjelltur
JOIN fjell on fjelltur.fjell_id = fjell.fjell_id
WHERE fjelltur.fjell_id = 1;
```

</details>

Husk at du kan lese mer om forskjellige JOIN-typer [øverst i dokumentet](#tips-og-hjelp-til-oppgavene).

## Oppgave 9

Tell hvor mange turer det har vært til Fanaråken (fjell_id = 1).

<details>

<summary>Løsningsforslag:</summary>

```sql
SELECT COUNT(*) AS antall_turer
FROM fjelltur
WHERE fjell_id = 1;
```

</details>

## Oppgave 10

Tell hvor mange turer hver person har gått. Vis fornavn og "antall_turer". NB: Antall turer er ikke et eget felt, så du må telle dette ved hjelp av en spørring.

<details>

<summary>Løsningsforslag:</summary>

```sql
SELECT person.fornavn, COUNT(fjelltur.fjell_id) AS antall_turer
FROM person
LEFT JOIN fjelltur ON person.brukernavn = fjelltur.brukernavn
GROUP BY person.brukernavn;
```

NB: Inne i COUNT kan du bruke et hvilket som helst felt fra den tabellen, altså eksempelvis **fjelltur_id** dersom det er mer logisk for deg.

</details>

Husk at du kan lese mer om forskjellige JOIN-typer [øverst i dokumentet](#tips-og-hjelp-til-oppgavene).

## Oppgave 11

Tell hvor mange turer en gitt person har gått. Du kan bruke brukernavnet "hausnes" for å hente dette.

<details>

<summary>Løsningsforslag:</summary>

```sql
SELECT person.fornavn, COUNT(fjelltur.fjell_id) AS antall_turer
FROM person
LEFT JOIN fjelltur ON person.brukernavn = fjelltur.brukernavn
WHERE person.brukernavn = 'hausnes';
```

</details>

Husk at du kan lese mer om forskjellige JOIN-typer [øverst i dokumentet](#tips-og-hjelp-til-oppgavene).

## Oppgave 12

Vis en liste over alle fjellene som en gitt person har gått. Du kan for eksempel hente alle fjellene som "Jo Bjørnar" har gått.

<details>

<summary>Løsningsforslag:</summary>

```sql
SELECT fjell.fjellnavn
FROM person
JOIN fjelltur ON person.brukernavn = fjelltur.brukernavn
JOIN fjell ON fjelltur.fjell_id = fjell.fjell_id
WHERE person.fornavn = 'Jo Bjørnar';
```

</details>

Du kan eventuelt hente denne informasjonen basert på noe annet enn fornavn. Hvorfor kan det være viktig, tror du? Hva burde du velge? Korriger koden til å gjøre dette.

Husk at du kan lese mer om forskjellige JOIN-typer [øverst i dokumentet](#tips-og-hjelp-til-oppgavene).

## Oppgave 13

Vis all informasjon unntatt brukernavnet om en gitt person.

<details>

<summary>Løsningsforslag:</summary>

```sql
SELECT person.fornavn, person.etternavn, person.epost
FROM person
WHERE brukernavn = 'hausnes';
```

</details>

# Avanserte oppgaver

## Bonusoppgave 1

Tell hvor mange turer det har vært totalt i 2025 for seg, og 2026 for seg. **NB: Avansert!**

<details>

<summary>Løsningsforslag:</summary>

```sql
SELECT strftime('%Y', fjelltur.tidspunkt) AS aar, COUNT(*) AS antall_turer
FROM fjelltur
GROUP BY aar;
```

NB: Du kan også løse dette med to separate spørringer (én med `WHERE strftime('%Y', tidspunkt) = '2025'` og én for `'2026'`, begge med `COUNT(*)`), men løsningen over viser bedre hvordan `GROUP BY` kan brukes til å telle per gruppe i én og samme spørring.

</details>

## Bonusoppgave 2

Hent bare fjellnavn og høyde for alle fjellene som har akkurat samme høyde. **NB: Avansert!**

<details>

<summary>Løsningsforslag:</summary>

```sql
SELECT fjellnavn, hoyde FROM fjell
WHERE hoyde IN (
    SELECT hoyde FROM fjell
    GROUP BY hoyde
    HAVING COUNT(*) > 1
);
```

</details>