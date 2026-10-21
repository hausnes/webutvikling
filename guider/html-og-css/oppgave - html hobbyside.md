# Oppgave: Lag en nettside om hobbyen din

Du skal lage en liten nettside på **to sider** om en hobby eller interesse du har. Det kan være hva som helst: fotball, gaming, strikking, fiske, musikk, matlaging, hest, sjakk, K-pop, klatring, en favorittserie ...

Siden skal bare bruke **HTML**. CSS kommer i neste runde, og da skal du bygge videre på denne siden. Det betyr at jo ryddigere HTML-en din er nå, jo lettere blir det å gjøre siden fin senere.

Står du fast, finner du forklaring og eksempler i [HTML for nybegynnere](guide%20-%20html.md).

---

## Kom i gang

1. Lag en mappe som heter `hobbyside`, og en undermappe inni den som heter `bilder`.
2. Åpne mappa `hobbyside` i VS Code (**File → Open Folder**).
3. Lag fila `index.html`. Skriv `!` og trykk Tab for å få grunnmalen.
4. Start Live Server (**Go Live** nede til høyre).
5. Lag den andre siden senere, når forsiden er godt i gang.

Mappa skal se slik ut når du er ferdig:

```
hobbyside/
├── index.html          ← forsiden
├── side2.html          ← gi den et navn som passer, f.eks. utstyr.html
└── bilder/
    ├── bilde1.jpg      ← gi bildene navn som forteller hva de viser
    └── bilde2.jpg
```

Husk: små bokstaver, ingen mellomrom og ingen æøå i fil- og mappenavn.

---

## Steg 1: Planlegg på papir (10 minutter)

Før du skriver kode, tegn en skisse av forsiden. Tegn boksene for:
- toppen (`header`) med tittel og meny (`nav`)
- hovedinnholdet (`main`) delt opp i minst tre seksjoner (`section`)
- bunnen (`footer`)

Skriv inn i hver boks hva som skal stå der: overskrift, tekst, liste, bilde, tabell.

Gjør det samme for side 2, men enklere.

Skissen er et kart over DOM-en din. Det er mye lettere å skrive koden når du vet hvor alt skal.

---

## Steg 2: Krav til siden

Bruk listene under som sjekkliste. Kryss av etter hvert.

### Grunnmal og struktur (begge sidene)

- [ ] Grunnmalen er med (`<!DOCTYPE html>`, `html`, `head`, `body`).
- [ ] `lang="no"` på `html`-elementet.
- [ ] En `title` som forteller hva siden handler om. De to sidene har hver sin tittel.
- [ ] Siden er delt opp med `header`, `nav`, `main` og `footer`.
- [ ] `header`, `nav` og `footer` er like på begge sidene.

### Tekst

- [ ] Nøyaktig **én** `h1` per side.
- [ ] Hver `section` starter med en `h2`.
- [ ] Minst ett sted med `h3` som underoverskrift inni en `h2`-seksjon.
- [ ] Minst **fem** avsnitt (`p`) med tekst du har skrevet selv. Ingen `lorem` i det ferdige resultatet!
- [ ] Minst én `strong` og én `em`, brukt der de gir mening.

### Forsiden (`index.html`)

- [ ] Minst **tre** `section`-er inni `main`, hver med sin egen `id`.
- [ ] Menyen i `nav` er en liste (`ul` med `li` og `a`).
- [ ] Menyen har lenker til hver seksjon på forsiden (`href="#..."`) og en lenke til side 2.

### Side 2

- [ ] Har det samme `header`, `nav` og `footer` som forsiden.
- [ ] Menyen har en lenke tilbake til forsiden.
- [ ] Har eget innhold i `main`, med minst én `section`. Forslag: utstyr, historien til hobbyen, favoritter, om meg, ordliste.

### Lister

- [ ] Minst én punktliste (`ul`) i innholdet (menyen teller ikke).
- [ ] Minst én nummerert liste (`ol`) der rekkefølgen betyr noe, for eksempel steg-for-steg, topp 5 eller en oppskrift.

### Lenker

