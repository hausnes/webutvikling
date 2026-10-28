# CSS for nybegynnere

I [HTML-guiden](guide%20-%20html.md) bestemte vi **hva** som skal være på nettsiden. Med CSS (*Cascading Style Sheets*) bestemmer vi hvordan siden skal **se ut**: farger, skrifttyper, avstander og hvor ting skal plasseres.

Alle eksemplene kan du prøve selv. Lim dem inn i filene dine, lagre, og se resultatet i nettleseren med Live Server. Endre gjerne på verdiene og se hva som skjer. Det er den beste måten å lære CSS på.

Du kan også [se noen av eksemplene vi går gjennom i fellesskap i timene](../../eksempel/css/).

Innhold:
1. [Koble CSS til HTML](#1-koble-css-til-html)
2. [Grunnleggende syntaks](#2-grunnleggende-syntaks)
3. [Selektorer: hva skal styles?](#3-selektorer-hva-skal-styles)
4. [Farger og tekst](#4-farger-og-tekst)
5. [Enheter: px, %, rem og vh](#5-enheter-px--rem-og-vh)
6. [Boksmodellen: margin, border og padding](#6-boksmodellen-margin-border-og-padding)
7. [Flexbox](#7-flexbox)
8. [Grid](#8-grid)
9. [Konkrete, nyttige eksempler](#9-konkrete-nyttige-eksempler)
    - [Sentrere et element horisontalt og vertikalt](#sentrere-et-element-horisontalt-og-vertikalt)
    - [En enkel meny med flexbox](#en-enkel-meny-med-flexbox)
    - [Meny med logo til venstre og lenker til høyre](#meny-med-logo-til-venstre-og-lenker-til-høyre)
    - [Kort i et rutenett med grid](#kort-i-et-rutenett-med-grid)
10. [Tilpass siden til mobil: media queries](#10-tilpass-siden-til-mobil-media-queries)
11. [Finn feil med utviklerverktøyene](#11-finn-feil-med-utviklerverktøyene)
12. [Videre](#videre)

---

## 1. Koble CSS til HTML

CSS skriver vi i en egen fil, for eksempel `style.css`, som ligger i samme mappe som `index.html`:

```
min-nettside/
├── index.html
└── style.css
```

Så kobler vi CSS-filen til HTML-filen med en `<link>`-tagg inne i `<head>`:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Min nettside</title>
    <link rel="stylesheet" href="style.css">
</head>
```

> **Tips:** Skjer det ingenting når du endrer CSS-en? Sjekk at filnavnet i `href` er **nøyaktig** likt navnet på CSS-filen, og at du har lagret begge filene.

---

## 2. Grunnleggende syntaks

CSS består av **regler**. En regel har en **selektor** (hva som skal styles) og en eller flere **deklarasjoner** (hvordan det skal styles). En deklarasjon består av en **egenskap** og en **verdi**.

```css
h1 {
    color: navy;
    font-size: 32px;
}
```

- `h1` er selektoren. Regelen gjelder alle `<h1>`-elementer.
- `color` og `font-size` er egenskaper.
- `navy` og `32px` er verdier.

Husk:
- Deklarasjonene står inne i krøllparenteser `{ }`.
- Det er kolon `:` mellom egenskap og verdi.
- Hver deklarasjon avsluttes med semikolon `;`. Glemmer du semikolonet, slutter ofte resten av regelen å virke.

Kommentarer skriver du slik:

```css
/* Dette er en kommentar. Nettleseren ignorerer den. */
```

### Hvem vinner?

Hvis to regler sier noe ulikt om det samme elementet, vinner som hovedregel den som står **sist** i filen:

```css
p {
    color: blue;
}

p {
    color: red; /* Avsnittene blir røde */
}
```

Unntaket er når én selektor er mer *spesifikk* enn den andre. En id slår en klasse, og en klasse slår et elementnavn. Mer om klasser og id-er i neste del.

---

## 3. Selektorer: hva skal styles?

### Element

Velger alle elementer av en bestemt type:

```css
p {
    line-height: 1.5;
}
```

### Klasse

En klasse kan brukes på så mange elementer du vil. I HTML skriver du `class="..."`, og i CSS bruker du punktum foran navnet:

```html
<a href="kontakt.html" class="knapp">Kontakt oss</a>
```

```css
.knapp {
    background-color: green;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
}
```

**Klasser er det du kommer til å bruke mest.**

### Id

En id skal bare brukes på **ett** element på siden. I CSS bruker du `#` foran navnet:

```html
<header id="toppfelt">...</header>
```

```css
#toppfelt {
    text-align: center;
}
```

### Flere selektorer samtidig

Skill med komma for å gi flere selektorer samme stil:

```css
h1, h2, h3 {
    font-family: Georgia, serif;
}
```

### Elementer inni andre elementer

Med mellomrom mellom selektorene velger du elementer som ligger **inni** andre elementer:

```css
nav a {
    color: white;
}
```

Denne regelen gjelder bare `<a>`-elementer som ligger inni et `<nav>`-element. Andre lenker på siden påvirkes ikke.

### Når musen holdes over: `:hover`

`:hover` er en *pseudo-klasse*. Den gjelder bare mens musepekeren er over elementet:

```css
a:hover {
    color: red;
}
```

---

## 4. Farger og tekst

### Farger

Du kan skrive farger på flere måter:

```css
h1 {
    color: tomato;                 /* Navn på fargen */
    background-color: #1e3a5f;     /* Heksadesimal kode */
    border-color: rgb(30, 58, 95); /* Rødt, grønt, blått (0–255) */
}
```

- `color` er tekstfargen.
- `background-color` er bakgrunnsfargen.

> **Tips:** I VS Code får du en liten fargeboks ved siden av fargeverdien. Hold musen over den for å få opp en fargevelger. Sørg for god kontrast mellom tekst og bakgrunn, så teksten blir lett å lese.

### Tekst

```css
body {
    font-family: Arial, Helvetica, sans-serif; /* Skrifttype, med reserver */
    font-size: 18px;                           /* Størrelse */
    line-height: 1.5;                          /* Linjeavstand */
}

h1 {
    font-weight: bold;    /* Tykkelse: normal eller bold */
    text-align: center;   /* left, center eller right */
}

a {
    text-decoration: none; /* Fjerner streken under lenker */
}
```

Står `font-family` på `body`, arver alle elementene inni `body` skrifttypen. Da slipper du å skrive den på hvert element.

---

## 5. Enheter: px, %, rem og vh

| Enhet | Betydning | Eksempel |
|---|---|---|
| `px` | Piksler. En fast størrelse. | `border: 2px solid black;` |
| `%` | Prosent av forelder-elementet. | `width: 50%;` |
| `rem` | I forhold til standard skriftstørrelse (vanligvis 16px). `2rem` = 32px. | `font-size: 2rem;` |
| `vh` / `vw` | Prosent av høyden / bredden på nettleservinduet. | `min-height: 100vh;` |
| `fr` | En «andel» av ledig plass. Brukes i grid. | `grid-template-columns: 1fr 2fr;` |

Er du usikker, holder det lenge å bruke `px` og `%`.

---

## 6. Boksmodellen: margin, border og padding

Alle HTML-elementer er rektangulære bokser. Rundt innholdet i hver boks er det tre lag:

```
┌──────────────── margin ────────────────┐
│  ┌───────────── border ─────────────┐  │
│  │  ┌────────── padding ─────────┐  │  │
│  │  │                            │  │  │
│  │  │          innhold           │  │  │
│  │  │                            │  │  │
│  │  └────────────────────────────┘  │  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
```

- **padding**: luft *inni* boksen, mellom innholdet og kanten.
- **border**: kanten rundt boksen.
- **margin**: luft *utenfor* boksen, mellom denne boksen og andre bokser.

```css
.boks {
    width: 300px;
    padding: 20px;
    border: 2px solid darkred;
    margin: 20px;
    background-color: lightcoral;
}
```

### Ulike verdier på ulike sider

```css
.boks {
    padding: 10px;                 /* Alle fire sider */
    padding: 10px 20px;            /* Topp/bunn og venstre/høyre */
    padding: 10px 20px 30px 40px;  /* Topp, høyre, bunn, venstre (med klokka) */
    padding-top: 10px;             /* Bare én side */
}
```

Det samme gjelder for `margin`.

### Sentrere en boks horisontalt med margin

```css
main {
    max-width: 800px;
    margin: 0 auto; /* 0 oppe og nede, automatisk på sidene */
}
```

Dette er en vanlig måte å holde innholdet samlet midt på siden.

### Lim inn dette øverst i alle CSS-filer

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
}
```

- `*` velger alle elementer.
- `box-sizing: border-box` gjør at `padding` og `border` regnes med i bredden. Uten denne blir en boks med `width: 300px` og `padding: 20px` egentlig 340px bred, og det skaper mye forvirring.
- Nettleseren legger litt margin rundt `body` som standard. `margin: 0` fjerner den.

---

## 7. Flexbox

Flexbox brukes til å plassere elementer **på en rad** eller **i en kolonne**, for eksempel lenkene i en meny, eller å sentrere noe.

### Forelder og barn

Det viktigste å forstå med flexbox: Du skriver `display: flex` på **forelderen**, og så er det **barna** (elementene rett inni) som plasseres.

```html
<div class="beholder">
    <div class="boks">1</div>
    <div class="boks">2</div>
    <div class="boks">3</div>
</div>
```

```css
.beholder {
    display: flex;
    gap: 10px;              /* Avstand mellom boksene */
    background-color: #eee;
    padding: 10px;
}

.boks {
    background-color: steelblue;
    color: white;
    padding: 20px;
}
```

Boksene legger seg nå ved siden av hverandre på en rad, i stedet for under hverandre.

### Retning: `flex-direction`

```css
.beholder {
    display: flex;
    flex-direction: row;    /* Standard: på en rad, fra venstre mot høyre */
    flex-direction: column; /* I en kolonne, ovenfra og ned */
}
```

### To akser

Flexbox har en **hovedakse** og en **tverrakse**:

- Med `flex-direction: row` går hovedaksen **vannrett** (←→) og tverraksen **loddrett** (↑↓).
- Med `flex-direction: column` er det motsatt.

To egenskaper styrer plasseringen langs aksene:

| Egenskap | Styrer | Vanlige verdier |
|---|---|---|
| `justify-content` | Hovedaksen | `flex-start`, `center`, `flex-end`, `space-between`, `space-around` |
| `align-items` | Tverraksen | `stretch` (standard), `flex-start`, `center`, `flex-end` |

```css
.beholder {
    display: flex;
    justify-content: space-between; /* Første boks helt til venstre, siste helt til høyre */
    align-items: center;            /* Sentrert i høyden */
}
```

Slik fordeler `justify-content` tre bokser på en rad:

```
flex-start:     [1][2][3]
center:                  [1][2][3]
flex-end:                         [1][2][3]
space-between:  [1]         [2]        [3]
space-around:      [1]      [2]     [3]
```

### Bryte til ny linje: `flex-wrap`

Som standard presses alle barna inn på én linje, selv om det ikke er plass. Med `flex-wrap: wrap` får de lov til å gå videre på neste linje:

```css
.beholder {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
```

### Fylle ledig plass: `flex: 1`

Denne skriver du på **barnet**, ikke forelderen. Det betyr «ta så mye ledig plass du kan»:

```css
.boks {
    flex: 1; /* Alle boksene blir like brede og fyller hele raden */
}
```

### Øv med Flexbox Froggy

🐸 **[Flexbox Froggy](https://flexboxfroggy.com/)** er et spill der du bruker flexbox til å hjelpe frosker over på riktig vannlilje. Det har 24 nivåer, og du kan velge språk øverst til høyre. Spill gjennom det. Da sitter flexbox mye bedre!

---

## 8. Grid

Flexbox er laget for én retning om gangen (en rad *eller* en kolonne). Grid er laget for **rader og kolonner samtidig**, altså et rutenett. Grid passer godt til bildegallerier, kort med innhold og til layouten på hele siden.

### Et enkelt rutenett

Som med flexbox skriver du `display: grid` på **forelderen**:

```html
<div class="rutenett">
    <div class="boks">1</div>
    <div class="boks">2</div>
    <div class="boks">3</div>
    <div class="boks">4</div>
    <div class="boks">5</div>
    <div class="boks">6</div>
</div>
```

```css
.rutenett {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Tre like brede kolonner */
    gap: 10px;
}

.boks {
    background-color: steelblue;
    color: white;
    padding: 20px;
}
```

Resultat:

```
[ 1 ][ 2 ][ 3 ]
[ 4 ][ 5 ][ 6 ]
```

Du trenger ikke si hvor mange rader det skal være. Grid lager nye rader automatisk.

### Enheten `fr`

`fr` betyr en andel av den ledige plassen:

```css
grid-template-columns: 1fr 1fr 1fr;  /* Tre like kolonner */
grid-template-columns: 1fr 2fr;      /* Den andre kolonnen er dobbelt så bred som den første */
grid-template-columns: 200px 1fr;    /* Fast bredde til venstre, resten til høyre */
```

I stedet for å skrive `1fr` mange ganger kan du bruke `repeat()`:

```css
grid-template-columns: repeat(4, 1fr); /* Fire like kolonner */
```

### Et element over flere kolonner

Dette skriver du på **barnet**:

```css
.stor {
    grid-column: span 2; /* Bruker plassen til to kolonner */
}
```

### Rutenett som tilpasser seg skjermen

Denne linjen er verdt å huske. Den lager så mange kolonner som får plass, der hver kolonne er minst 200px bred:

```css
.rutenett {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}
```

På en bred skjerm får du kanskje fem kolonner. På mobilen får du én. Du trenger ingen media queries.

### Layout for hele siden med `grid-template-areas`

Med `grid-template-areas` kan du nesten «tegne» layouten:

```html
<body>
    <header>Topp</header>
    <nav>Meny</nav>
    <main>Innhold</main>
    <footer>Bunn</footer>
</body>
```

```css
body {
    margin: 0;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "nav    main"
        "footer footer";
}

header { grid-area: header; background-color: #333; color: white; }
nav    { grid-area: nav;    background-color: #ddd; }
main   { grid-area: main; }
footer { grid-area: footer; background-color: #333; color: white; }
```

Resultat:

```
┌───────────────────────────┐
│          header           │
├────────┬──────────────────┤
│  nav   │                  │
│        │      main        │
│        │                  │
├────────┴──────────────────┤
│          footer           │
└───────────────────────────┘
```

`grid-template-rows: auto 1fr auto` gjør at midtraden fyller den ledige høyden. Da ligger footeren alltid nederst, selv om det er lite innhold på siden.

### Øv med Grid Garden

🥕 **[Grid Garden](https://cssgridgarden.com/)** er et spill av de samme som laget Flexbox Froggy. Her bruker du grid til å vanne gulrøtter.

### Flexbox eller grid?

- **Flexbox:** én rad eller én kolonne. For eksempel en meny, knapper ved siden av hverandre eller å sentrere noe.
- **Grid:** rader og kolonner samtidig. For eksempel et galleri, kort eller layouten på hele siden.

Ofte bruker du begge på samme side: grid til den store layouten og flexbox til detaljene inni.

---

## 9. Konkrete, nyttige eksempler

### Sentrere et element horisontalt og vertikalt

En boks midt på skjermen, både i bredden og høyden:

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sentrert element</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <h1>Hei, verden!</h1>
        <p>Dette er et sentrert element.</p>
    </main>
</body>
</html>
```

```css
body {
    margin: 0;
    min-height: 100vh;       /* Minst like høy som nettleservinduet */
    display: flex;
    justify-content: center; /* Horisontal sentrering */
    align-items: center;     /* Vertikal sentrering */
}

main {
    width: 300px;
    padding: 20px;
    background-color: lightcoral;
    border: 2px solid darkred;
}
```

Uten `min-height: 100vh` er `body` bare så høy som innholdet, og da er det ingenting å sentrere i høyden.

Med grid blir det enda kortere:

```css
body {
    margin: 0;
    min-height: 100vh;
    display: grid;
    place-items: center; /* Sentrerer både vannrett og loddrett */
}
```

### En enkel meny med flexbox

```html
<nav>
    <a href="index.html">Hjem</a>
    <a href="om.html">Om oss</a>
    <a href="tjenester.html">Tjenester</a>
    <a href="kontakt.html">Kontakt</a>
</nav>
```

```css
nav {
    display: flex;
    justify-content: center;
    gap: 10px;
    background-color: #333;
    padding: 10px;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
}

nav a:hover {
    background-color: #555;
}
```

Prøv å bytte ut `justify-content: center` med `space-around` eller `flex-end` og se hva som skjer.

### Meny med logo til venstre og lenker til høyre

En veldig vanlig toppmeny. Her bruker vi flexbox to ganger: én gang på `header` og én gang på `nav`.

```html
<header>
    <a href="index.html" class="logo">Min side</a>
    <nav>
        <a href="index.html">Hjem</a>
        <a href="om.html">Om meg</a>
        <a href="kontakt.html">Kontakt</a>
    </nav>
</header>
```

```css
header {
    display: flex;
    justify-content: space-between; /* Logo til venstre, nav til høyre */
    align-items: center;
    background-color: #1e3a5f;
    padding: 10px 20px;
}

header a {
    color: white;
    text-decoration: none;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

nav {
    display: flex;
    gap: 20px;
}

nav a:hover {
    text-decoration: underline;
}
```

### Kort i et rutenett med grid

Kort brukes til alt fra produkter og prosjekter til bildegallerier. Rutenettet tilpasser seg skjermbredden av seg selv.

```html
<section class="kort-liste">
    <article class="kort">
        <img src="bilder/fjell.jpg" alt="Fjell i solnedgang">
        <h2>Fjelltur</h2>
        <p>Turen opp til toppen tok tre timer.</p>
    </article>
    <article class="kort">
        <img src="bilder/strand.jpg" alt="Hvit sandstrand">
        <h2>Stranda</h2>
        <p>Perfekt sted for bading om sommeren.</p>
    </article>
    <article class="kort">
        <img src="bilder/skog.jpg" alt="Sti gjennom skogen">
        <h2>Skogen</h2>
        <p>Fin tur med mange blåbær.</p>
    </article>
</section>
```

```css
.kort-liste {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.kort {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Skygge rundt kortet */
    overflow: hidden;                          /* Bildet følger de runde hjørnene */
}

.kort img {
    width: 100%;
    height: 180px;
    object-fit: cover; /* Bildet fyller plassen uten å bli strukket */
    display: block;
}

.kort h2,
.kort p {
    margin: 10px 15px;
}
```

---

## 10. Tilpass siden til mobil: media queries

Med en *media query* kan du gi siden andre regler når skjermen er smal. Reglene inni gjelder bare når betingelsen stemmer:

```css
/* Vanlig meny: lenkene på en rad */
nav {
    display: flex;
    gap: 20px;
}

/* Når skjermen er 600px eller smalere: lenkene under hverandre */
@media (max-width: 600px) {
    nav {
        flex-direction: column;
        gap: 5px;
    }
}
```

Legg media queries **nederst** i CSS-filen, så de ikke blir overstyrt av reglene under.

For at dette skal virke på mobil, må HTML-filen ha denne linjen i `<head>`. Den er med i grunnmalen du får med `!` + Tab:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

> **Tips:** Mange layouter trenger ingen media queries i det hele tatt. Flexbox med `flex-wrap: wrap` og grid med `repeat(auto-fit, minmax(...))` tilpasser seg ofte skjermen av seg selv.

---

## 11. Finn feil med utviklerverktøyene

Når CSS-en ikke gjør det du vil, er utviklerverktøyene i nettleseren den beste hjelpen:

1. Høyreklikk på elementet på nettsiden og velg **Inspiser** (eller trykk **F12**).
2. Til venstre ser du HTML-en. Til høyre ser du hvilke CSS-regler som gjelder for elementet du har valgt.
3. Regler som er **gjennomstreket**, er overstyrt av en annen regel.
4. Du kan endre verdier direkte der og se resultatet med en gang. Endringene lagres ikke, så kopier det som fungerer over i CSS-filen din.
5. Nederst i stil-panelet ser du boksmodellen med margin, border og padding for elementet.
6. Elementer med `display: flex` eller `display: grid` har en liten **flex**- eller **grid**-knapp ved siden av seg i HTML-visningen. Klikk på den for å se rutenettet tegnet opp på siden.
7. Klikk på mobil-ikonet øverst til venstre i utviklerverktøyene for å se hvordan siden ser ut på en mobilskjerm.

---

## Videre

Vil du lese og lære mer, er disse gode:
- [Kevin Powell på YouTube](https://www.youtube.com/@KevinPowell) (sterkt anbefalt! Korte og gode videoer om alt i CSS)
- [MDN Web Docs – CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics) (grundig og oppdatert, på engelsk)
- [W3Schools – CSS](https://www.w3schools.com/css/) (mange små eksempler du kan prøve direkte)
- [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) (oversikt med tegninger av alle flexbox-egenskapene)
- [CSS-Tricks: A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) (det samme for grid)
- [Flexbox Froggy](https://flexboxfroggy.com/) og [Grid Garden](https://cssgridgarden.com/) (spill for å øve)
