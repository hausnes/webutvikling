# Ressurser for webutvikling
Dette er et forsøk på å samle guider, oppgaver, løsningsforslag og eksempler for deg som forsøker å lære deg HTML, CSS og JS, samt databaser og SQL. Det er i tillegg en del materiale for Node JS og serversiden. Stadige endringer på gang.

## 📖 Les **guider** til utvalgte konsepter

### HTML og CSS
- **HTML** for nybegynnere: tagger, lenker, bilder, lister, tabeller, struktur, Emmet og mer. [Les guide](./guider/html-og-css/guide%20-%20html.md)
- **CSS** for nybegynnere: selektorer, farger, boksmodellen, flexbox, grid og nyttige eksempler som sentrering og menyer. [Les guide](./guider/html-og-css/guide%20-%20css.md)
- **Musikkspiller**, steg for steg: bygg en musikkspiller med flexbox og grid, og lær å tenke i «bokser inni bokser». Med skjermbilder underveis. [Les guide](./guider/html-og-css/musikkspiller-eksempel/README.md)
- **Responsiv nettside**, steg for steg: få siden til å fungere på både mobil og PC med `flex-wrap`, `auto-fit`, `clamp()`, media queries og container queries. Med skjermbilder underveis. [Les guide](./guider/html-og-css/responsiv-nettside/README.md)

