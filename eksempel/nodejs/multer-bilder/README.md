# Multer-bilder: opplasting av fjellbilder i Node.js

Denne appen viser hvordan du kan:

1. hente ut fjell fra en database,
2. vise bilder som hører til et valgt fjell,
3. laste opp ett nytt bilde om gangen via nettsiden.

## Hva du lærer

- hvordan et HTML-skjema sender bildefiler med multipart/form-data,
- hvordan multer tar imot og lagrer bildefiler,
- hvordan vi lagrer metadata i SQLite (filsti, navn, alt-tekst, fjell-id),
- hvordan frontend og backend samarbeider gjennom API-ruter.

## Teknologi i prosjektet

- Express: webserver og API.
- Multer: håndterer filopplasting.
- better-sqlite3: lokal SQLite-database.
- Vanlig HTML/CSS/JS i public-mappen.

## Mappestruktur (forenklet)

```text
multer-bilder/
	app.js
	package.json
	fjellbilder.db            (opprettes automatisk ved kjøring)
	public/
		index.html
		index.js
		index.css
		uploads/                (her lagres opplastede filer)
```

## Kom i gang

### 1) Installer avhengigheter

Kjør i prosjektmappen:

```bash
npm install
```

### 2) Start serveren

```bash
node app.js
```

Hvis alt er ok, får du en melding i terminalen om at serveren kjører på port 3000.

### 3) Åpne appen i nettleseren

Gå til:

```text
http://localhost:3000
```

## Slik fungerer flyten i appen

### Steg A: Serveren starter

Når appen starter i app.js skjer dette:

1. databasen åpnes (fjellbilder.db),
2. tabellene fjell og bilde opprettes hvis de ikke finnes,
3. eksempeldata legges inn hvis fjell-tabellen er tom,
4. Express serverer alt i public som statiske filer,
5. multer settes opp til å lagre filer i public/uploads.

### Steg B: Frontend henter fjell

I index.js kjøres en fetch mot GET /fjell.
Resultatet brukes til å fylle dropdown-lista i index.html.

### Steg C: Bruker velger fjell

Når eleven velger et fjell i dropdown:

1. frontend kaller GET /fjell/:id/bilder,
2. backend henter alle bilder med riktig fjellid fra tabellen bilde,
3. frontend viser bildene i siden.

### Steg D: Bruker laster opp bilde

Når skjema sendes inn:

1. frontend lager FormData fra skjemaet,
2. valgt fjell-id hentes fra dropdown,
3. frontend sender POST /fjell/:id/bilder,
4. multer lagrer selve bildefilen i public/uploads,
5. backend lagrer metadata i databasen (sti, navn, alternativtekst, fjellid),
6. frontend henter bildelista på nytt og viser oppdatert innhold.

## API-ruter i prosjektet

### GET /fjell

Returnerer alle fjell.

Eksempelrespons:

```json
[
	{
		"id": 1,
		"navn": "Nesheimshorgi",
		"beskrivelse": "Flottaste utsikta over Granvinsvatnet.",
		"hoyde": 1134
	}
]
```

### GET /fjell/:id/bilder

Returnerer alle bilder for ett fjell.

Eksempelrespons:

```json
[
	{
		"id": 7,
		"sti": "uploads/1742400000000-123456789.jpg",
		"navn": "mitt-bilde.jpg",
		"alternativtekst": "Utsikt fra toppen",
		"fjellid": 1
	}
]
```

### POST /fjell/:id/bilder

Tar imot ett bilde i feltet bilde + valgfri alternativtekst.

- Content-Type: multipart/form-data
- Felter:
	- bilde (fil, påkrevd)
	- alternativtekst (tekst, valgfritt)

Ved suksess returneres en JSON-melding.

## Hvorfor vi lagrer både fil og database-rad

Bildefilen alene er ikke nok. Vi trenger også informasjon om:

- hvilket fjell bildet tilhører,
- hva bildet heter,
- alternativtekst for tilgjengelighet,
- hvor filen ligger.

Derfor:

- filen lagres i public/uploads,
- metadata lagres i tabellen bilde.

## Oppsummering

- frontend velger fjell og sender fil,
- multer lagrer filen,
- SQLite lagrer metadata,
- frontend henter og viser bilder på nytt.