- [ ] Minst **to** lenker til andre nettsider, som åpnes i ny fane (`target="_blank"`).
- [ ] Lenketeksten forteller hvor lenken går (ikke «klikk her»).
- [ ] En `mailto:`-lenke i `footer`. Du kan bruke en oppdiktet adresse.

### Bilder

- [ ] Minst **tre** bilder til sammen på de to sidene.
- [ ] Alle bildene ligger i mappa `bilder`.
- [ ] Alle bildene har en god `alt`-tekst som beskriver hva bildet viser.
- [ ] Minst ett bilde ligger i `figure` med en `figcaption`.
- [ ] Bildene har `width` så de ikke blir for store.
- [ ] Bildene er dine egne, eller hentet fra et nettsted med gratis bilder (for eksempel [Unsplash](https://unsplash.com) eller [Pixabay](https://pixabay.com)). Skriv i `footer` hvor du har hentet bildene fra.

### Video fra YouTube

- [ ] Én YouTube-video bygget inn med `iframe`, inni en `section`. Gå til videoen, klikk **Del → Bygg inn** og kopier koden.
- [ ] Videoen passer til hobbyen, og det står et avsnitt (`p`) ved siden av som forteller hva videoen viser.
- [ ] `title` på `iframe` er endret fra `"YouTube video player"` til en tekst som beskriver videoen.
- [ ] `frameborder="0"` er fjernet. Validatoren regner det som en feil.

### Tabell

- [ ] Én tabell med `caption`, `thead`, `tbody`, `th` og `td`.
- [ ] Tabellen har minst **tre** kolonner og **tre** rader med data.
- [ ] Innholdet passer i en tabell, for eksempel resultater, statistikk, priser, sammenligning av utstyr eller en treningsplan.

### `id` og kommentarer

- [ ] Ingen `id` er brukt mer enn én gang på samme side.
- [ ] Minst **tre** kommentarer som deler opp koden, for eksempel `<!-- ===== MENY ===== -->`.

### Ryddig kode

- [ ] Riktig innrykk overalt. Bruk *Format Document* (Shift + Option/Alt + F).
- [ ] Alle elementer er lukket i riktig rekkefølge.
- [ ] **Ingen CSS:** ingen `style`-attributter, ingen `<style>`-tagg, ingen `<font>`, `<center>` eller lignende.
- [ ] Ingen `<br>` brukt for å lage luft.

---

## Steg 3: Test og valider

1. Klikk på **alle** lenkene i menyen på begge sidene. Kommer du dit du skal?
2. Sjekk at alle bildene vises, og at videoen spiller.
3. Høyreklikk på siden og velg **Inspiser**. Åpne treet i **Elements**-fanen. Ser det ut som skissen din?
4. Lim inn koden fra **begge** sidene i [validator.w3.org](https://validator.w3.org/#validate_by_input) og rett opp alle feil.

- [ ] Alle lenker virker.
- [ ] Alle bilder vises.
- [ ] Videoen spiller.
- [ ] Ingen feil i validatoren på `index.html`.
- [ ] Ingen feil i validatoren på side 2.

---

## Ekstra (for deg som vil mer)

Disse er ikke krav, men gjør gjerne en eller flere:

- ⭐ En liste inni en liste (for eksempel utstyr delt i kategorier).
- ⭐ Et sitat med `blockquote`, gjerne fra en kjent person innen hobbyen.
- ⭐ En `aside` med en faktaboks eller «Visste du?».
- ⭐⭐ En «Ofte stilte spørsmål»-del med `details` og `summary`. Søk det opp på W3Schools eller MDN.
- ⭐⭐ En tredje side, med samme meny som de andre.
- ⭐⭐⭐ Et kontaktskjema med `form`, `label`, `input`, `textarea` og `button`. Hver `label` skal være koblet til feltet sitt med `for` og `id`.
- ⭐⭐⭐ Lenker fra side 2 rett til en bestemt seksjon på forsiden, for eksempel `index.html#utstyr`.

---

## Levering

Lever hele mappa `hobbyside` (med `index.html`, side 2 og mappa `bilder`) slik læreren din har sagt. Pakk den gjerne som en zip-fil. Sjekk at bildene er med. Det er en vanlig feil at bare HTML-filene blir levert.

Ta godt vare på mappa. Du skal bruke den igjen når vi lærer CSS.
