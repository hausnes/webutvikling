# Eksempel: Fjellturer

Meny:
- [Planlegging](#planlegging)
- [Eksempel på datamodell](#eksempel-på-datamodell)
- [Lage databasen](#lage-databasen)
- [Oppgaver og løsningsforslag: SQL (AKA spørringer mot databasen)](#oppgaver-og-l%C3%B8sningsforslag-sql-aka-sp%C3%B8rringer-mot-databasen)
- [Lage en webapplikasjon](#lage-en-webapplikasjon)
  - [Initialisere et nytt Node-prosjekt](#initialisere-et-nytt-node-prosjekt)
  - [Installere nødvendige avhengigheter](#installere-n%C3%B8dvendige-avhengigheter)
  - [Lage en enkel Express-server](#lage-en-enkel-express-server)
  - [Frontend-applikasjon: Vise alle fjellene](#frontend-applikasjon-vise-alle-fjellene)
  - [Frontend-applikasjon: Vise fjellturer for en gitt person](#frontend-applikasjon-vise-fjellturer-for-en-gitt-person)
  - [Stilsetting](#stilsetting)
- [Videre arbeid](#videre-arbeid)

## Planlegging

Prosjektbeskrivelse: En venn av deg har kommet på en idè til en app, der folk kan registrere fjelltopper de går på gjennom året. Vennen har derimot ikke peiling på hva som kreves for å kunne lagre denne informasjonen, og ber deg om å hjelpe til med planlegging av "backend". I første omgang skal du altså lage en datamodell, og forklare den.

Etter et møte med vennen din, sitter du igjen med en liste med krav: 
- alle data er tilknyttet en person
- registrere fjell/fjelltopp
- registrere områder, som Jotunheimen, Hardanger, Bergen, Lofoten, Vossafjella, Femundsmarka etc. med tilhørende - informasjon om disse
- registrere tidspunkt for turen
- registrere hvor lang tid turen tok 
- registrere en beskrivelse/oppsummering av turen 
- legge ved en eller flere bilder

Kommentarer:
- Når det gjelder område, som du blir bedt om å ha med, så er altså tanken at du kan lage noen typiske turområder eller regioner, ikke ferdigdefinerte fylker eller kommuner.
- En person kan gå mange turer til samme fjell.
- En fjelltopp kan bli besøkt av mange personer.
- Ta dine egne forutsetninger der det er aktuelt, og du mener det mangler informasjon. Skriv ned disse forutsetningene, og utvid gjerne datamodellen - og etter hvert databasen.

Lag datamodellen, og forhold deg til normaliseringsreglene.

## Eksempel på datamodell

<details>

<summary>Se løsningsforslag (etter du har forsøkt selv)</summary>

![datamodell](fjelltur-datamodell.png)

</details>

NB: Kommentarene er ikke grundige nok til å forklare alle deler av modellen, men er eksempel på hvordan du kan tenke når du skal gjøre dette.

NB2: Her kan man bare gå et fjell per tur, og det kan ikke gå flere personer på samme tur. Dette er for å gjøre det enklere å lage datamodellen, og senere databasen, men det er ikke nødvendigvis slik det må være i en virkelig applikasjon. Det er helt greit å utvide datamodellen, og gjøre den mer kompleks, hvis du ønsker det. Det viktigste er at du forstår hvordan de forskjellige delene henger sammen, og at du kan forklare det.

## Lage databasen

Bruk SQLite3, eller andre verktøy du er komfortabel med, for å lage databasen basert på datamodellen du har laget.

Legg også inn testdata, slik at du har noe å jobbe med når du skal lage spørringer og senere en webapplikasjon.

Lettvint løsning:
- Se [fjelltur.db](fjelltur.db) for en ferdig database som du kan bruke, og som inneholder testdata. Du kan åpne denne i et verktøy du foretrekker, og se hvordan den er bygget opp, og hvilke data som ligger i den.

## Oppgaver og løsningsforslag: SQL (AKA spørringer mot databasen)

Øv deg på å "spørre" databasen, og hente ut den informasjonen du er interessert i.

Her kan du finne oppgaver og løsningsforslag for SQL-spørringer mot denne databasen: [SQL - oppgaver og løsningsforslag](./SQL%20-%20oppgaver%20og%20løsningsforslag.md)

## Lage en webapplikasjon

Vi skal nå lage en enkel webapplikasjon som kan hente data fra SQLite-databasen, og vise det i en nettleser. Vi skal bruke `Node.js` og `Express` for å lage en enkel server, og `better-sqlite3` for å håndtere SQLite-databasen.

Sluttproduktet kan se slik ut:

![Eksempel på frontend](../../../bilder/fjellturer-visning.png)

Her følger en steg-for-steg guide for hvordan du kan lage dette.

### Initialisere et nytt Node-prosjekt

Lag deg først en ny mappe for prosjektet, og flytt database-filen inn i denne.

Deretter initialiser du et nytt Node-prosjekt i denne mappen. Åpne terminalen, naviger til mappen, og kjør følgende kommando:

```bash
npm init -y
```

Kontroller at `package.json` har blitt opprettet, og at det inneholder en "main" som peker på `app.js` (eller hva du har valgt å kalle hovedfilen din).

Merk deg at du skal lagre all koden for webapplikasjonen din i denne mappen, og det er her du skal installere nødvendige avhengigheter. Følg med på instruksjonene, da du etter hvert må opprette nye mapper og filer for å kunne lage en fungerende applikasjon.

#### Feilsøkingstips

Dersom du får problemer med å kjøre `npm init`, eller andre kommandoer, så kan det være lurt å sjekke at du har Node.js og npm installert på maskinen din. Du kan sjekke dette ved å kjøre `node -v` og `npm -v` i terminalen. Hvis du ikke har disse installert, kan du laste ned og installere Node.js fra [nodejs.org](https://nodejs.org/).

Et annet problem som mange får er hvilke rettigheter du har til å kjøre script. Du kan tillate dette ved å skrive følgende kommando i terminalen (dersom du bruker PowerShell på Windows):
```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```  

Dette vil tillate deg å kjøre script som er laget på din egen maskin, men ikke script som er lastet ned fra internett, uten at du har godkjent det først.

### Installere nødvendige avhengigheter

Fortsatt fra terminalen; kjør følgende kommando for å installere Express, better-sqlite3 og CORS:

```bash
npm install express better-sqlite3 cors
```

Kontroller at `package.json` har blitt oppdatert med de nye avhengighetene, og at det har blitt opprettet en `node_modules`-mappe med disse pakkene.

Tenk etter hva du har gjort. Hva er Express? Hva er better-sqlite3? Hva er CORS?

### Ikke last opp node_modules til GitHub

Det er vanlig praksis å ikke laste opp `node_modules`-mappen til GitHub, da denne kan være veldig stor, og den uansett inneholder filer som kan gjenopprettes ved å kjøre `npm install` basert på `package.json`. For å unngå at `node_modules` blir lastet opp, kan du opprette en `.gitignore`-fil i rotmappen av prosjektet ditt, og legge til følgende linje i denne filen:

```
node_modules/
```

Dette vil fortelle Git at den skal ignorere `node_modules`-mappen, og ikke laste den opp til GitHub. Kontroller at `.gitignore`-filen er opprettet, og at den inneholder denne linjen.

### Lage en enkel Express-server

Vi lager en enkel Express-server som kan håndtere forespørsler og hente data fra SQLite-databasen.

Startkode:

```javascript
// Server-bit, setter opp en Express-app
const express = require('express');
const app = express();

const PORT = 3000;

// Databasen
const Database = require('better-sqlite3');
const db = new Database('fjelltur.db');

// CORS-middleware for å tillate forespørsler fra andre domener
const cors = require('cors');
app.use(cors());

// Eksempel på en rute som henter alle fjell, beskrivelse, høydene og bilde deres
app.get('/api/fjell_info', (req, res) => {
    const rows = db.prepare('SELECT fjellnavn, hoyde, beskrivelse, foto FROM fjell').all();
    res.json(rows);
});

// Åpner en viss port på serveren, og starter serveren
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});
```

Du starter serveren ved å kjøre `node app.js` i terminalen.

Kontroller at serveren starter uten feil, at du kan nå `http://localhost:3000/api/fjell_info` i nettleseren, og se dataene fra databasen. Hvilket format får du dataene i? Hvordan kan du bruke dette i en frontend-applikasjon senere?

## Frontend-applikasjon: Vise alle fjellene

Vi skal nå bruke `fetch` for å hente data fra API-et ditt, og vise det i en enkel frontend-applikasjon.

Vi må utvide `app.js` for å servere statiske filer, slik at vi kan ha en HTML-fil og tilhørende JavaScript og CSS. Legg til den følgende linjen i `app.js`:

```javascript
// Middleware for å servere statiske filer fra "public" mappen
app.use(express.static('public'));
```

Opprett en mappe som heter `public`, og lag tre filer her:
- `index.html`
- `index.js`
- `index.css`

Koble disse filene sammen.

I `index.html` kan du lage en enkel struktur for å vise dataene, og inkludere `index.js` og `index.css`. For eksempel:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fjell</title>
    <script src="index.js" defer></script>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <!-- Fylles ut av JS -->
</body>
</html>
```

I `index.js` kan du bruke `fetch` for å hente data fra API-et ditt, og vise det i nettleseren. NB: Koden nedenfor skriver bare ut dataene i konsollen, du må selv lage HTML-elementer og legge dataene inn i disse for å vise det på siden.

```javascript
async function fetchData() {
    const response = await fetch('http://localhost:3000/api/fjell_info');
    const data = await response.json();
    console.log(data);
    
    // Her kan du gjøre noe med dataen (vise det frem)
}

fetchData();
```

<details>
<summary>Løsningsforslag for å vise dataene i nettleseren, og ikke bare i konsollen (trykk for å vise)</summary>

```javascript
    for (let fjell of data) {
        let fjellDiv = document.createElement('div');
        fjellDiv.classList.add('fjell');
        fjellDiv.innerHTML = `
            <h3>${fjell.fjellnavn}</h3>
            <p>Høyde: ${fjell.hoyde} meter</p>
            <p>Beskrivelse: ${fjell.beskrivelse}</p>
            <img src="/bilder/${fjell.foto}" alt="${fjell.fjellnavn}">
        `;
        document.body.appendChild(fjellDiv);
    }
```
</details>

Du kan se all koden for dette i [`public`-mappen](/public/), og du kan også se hvordan jeg har gjort det i CSS for å style det litt.

## Frontend-applikasjon: Vise fjellturer for en gitt person

Nå skal vi lage en dropdown-meny som lar oss velge en person, og når vi har valgt en person, så skal vi hente ut alle fjellturene til den personen, og vise det i nettleseren.

Her deler vi problemet opp i flere deler:
1. Lage en rute i Express som henter ut alle personer, og deretter bruke dette for å fylle dropdown-menyen.
2. Lage en rute i Express som henter ut alle fjellturene til en gitt person, basert på brukernavn, og returnerer dette som JSON.
3. Lage en event listener på dropdown-menyen, som henter ut den valgte personen, og deretter gjør et API-kall for å hente ut fjellturene til denne personen, og viser det i nettleseren.

### Hente ut alle personer og fylle dropdown-menyen

Legg til følgende rute i `app.js`:

```javascript
// Eksempel på en rute som henter alle brukernavnene til alle personene i databasen
app.get('/api/personer_alle', (req, res) => {
    const rows = db.prepare('SELECT brukernavn FROM person').all();
    res.json(rows);
});
```

Merk at vi her bare henter ut `brukernavn`-kolonnen, og ikke andre kolonner som for eksempel `fornavn` eller `etternavn`. Dette er fordi vi i dette eksempelet bare trenger brukernavnene for å kunne hente ut fjellturene til en person senere. Dersom du ønsker å vise fornavn og etternavn i dropdown-menyen, så kan du endre SQL-spørringen til å hente ut disse kolonnene også, og returnere det som JSON.

Deretter lager vi klar HTML-koden i en fil vi kaller `eks-fjellturer-for-person.html`, som inneholder en dropdown-meny for å velge person, og en container for å vise fjellturene til den valgte personen. Denne filen legger du i `public`-mappen.:

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="eks-fjellturer-for-person.js" defer></script>
    <link rel="stylesheet" href="eks-fjellturer-for-person.css">
</head>
<body>
    <!-- Venstre panel: personvalg -->
    <div id="sidebar">
        <h2>Velg person</h2>
        <select id="personDropdown" title="Personvalg">
            <option value="">Velg en person</option>
        </select>
    </div>

    <!-- Høyre panel: fjellturer for valgt person, fylles ut av JS -->
    <div id="fjellturerContainer"></div>
</body>
</html>
```

Det siste steget i denne delen er å fylle ut dropdown-menyen med brukernavnene til alle personene i databasen. Dette gjør vi i den tilkoblede filen `eks-fjellturer-for-person.js`:

```javascript
// Fyller ut en dropdown (select) med  brukernavnene på alle personene i databasen
async function hentPersoner() {
    const response = await fetch('/api/personer');
    const personer = await response.json();
    const dropdown = document.getElementById('personDropdown');
    
    for (const person of personer) {
        const option = document.createElement('option');
        option.value = person.brukernavn;
        option.textContent = person.brukernavn;
        dropdown.appendChild(option);   
    }
}
document.addEventListener('DOMContentLoaded', hentPersoner);
```

Kontroller at dropdown-menyen fylles ut med brukernavnene til alle personene i databasen når du åpner `eks-fjellturer-for-person.html` i nettleseren.

### Hente ut alle turene til en gitt person

Nå når dropdown-menyen er fylt ut, så skal vi lage en rute i Express som kan hente ut alle fjellturene til en gitt person, basert på brukernavn. Dette gjør vi ved å bruke URL-parametere i Express.

Legg til følgende rute i `app.js`:

```javascript
app.get('/api/fjellturer/:brukernavn', (req, res) => {
    const brukernavn = req.params.brukernavn;
    if (!brukernavn) return res.status(400).json({ error: 'Mangler brukernavn' });

    const rows = db.prepare(`
        SELECT fjell.fjellnavn
        FROM person
        JOIN fjelltur ON person.brukernavn = fjelltur.brukernavn
        JOIN fjell ON fjelltur.fjell_id = fjell.fjell_id
        WHERE person.brukernavn = ?
    `).all(brukernavn);

    res.json(rows);
});
```

Ruten over tar inn et `brukernavn` som en URL-parameter, og bruker dette for å hente ut alle fjellene som denne personen har gått på.

Det du nettopp gjorde oppleves kanskje litt vanskelig, men tenk på alternativet, der du måtte lage en ny rute for hver person du vil hente ut fjellturene til, og hardkode navnet på personen i SQL-spørringen. Det ville vært en særs tungvint løsning, og det er derfor vi bruker URL-parametere (som `:brukernavn` i ruten) for å gjøre det mer fleksibelt.

```javascript
// Eksempel om å hente alle fjellene som en gitt person har gått
// Et alternativ som er en veldig dårlig løsning, fordi vi hardkoder navnet på personen i SQL-spørringen,
// og da må vi lage en ny rute for hver person vi vil hente ut fjellene til
app.get('/api/fjellturar_hausnes', (req, res) => {
    const rows = db.prepare(`
        SELECT fjell.fjellnavn 
        FROM person 
        JOIN fjelltur ON person.brukernavn = fjelltur.brukernavn 
        JOIN fjell ON fjelltur.fjell_id = fjell.fjell_id 
        WHERE person.brukernavn = 'hausnes'`).all();
    res.json(rows);
});
```

Når ruten er på plass i `app.js`, så kan du teste den ved å åpne `http://localhost:3000/api/fjellturer/hausnes` i nettleseren, og se at du får ut alle fjellene som personen med brukernavn "hausnes" har gått på.

For å faktisk bruke denne ruten i frontend-applikasjonen, så må du lage en event listener på dropdown-menyen, som henter ut den valgte personen, og deretter gjør et API-kall for å hente ut fjellturene til denne personen, og viser det i nettleseren.

HTML-siden har du allerede laget, og den inneholder en dropdown-meny med id `personDropdown`, og en container med id `fjellturerContainer` der vi skal vise fjellturene til den valgte personen.

I filen `eks-fjellturer-for-person.js` skal du nå **legge til** følgende:

```javascript
// Når en person er valgt, henter og viser alle fjellturene til den personen
document.getElementById('personDropdown').addEventListener('change', async function() {
    const brukernavn = this.value;
    console.log(`Valgt person: ${brukernavn}`);
    if (brukernavn) {
        const response = await fetch(`/api/fjellturer/${encodeURIComponent(brukernavn)}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const fjellturer = await response.json();
        
        // Sjekker at vi har fått data tilbake, og viser det i konsollen
        console.log(fjellturer); // Her kan du erstatte dette med kode for å vise fjellturene i UI

        // Skriver turene til HTML
        // Først viser vi en overskrift med hvilken person vi viser turene for
        const turerDiv = document.getElementById('fjellturerContainer');
        turerDiv.innerHTML = `<h2>Fjellturer for ${brukernavn}</h2>`;
        // Så viser vi en liste med alle fjellturene
        const ul = document.createElement('ul');
        for (const tur of fjellturer) {
            const li = document.createElement('li');
            li.textContent = tur.fjellnavn;
            ul.appendChild(li);
        }
        turerDiv.appendChild(ul);
    }
});
```

Som du kan se i koden over, så har vi laget en event listener på dropdown-menyen, som lytter etter endringer (når en person blir valgt). Når en person blir valgt, så henter vi ut brukernavnet til den valgte personen, og gjør et API-kall til ruten vi laget tidligere for å hente ut fjellturene til denne personen. Når vi får dataene tilbake, så viser vi det i konsollen, og deretter skriver vi det ut i HTML ved å lage en overskrift med navnet på personen, og en liste med alle fjellturene.

### Stilsetting

Du kan se CSS-filen `eks-fjellturer-for-person.css` [her](./public/) for et eksempel på hvordan du kan style dette, og gjøre det mer visuelt tiltalende.

<details>
<summary>Kjapp visning av CSS (trykk for å vise)</summary>

```css
/* Deler designet inn i to deler, med select-elementet til venstre, og resultatene til høyre. */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    font-family: 'Segoe UI', Arial, sans-serif;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    color: #e0e0e0;
}

/* Venstre panel – personvalg */
#sidebar {
    width: 220px;
    min-height: 100vh;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

#sidebar h2 {
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #a0c4ff;
    margin-bottom: 8px;
}

#personDropdown {
    width: 100%;
    padding: 10px 12px;
    font-size: 15px;
    background: rgba(255, 255, 255, 0.08);
    color: #e0e0e0;
    border: 1px solid rgba(160, 196, 255, 0.4);
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23a0c4ff' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    transition: border-color 0.2s, background-color 0.2s;
}

#personDropdown:hover,
#personDropdown:focus {
    border-color: #a0c4ff;
    background-color: rgba(160, 196, 255, 0.12);
}

#personDropdown option {
    background: #16213e;
    color: #e0e0e0;
}

/* Høyre panel – resultater */
#fjellturerContainer {
    flex: 1;
    padding: 40px;
    overflow-y: auto;
}

#fjellturerContainer h2 {
    font-size: 22px;
    font-weight: 600;
    color: #a0c4ff;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(160, 196, 255, 0.3);
}

#fjellturerContainer ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#fjellturerContainer li {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 14px 18px;
    font-size: 16px;
    transition: background 0.2s, border-color 0.2s;
}

#fjellturerContainer li:hover {
    background: rgba(160, 196, 255, 0.1);
    border-color: rgba(160, 196, 255, 0.4);
}

```
</details>

## Videre arbeid

### Lage flere ruter/API-endepunkter

Lag flere ruter som henter ut forskjellige typer data, der du kan få inspirasjon fra SQL-oppgavene du har løst tidligere.

### La brukeren legge til nye fjellturer

Lag en form i frontend-applikasjonen, der brukeren kan legge inn informasjon om en ny fjelltur, og deretter sende dette til serveren via et POST-kall. På serveren må du lage en rute som håndterer dette POST-kallet, og legger den nye fjellturen inn i databasen.

Dette vil bli lagt til i en senere del av denne guiden.

### Stilsetting

Jobb videre med å få "ting" til å se bedre ut. Det er mange måter å gjøre dette på, og det er helt opp til deg hvordan du vil style det. Bruk gjerne bilder og ikoner for å gjøre det mer interessant.

Se løsningsforslag for hvordan jeg har gjort det [her](./public/), men merk at det ikke er et gjennomgående tema i stilsettingen så langt. Det er mer ment som et eksempel på hvordan du kan style det, og ikke en ferdig løsning. Det viktigste er at du har det gøy med å lage dette, og at du lærer noe underveis.