**Øv deg med spill** – interaktive sider der du løser små oppgaver med ekte CSS-kode:
- **Flexbox Froggy**: hjelp froskene til riktig vannlilje ved å bruke flexbox. Du lærer å plassere og fordele elementer på en rad eller i en kolonne med `justify-content`, `align-items`, `flex-direction`, `flex-wrap` og mer. [Spill Flexbox Froggy](https://flexboxfroggy.com/)
- **Grid Garden**: vann gulrøttene og bli kvitt ugresset ved å bruke CSS grid. Du lærer å plassere elementer i rader og kolonner med `grid-column`, `grid-row`, `grid-template-columns` og `grid-area`. [Spill Grid Garden](https://cssgridgarden.com/)
- **CSS Diner**: velg riktig mat fra bordet ved å skrive riktig selektor. Du lærer å treffe akkurat de HTML-elementene du vil style, med selektorer for tagger, klasser, id-er, barn og søsken, samt pseudoklasser som `:first-child` og `:nth-child()`. [Spill CSS Diner](https://flukeout.github.io/)

### Javascript
- **Ren JS med Node**, uten HTML og CSS: skriv små programmer i én fil og kjør dem i terminalen med `node`. Fint for å lære grunnleggende programmering før du kobler koden til en nettside. Hver runde har en guide og oppgaver med hint og løsningsforslag.
    - Runde 1: `console.log`, variabler, `if`/`else`, løkker og lister. [Les guide](./guider/introduksjonskurs-js/js-bare-node/js_runde_1.md) · [Oppgaver](./guider/introduksjonskurs-js/js-bare-node/js_runde_1_oppgaver.md)
    - Runde 2: funksjoner, parametere og `return`. [Les guide](./guider/introduksjonskurs-js/js-bare-node/js_runde_2_funksjoner.md) · [Oppgaver](./guider/introduksjonskurs-js/js-bare-node/js_runde_2_funksjoner_oppgaver.md)
    - Runde 3: objekter, arrays og løkker gjennom lister med objekter. [Les guide](./guider/introduksjonskurs-js/js-bare-node/js_runde_3_objekter_arrays.md) · [Oppgaver](./guider/introduksjonskurs-js/js-bare-node/js_runde_3_objekter_arrays_oppgaver.md)
- **JS i nettleseren**, med HTML og CSS: lær å bruke JS til å endre nettsider. Temaene er DOM, variabler, kontrollstrukturer, funksjoner, arrays og objekter, hendelser, skjemaer, henting av data med `fetch` og array-metoder som `filter`, `map` og `reduce`. [Les guide](./guider/introduksjonskurs-js/00-oversikt.md)
- **Oppgaver** i JS. [Se oppgaver](./oppgaver/oppgaver%20-%20js.md)

### Node JS
- Eksempelprosjekt **chatteapp**, med fokus på lesing fra, og skriving til, en database. [Les guide](./guider/guide%20-%20nodejs%20prosjekt.md)
- Eksempelprosjekt **spillsamling**, med fokus på å sende parameter med i URL, og å bygge en nettside dynamisk. [Les guide](./guider/guide%20-%20spillsamling%20dynamisk.md)
- Eksempelprosjekt **biler**, om innlogging, hashing, sessions og middleware. [Les guide](./guider/guide%20-%20session%20og%20middleware.md)
- Eksempelprosjekt **multer-bilder**, om opplasting av bilder, og hvordan frontend og backend samarbeider i dette. [Les guide](./eksempel/nodejs/multer-bilder/README.md)
- Eksempelprosjekt **socket.io, samarbeidsklikker**, om å sende og motta data i sanntid mellom flere klienter. [Les guide](./guider/socket-io-collab-clicker/)

### Github
- Hvordan sette opp GitHub, lage din egen nettside og publisere den slik at du (og andre) kan besøke den fra mobil, PC el.l.! [Les guide](./guider/github/guide%20-%20github%20og%20github%20desktop.md)
- Github, samarbeid og branches: Hvordan bidra til andres prosjekter, og hvordan andre kan bidra til dine prosjekter. Hvordan jobbe med "branches". [Les guide](./guider/github/github%20-%20bidra%20og%20f%C3%A5%20bidrag.md)
- Github og lisensiering: Hvilke regler gjelder, og brukes din kode for å trene opp KI-modeller?: [Les guide](./guider/github/guide%20-%20github%20og%20lisensiering.md)

### Databaser og SQL
- **Datamodellering**, med gjennomgang av begreper, og eksempler på hvordan man kan modellere ulike tjenester. [Les guide](./guider/databaser/datamodellering/datamodellering.md)
- **Fjellturer**, et eksempel "fra start til slutt". Fra datamodell til database, og en enkel webapplikasjon som bruker denne databasen. [Les guide](./guider/databaser/fjelltur-eksempel/README.md)
    - "Innebygd" i denne guiden er det også en egen del tilknyttet SQL, med oppgaver og løsningsforslag. [Les guide](./guider/databaser/fjelltur-eksempel/SQL%20-%20oppgaver%20og%20l%C3%B8sningsforslag.md)
- **Teori:** 
    - Databaser og begreper. [Les guide](./guider/databaser/guide%20-%20begreper%20rundt%20databaser.md)
    - Hvorfor ikke bruke mange-til-mange-forhold (N:M) i databaseene våre? [Les guide](./guider/databaser/guide%20-%20mange-til-mange%20hvorfor%20ikke.md)
- **Spørringer**, SQL (`S`tructured `Q`uery `L`anguage): 
    - Teori og eksempel: [Les guide](./guider/databaser/guide%20-%20sql.md)
    - Elevlaget ressurs for å lære seg SQL (interaktive oppgaver): [SQL-oppgavebrett](https://sqlbrett.netlify.app/)
    - Ressurs for å lære seg SQL: [SQLZOO](https://sqlzoo.net/)
- **Oppgaver** i datamodellering og SQL: [Les oppgaver](./oppgaver/oppgaver%20-%20sql.md)
- **MariaDB**: Hvordan sette opp og bruke MariaDB, en populær database, som alternativ til SQLite. [Les guide](./guider/databaser/mariadb-eksempel/README.md)
- **Vennskap**, et eksempel på en selvrefererende relasjon, og hvordan modellere dette i en database. [Les guide](./guider/databaser/vennskap/README.md)

### GDPR
- En kort guide til hvordan elever som lager en webapp kan følge GDPR, og hva de må tenke på. [Les guide](./guider/GDPR.md)

### TypeScript
- Introduksjon til TypeScript, med eksempler og oppgaver. [Les guide](./guider/guide%20-%20typescript.md)
- **Fjellturer med TypeScript**: den samme fjelltur-appen, bygget steg for steg med TypeScript på både serveren og i nettleseren. Guiden forklarer hva som er annerledes fra vanlig JavaScript. Du trenger ikke ha gjort JS-versjonen først. [Les guide](./guider/databaser/fjelltur-eksempel-typescript/README.md)
- **Fjellturer med TypeScript (fullpakke)**: viser hvordan TypeScript brukes i et typisk profesjonelt prosjekt. Typene lages automatisk fra databaseskjemaet med Drizzle ORM, serveren og nettleseren deler de samme typene, og data som kommer inn valideres med Zod. [Les guide](./guider/databaser/fjelltur-eksempel-typescript-fullpakke/README.md)

### Docker
- Introduksjon til Docker, med eksempler og oppgaver. [Les guide](./guider/guide%20-%20docker.md)

### Pico React
- Introduksjon til Pico React, et lettvekts React-bibliotek. [Les guide](./guider/guide%20-%20pico%20react.md)

## ✅ Se **oppgaver** (og løsningsforslag til disse) for:
- [HTML og CSS](./oppgaver/oppgaver%20-%20html%20og%20css.md)
- [Javascript](./oppgaver/oppgaver%20-%20js.md)
- [NodeJS](./oppgaver/oppgaver%20-%20nodejs.md)
- [SQL](./oppgaver/oppgaver%20-%20sql.md)

## 🎓 Samling med vurderinger:

Her har vi samlet en del eksempler på prøver, vurderinger og eksamensoppgaver innen HTML, CSS, JS og SQL.

[Prøver, vurderinger og eksamensoppgaver i HTML, CSS, JS og SQL](./vurdering/))

## 🎨 Design og prototyping av nettsider (og mer):
Det å planlegge hvordan nettsidene skal se ut kan gjøre arbeidet mye enklere når du skal skrive CSS-koden, da du blant annet vet hvordan du kan dele designet opp i "bokser", og plassere disse.
- Figma er et mye brukt program i bransjen, [praktisk guide: Figma 101](https://designlab.com/figma-101-course/introduction-to-figma)

## 🤓 Din egen personlige "eksaminator"
Lyst til å teste deg utover oppgavesamlingen her? Lyst på flere lignende oppgaver, men du kommer ikke på noe selv? Forsøk gjerne chatboten [Eksaminator i HTML, CSS og JS](https://ki.sikt.no/VN7M) som ligger hos Sikt KI, og krever innlogging via Feide.

## ❤️ Om ressursene og eventuelle bidrag 🔁
Innholdet her blir blant annet brukt på Amalie Skram VGS, i fag som konseptutvikling og programmering, utvikling og informasjonsteknologi.

Lyst til å bidra? `Send gjerne inn en pull request og 4!` Det er alltid kjekt med flere oppgaver, alternative løsningsforslag, nyttige ressurser m.m.