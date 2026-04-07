# Vurdering - Node.js (2ITKA, vår 2026)

Du skal i perioden fremover jobbe med et prosjekt primært i Node.js. Det vil si at du skal lage en webapplikasjon som har en backend i Node.js, og en frontend som kommuniserer med backend via API-kall (ruter). Prosjektet skal ha en database, og du skal bruke Express som rammeverk for webserveren.

Du kan i tillegg bruke andre, åpne API-er i prosjektet ditt, dersom det er relevant for temaet du har valgt. Dette for å blant annet supplere data til prosjektet ditt, eksempelvis værdata, postnummerdata, eller lignende.

**De som skal gå videre med utvikling** som sitt hovedfokus videre, bør vurdere å bruke følgende alternativer for database og frontend, da dette er teknologier som er mye brukt i bransjen, og som det er gode ressurser for å lære seg:
- Database: [MariaDB](../../guider/databaser/mariadb-eksempel/), PostgreSQL eller alternativt NOSQL-løsning (f.eks. MongoDB)
- Frontend: React, Vue eller Angular
- TypeScript i hele eller deler av prosjektet, for å få bedre type-sikkerhet og mer moderne JavaScript-funksjonalitet.
- ...

## Tema

Du kan komme på en egen idé, eller velge ett av følgende tema for ditt prosjekt:
- **Fjellturer**: Du kan jobbe videre på prosjektet vi har jobbet med i det siste, om fjell og mulige turforslag, der brukere kan legge til nye turer, og se informasjon om eksisterende turer. Koden så langt ligger i [fjelltur-eksempelet](../../guider/databaser/fjelltur-eksempel/). Du kan tilpasse denne, eller lage din helt egen variant/vri.
- **Chatteapp**: Du kan lage en chatteapp, der du kan basere deg på en [guide i Node.js](../../guider/guide%20-%20nodejs%20prosjekt.md), der du for eksempel forbedrer produktet, legger til nye funksjoner eller lager en helt egen vri.
- **Bloggplattform**: En enkel bloggplattform hvor brukere kan opprette, redigere og slette innlegg.
- **Arbeidsfordeling hjemme**: En app som viser arbeidsfordelingen på arbeidsoppgaver hjemme, slik at alle i husstanden kan se og oppdatere sine oppgaver - og ikke lenger krangle om hvem som faktisk gjør noe hjemme.
- **Matvarepriser** eller lignende: Hjelp brukeren å finne de beste prisene på matvarer ved å lage en app som henter inn data fra ulike matvarebutikker. Se [kassal.app](https://kassal.app/api) for inspirasjon.
- **Hjelp til kollektivtransport**: En app som hjelper brukeren å finne kollektivtransportmuligheter, med informasjon om ruter, tider og priser. Du kan for eksempel bruke åpne API-er som [Entur](https://data.entur.no/).
- **Reiseplanlegger**: En app som hjelper brukeren å planlegge reiser, med informasjon om destinasjoner, overnatting, og aktiviteter. Du kan for eksempel bruke åpne API-er for å hente inn data om vær, attraksjoner, eller lignende.
- **Bok- eller filmdatabase**: En app hvor brukere kan søke etter bøker eller filmer, legge til anmeldelser, og se informasjon om ulike titler. Du kan for eksempel bruke åpne API-er som [Open Library](https://openlibrary.org/developers/api) for bøker, eller [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api) for filmer.
- **Fritt valgt oppgave etter godkjenning av lærer**: Dersom du har en annen idé til et prosjekt, kan du gjerne jobbe med det, så lenge det oppfyller kravene som er beskrevet nedenfor. Du må i så fall få godkjent prosjektidéen av lærer på forhånd.

## Krav

- Prosjektet skal bruke `Express` som rammeverk for webserveren. Dersom du ønsker å bruke et annet rammeverk, må dette godkjennes av lærer på forhånd.
- Prosjektet skal bruke en database (f.eks. SQLite3, MariaDB eller PostgreSQL).
    - Du skal lage en database-modell som passer til ditt prosjekt. Databasen må typisk inneholde minst fire tabeller med relasjoner mellom disse.
- Prosjektet skal tilby funksjonalitet for CRUD (create, read, update, delete), med ruter/API-endepunkter som håndterer dette.
    - Du KAN bruke andre, eksterne API-er i tillegg, for å supplere data til prosjektet ditt, eksempelvis værdata, postnummerdata, eller lignende. Dette er ikke et krav.
- Prosjektet skal ha en frontend som kommuniserer med backend via API-kall (ruter). Frontend skal ta hensyn til universell utforming, og i utgangspunktet bruke vanlig HTML og CSS. Spør lærer dersom du ønsker å bruke et frontend-rammeverk (f.eks. React, Vue, Angular), da dette må godkjennes på forhånd.
- Koden skal til en hver tid ligge oppdatert i et Git-repositorium (GitHub), der du bruker meningsfulle commit-meldinger. Du bruker brancher for å utvikle nye funksjoner, og for å kunne gjøre endringer uten å ødelegge fungerende kode.

### Dokumentasjon

- **Kravspesifikasjon**: En beskrivelse av hva prosjektet skal gjøre, og hvilke funksjoner det skal ha. Dette skal være en detaljert beskrivelse av funksjonaliteten. Kravspesifikasjonen skal være i Markdown-formatet (`.md`). Som utgangspunkt tar du egne idèer, sammen med eventuelle "fokusgrupper" med medeelever, lærer, foreldre eller andre potensielle brukere, for å finne ut hva som er viktig å ha med i prosjektet ditt. Kravspesifikasjonen skal være så detaljert at en annen utvikler kunne implementert prosjektet basert på denne.
- Koden skal være godt dokumentert, både i selve koden og i egne dokumentasjonsfiler. Dokumentasjonsfilene skal være i Markdown-formatet (`.md`) (slik denne oppgaveteksten er).
    - **Kodedokumentasjon**: Forklaringer og kommentarer i koden.
    - **Utviklingsdokumentasjon** (system- og arkitektur, oppbygging): Beskrivelse av hvordan prosjektet er bygget opp, valg som er gjort, og eventuelle utfordringer. Minimumskrav:
        - Teknologi som er brukt (f.eks. rammeverk, database, frontend-teknologi).
        - Datamodell, samt beskrivelse av databasemodellen (tabeller, relasjoner) og hvordan logikken fungerer.
        - Beskrivelse av API-endepunkter (ruter), og hva de gjør.
        - Beskrivelse av frontend (hvilke sider, hva de gjør, og hvordan de kommuniserer med backend).

## Kompetansemål

- vurdere fordeler og ulemper ved ulike programmeringsspråk og velge og anvende relevante programmeringsspråk og algoritmer i eget arbeid
- lage og begrunne funksjonelle krav til en IT-løsning basert på **behovskartlegging**
- vurdere brukergrensesnitt til IT-tjenester og designe tjenester som er tilpasset brukernes behov
- gjøre rede for hensikten med teknisk dokumentasjon og utarbeide teknisk dokumentasjon for IT-løsninger
- beskrive og anvende relevante versjonskontrollsystemer i utviklingsprosjekter
- designe og implementere IT-tjenester med innebygget personvern
- analysere digitale trusler, verdier og sårbarheter og utvikle applikasjoner med innebygget sikkerhet
- anvende relevant testmiljø og utføre testing tilpasset IT-løsningen som utvikles
- modellere og opprette databaser for informasjonsflyt i systemer
- beskrive ulike datalagringsmodeller og metoder for å hente ut og sette inn bestemte data fra databaser som brukes av andre systemer

## Vurderingskriterier

Kriterier for høy måloppnåelse

1. Teknisk utførelse og "best practice"
    - **Arkitektur**: Koden er modulær og logisk organisert (f.eks. ved bruk av ruter-filer i Express, og separasjon mellom logikk og database-spørringer). Bruker variabler, løkker, funksjoner, valgsetninger og andre programmeringskonsepter på en hensiktsmessig måte.
        - Du kan bryte et prosjekt ned i mindre deler, og få en 
    - **Sikkerhet og robusthet**: Applikasjonen håndterer feilsituasjoner på en god måte (feilhåndtering med if/else eller try/catch og meningsfulle feilmeldinger til brukeren). Du har implementert tiltak for å sikre applikasjonen og data til brukerne, som for eksempel input-validering, beskyttelse mot SQL-injeksjon, og håndtering av sensitive data i henhold til GDPR. 
    - **Dokumentasjon**: Koden og dokumentasjonen er selvforklarende med god navngivning, er ryddig og lett å finne frem i, og ellers er krav til mengden dokumentasjon oppfylt. [Se eget punkt om dokumentasjon](#dokumentasjon).
    - **Datamodell**: Databasen har en gjennomtenkt datamodell med minst fire tabeller, og relasjoner som reflekterer virkelige sammenhenger i dataene. Du kan forklare datamodellen og begrunne designvalg i dokumentasjonen, med referanse til teori om datamodellering (f.eks. normalisering).
    - **Versjonskontroll (Git)**: Koden er kontinuerlig oppdatert i et Git-repositorium, med meningsfulle commit-meldinger som reflekterer endringene som er gjort. Bruk av branching for å mer kontrollert utvikle nye funksjoner, og for å kunne gjøre endringer uten å ødelegge fungerende kode.

2. Brukervennlighet og tilgjengelighet (UU)
- Grensesnitt: Løsningen er intuitiv og estetisk gjennomført (gjennomgående stil).
- Universell utforming: Du har implementert konkrete UU-tiltak, som korrekt bruk av semantisk HTML (overskrifter, main, nav etc.), god fargekontrast og tastaturnavigasjon.
- Responsivitet: Applikasjonen fungerer sømløst på ulike skjermstørrelser.

3. Problemløsning og refleksjon
    - Selvstendig feilsøking: Du kan gjøre rede for utfordringer du møtte underveis, og vise hvordan du systematisk brukte verktøy (som terminalen, DevTools eller logger) for å finne løsninger.
    - Etikk og Lovverk: Du viser god forståelse for GDPR ved å forklare hvilke data som lagres, hvorfor de lagres, og hvordan du har minimert datainnsamlingen (dataminimering).
    - Faglig refleksjon: I fagsamtalen kan du knytte teori til praksis og begrunne teknologivalgene dine opp mot alternative løsninger.

Kort oppsummert: Forståelse av teknologiene som er brukt i prosjektet, demonstrert gjennom fagsamtale og dokumentasjon.

Vurderingen har en munnlig-praktisk form, der du presenterer prosjektet ditt og forklarer valg du har gjort under utviklingen, samt gjør endringer i koden, og legger til endringer basert på tilbakemelding fra lærer.

## Bonuspoeng

Du hjelper andre elever i timene, enten ved å svare på spørsmål, gi tilbakemeldinger på kode eller bidra til andres prosjekter.

## Tilgjengelige timer

Nedenfor er en oversikt over tilgjengelige timer per uke:

| Uke  | Dager | Timer |
|------|------|-------|
| 13   | Idèutvikling - kravspesifikasjon, onsdag 25. mars og fredag 27. mars | 4 timer      |
| 14   | Påskeferie     | ...      |
| 15   | Onsdag 8. april, (fredag 10. april)     | 3 timer (2 timer går til brukerstøttekurs)     |
| 16   | (**fagsamtale 1**) Mandag 13. april, onsdag 15. april, fredag 17. april     | 8-10 timer (dere får bruke brukerstøttetimene)      |
| 17   | Onsdag 22. april, fredag 24. april     | 5 timer      |
| 18   | (**fagsamtale 2**) Hovedfunksjonalitet skal være ferdig, men kan jobbe videre - mandag 27. april, onsdag 29. april     | 4 timer      |
| 19   | Tverrfaglig prøveeksamen     | ...      |
| 20   | ...     | ...      |
| 21   | ...     | ...      |

Totalt: 24 timer

> **Merk**: Det er viktig at du planlegger bruken av disse timene godt, slik at du får mest mulig ut av dem i forhold til prosjektets fremdrift og kvalitet.

## Delmål, innleveringer

NB: Denne delen blir oppdatert etter hvert.

### Fagsamtale 1:

Fagsamtale om kravspesifikasjon og idèutvikling, samt databasemodell og API-design, i uke 16. Dette er en del av vurderingen, og du må kunne gjøre rede for og begrunne de valgene du har gjort i forhold til kravspesifikasjon, databasemodell, API-design og GDPR.

### Fagsamtale 2:

Avsluttende fagsamtale om prosjektet, der du skal kunne gjøre rede for og begrunne de teknologiske valgene du har gjort, samt forklare hvordan prosjektet er bygget opp, og hvordan det fungerer. Du skal også kunne gjøre endringer i koden basert på tilbakemelding fra lærer, og forklare hva du gjør og hvorfor.

Her kan det også være et fokus på GDPR og UU.