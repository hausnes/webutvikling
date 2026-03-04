# Barebones eksempel på MariaDB med Node.js og Express

Dette er et enkelt eksempel der vi lager en database i MariaDB, og deretter bruker Node.js og Express for å hente data fra databasen, og kontrollerer at vi får data tilbake i JSON-format.

## Forutsetninger

- Du må ha MariaDB installert og kjørende på din maskin. Last ned og installer MariaDB fra [MariaDBs offisielle nettside](https://mariadb.org/download/).
    - Noter at MariaDB ofte kommer med en grafisk brukergrensesnitt som HeidiSQL, som gjør det enklere å administrere databasen. Du kan bruke dette for å opprette databasen og tabellene, eller du kan gjøre det via kommandolinjen.
    - Noter deg brukernavn og passord for MariaDB, da du trenger dette for å koble til databasen fra Node.js-applikasjonen, og sørg for at MariaDB-serveren kjører - for eksempel ved å starte HeidiSQL og koble til serveren.
    - Noter deg også porten som MariaDB kjører på (standard er 3306), da du trenger dette for å koble til databasen fra Node.js-applikasjonen.
- Du må ha Node.js og npm installert. Last ned og installer Node.js fra [Node.js offisielle nettside](https://nodejs.org/).

## Oppsett

1. Opprett en database i MariaDB, enten manuelt ved å bruke HeidiSQL, eller ved å kjøre følgende SQL-kommandoer.

Lag en enkel database `chatdb`, deretter en tabell `chat`, der denne tabellen har tre kolonner: `id` (INT, AUTO_INCREMENT, PRIMARY KEY), `melding` (VARCHAR(255)), og `tidspunkt` (DATETIME).

```sql
CREATE DATABASE chatdb;
USE chatdb;
CREATE TABLE chat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    melding VARCHAR(255),
    tidspunkt DATETIME
);
```

2. Sett inn noen testdata i `chat`-tabellen, enten manuelt via HeidiSQL, eller ved å kjøre følgende SQL-kommandoer:

```sql
INSERT INTO chat (melding, tidspunkt) VALUES ('Hei, hvordan går det?', NOW());
INSERT INTO chat (melding, tidspunkt) VALUES ('Alt bra, takk!', NOW());
```

3. Se `app.js`-filen for hvordan du kobler til MariaDB og henter data fra `chat`-tabellen, og kjør deretter Node.js-applikasjonen ved å kjøre `node app.js` i terminalen.

NB: Husk å oppdatere databasekonfigurasjonen i `app.js`-filen med dine egne innstillinger (brukernavn, passord, database). Vi ville aldri hardkodet brukernavn og passord i en ekte applikasjon.