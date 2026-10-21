# HTML for nybegynnere

HTML er språket som bestemmer **hva** som er på en nettside: overskrifter, avsnitt, bilder, lenker, lister og tabeller. Hvordan siden **ser ut** (farger, skrifttyper, plassering) bestemmer vi senere med CSS. Det tar vi i neste runde, så her skal sidene dine se litt kjedelige ut. Det er helt som det skal være.

Alle eksemplene kan du prøve selv. Lim dem inn i en HTML-fil, lagre, og se resultatet i nettleseren. Endre gjerne på koden og se hva som skjer.

Når du har lest gjennom, kan du gå løs på [oppgaven: Lag en nettside om hobbyen din](oppgave%20-%20html%20hobbyside.md).

Innhold:
1. [Hva er HTML?](#1-hva-er-html)
2. [Kom i gang i VS Code](#2-kom-i-gang-i-vs-code)
3. [Se siden i nettleseren med Live Server](#3-se-siden-i-nettleseren-med-live-server)
4. [Tagger og elementer](#4-tagger-og-elementer)
5. [Attributter](#5-attributter)
6. [Tekst: overskrifter og avsnitt](#6-tekst-overskrifter-og-avsnitt)
7. [Lenker](#7-lenker)
8. [Bilder, filstier og video](#8-bilder-filstier-og-video)
9. [Lister](#9-lister)
10. [Tabeller](#10-tabeller)
11. [Struktur: header, nav, main, section og footer](#11-struktur-header-nav-main-section-og-footer)
12. [DOM-en: siden som et tre](#12-dom-en-siden-som-et-tre)
13. [Litt om skjema](#13-litt-om-skjema)
14. [Emmet: skriv mindre, få mer](#14-emmet-skriv-mindre-få-mer)
15. [Flere nyttige VS Code-triks](#15-flere-nyttige-vs-code-triks)
16. [Sjekk koden din: validering](#16-sjekk-koden-din-validering)
17. [Et komplett eksempel](#17-et-komplett-eksempel)

---

## 1. Hva er HTML?

HTML står for *HyperText Markup Language*. Det er ikke et programmeringsspråk med variabler og løkker, slik som JavaScript. Det er et **markeringsspråk**: du tar tekst og markerer hva de ulike delene *er*.

```html
<h1>Brettspill</h1>
<p>Jeg spiller brettspill med vennene mine hver fredag.</p>
```

Her sier vi at «Brettspill» er en overskrift (`h1`), og at setningen under er et avsnitt (`p`). Nettleseren leser dette og viser overskriften stor og fet, og avsnittet som vanlig tekst.

En nettside består vanligvis av tre deler:

| Språk | Ansvar | Eksempel |
|---|---|---|
| **HTML** | Innhold og struktur | «Dette er en overskrift, dette er en liste» |
| **CSS** | Utseende | «Overskrifter skal være blå» |
| **JavaScript** | Oppførsel | «Når du klikker her, skjer dette» |

Vi starter med HTML fordi det er grunnmuren. CSS og JavaScript jobber begge med HTML-en du lager, så jo ryddigere HTML, jo lettere blir resten.

---

## 2. Kom i gang i VS Code

### Lag en mappe og en fil

1. Lag en ny mappe, for eksempel `html-test`.
2. Åpne VS Code og velg **File → Open Folder**. Velg mappa. (Åpne *mappa*, ikke bare fila. Det trenger Live Server for å virke skikkelig.)
3. Lag en ny fil som heter `index.html`.

Navnet `index.html` er spesielt: det er forsiden. Når en nettleser åpner en mappe på en webserver, ser den etter `index.html` først.

**Regler for filnavn:** Bruk små bokstaver, ingen mellomrom og ingen æ, ø eller å. Bruk bindestrek i stedet for mellomrom: `mitt-utstyr.html`, ikke `Mitt Utstyr.html`.

### Skriv `!` og trykk Tab

Skriv et utropstegn i den tomme fila:

```
!
```

VS Code viser et lite forslag. Trykk **Tab** (eller Enter), og du får hele grunnmalen til en nettside:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Dette kalles **Emmet**, og det er bygget inn i VS Code. Du kommer til å bruke det hele tiden. Mer om Emmet i [del 14](#14-emmet-skriv-mindre-få-mer).

### Hva betyr grunnmalen?

| Linje | Betydning |
|---|---|
| `<!DOCTYPE html>` | Forteller nettleseren at dette er moderne HTML. Står alltid øverst. |
| `<html lang="en">` | Starten på hele siden. `lang` sier hvilket språk siden er skrevet på. **Endre til `lang="no"`** når siden er på norsk. |
| `<head>` | Informasjon *om* siden. Det som står her, vises ikke på selve siden. |
| `<meta charset="UTF-8">` | Sørger for at æ, ø, å og andre tegn vises riktig. |
| `<meta name="viewport" ...>` | Gjør at siden ser fornuftig ut på mobil. |
| `<title>Document</title>` | Teksten som står i fanen i nettleseren. **Endre denne** til noe som passer. |
| `<body>` | Alt som skal *vises* på siden, skriver du her. |

**Tips:** Lei av å endre `lang="en"` hver gang? Åpne innstillingene (**Cmd + ,** på Mac, **Ctrl + ,** på Windows), søk etter `emmet variables`, klikk **Edit in settings.json** og legg til:

```json
"emmet.variables": {
    "lang": "no"
}
```

Da får du `lang="no"` automatisk neste gang du skriver `!`.

---

## 3. Se siden i nettleseren med Live Server

Du kan dobbeltklikke på `index.html` i Finder/Utforsker for å åpne den i nettleseren, men da må du trykke *oppdater* hver gang du endrer noe. Det blir fort slitsomt. Bruk heller utvidelsen **Live Server**.

### Installere Live Server

1. Klikk på utvidelsesikonet i venstremenyen i VS Code (de fire firkantene), eller trykk **Cmd + Shift + X** / **Ctrl + Shift + X**.
2. Søk etter **Live Server**.
3. Velg den som er laget av **Ritwick Dey** (den har mange millioner nedlastinger), og klikk **Install**.

### Starte Live Server

Det finnes to måter:
- Klikk på **Go Live** nede i høyre hjørne av VS Code.
- Eller høyreklikk på `index.html` og velg **Open with Live Server**.

Nettleseren åpner seg med en adresse som ligner på `http://127.0.0.1:5500/index.html`. `127.0.0.1` betyr «denne maskinen», og `5500` er porten Live Server bruker.

Nå skjer det magiske: **hver gang du lagrer fila, oppdaterer nettleseren seg selv.** Legg VS Code og nettleseren ved siden av hverandre, så ser du endringene med en gang.

### Stoppe Live Server

Klikk på **Port: 5500** nede i høyre hjørne (der det sto *Go Live*).

### Vanlige problemer

| Problem | Løsning |
|---|---|
| Ingenting skjer når jeg endrer koden | Har du lagret? Trykk **Cmd + S** / **Ctrl + S**. |
| Jeg ser ikke *Go Live*-knappen | Sjekk at du har åpnet en *mappe* (File → Open Folder) og at utvidelsen er installert. Prøv å starte VS Code på nytt. |
| Feil side åpner seg | Høyreklikk på riktig fil og velg **Open with Live Server**. |
| Bildene vises ikke | Sjekk filstien. Se [del 8](#8-bilder-filstier-og-video). |

**Tips:** Slå på **File → Auto Save**, så lagrer VS Code automatisk, og du slipper å huske det.

---

## 4. Tagger og elementer

### Slik ser et element ut

```html
<p>Dette er et avsnitt.</p>
```

- `<p>` er **starttaggen**.
- `</p>` er **slutttaggen**. Den har en skråstrek `/` foran navnet.
- `Dette er et avsnitt.` er **innholdet**.
- Alt sammen kalles et **element**.

Glemmer du slutttaggen, prøver nettleseren å gjette hva du mente. Noen ganger gjetter den riktig, noen ganger ikke. Skriv alltid slutttaggen.

### Tomme elementer

Noen elementer har ikke noe innhold, og trenger derfor ingen slutttagg:

```html
<br>
<hr>
<img src="katt.jpg" alt="En katt som sover">
<meta charset="UTF-8">
```

### Elementer inni elementer

Elementer kan ligge inni hverandre. Det kalles **nøsting** (på engelsk *nesting*):

```html
<p>Jeg liker <strong>veldig godt</strong> å spille sjakk.</p>
```

`strong` ligger inni `p`. Regelen er: **det som åpnes sist, lukkes først.**

```html
<!-- Riktig -->
<p>Dette er <strong>viktig</strong>.</p>

<!-- Feil: strong lukkes etter p -->
<p>Dette er <strong>viktig.</p></strong>
```

### Innrykk gjør koden lesbar

Nettleseren bryr seg ikke om mellomrom og linjeskift. Disse to er helt like for nettleseren:

```html
<ul><li>Sjakk</li><li>Go</li><li>Ludo</li></ul>
```

```html
<ul>
    <li>Sjakk</li>
    <li>Go</li>
    <li>Ludo</li>
</ul>
```

Men for *deg* er den nederste mye lettere å lese. Regelen er enkel: **alt som ligger inni et annet element, får ett innrykk ekstra.** Da ser du med en gang hva som hører sammen.

**Tips:** Har koden blitt rotete? Trykk **Shift + Option + F** (Mac) eller **Shift + Alt + F** (Windows), så rydder VS Code innrykkene for deg. Kommandoen heter *Format Document*.

### Kommentarer

En kommentar er tekst som nettleseren ignorerer. Bruk den til å forklare koden eller dele opp siden:

```html
<!-- Her starter menyen -->
```

**Tips:** Marker en eller flere linjer og trykk **Cmd + /** (Mac) eller **Ctrl + /** (Windows) for å gjøre dem om til en kommentar. Trykk en gang til for å fjerne kommentaren.

---

## 5. Attributter

Attributter gir et element ekstra informasjon. De skrives alltid i **starttaggen**:

```html
<a href="https://www.nrk.no">Gå til NRK</a>
```

- `href` er **navnet** på attributtet.
- `"https://www.nrk.no"` er **verdien**.
- Mellom dem står `=`, og verdien står i anførselstegn.

Et element kan ha flere attributter. Skill dem med mellomrom:

```html
<img src="bilder/sjakk.jpg" alt="Et sjakkbrett med brikker" width="400">
```

### Attributter du kommer til å bruke mye

| Attributt | Brukes på | Hva det gjør |
|---|---|---|
| `href` | `a` | Hvor lenken går |
| `src` | `img`, `video`, `iframe` | Hvor fila ligger |
| `alt` | `img` | Beskrivelse av bildet |
| `id` | alle | Et unikt navn på *ett* element |
| `title` | alle | Tekst som dukker opp når du holder musa over |
| `lang` | `html` (og andre) | Språket innholdet er skrevet på |
| `target` | `a` | `_blank` åpner lenken i ny fane |

### `id`

En `id` gir ett bestemt element et navn, så vi kan peke på det:

```html
<section id="utstyr">
    <h2>Utstyr</h2>
    <p>Kjøp en god bag før du kjøper dyre køller.</p>
</section>
```

Nå kan du lage en lenke som hopper rett ned til denne seksjonen med `href="#utstyr"` (mer om det i [del 7](#7-lenker)). Senere bruker både CSS og JavaScript `id` for å finne elementer.

- En `id` skal være **unik**. To elementer på samme side kan ikke ha samme `id`.
- **Gode navn:** Bruk små bokstaver og bindestrek, for eksempel `id="mitt-utstyr"`. Ingen mellomrom, ingen æøå. Gi navn etter *hva* det er (`utstyr`), ikke hvordan det skal se ut.

Du kommer også til å se attributtet `class` i kode på nettet. Det ligner på `id`, men flere elementer kan ha samme `class`. Det gjør ingenting synlig før vi tar i bruk CSS, så vi venter med det til neste runde.

---

## 6. Tekst: overskrifter og avsnitt

### Overskrifter: `h1` til `h6`

```html
<h1>Fotografering</h1>
<h2>Utstyr</h2>
<h3>Kamera</h3>
<h3>Objektiver</h3>
<h2>Teknikk</h2>
<h3>Lys</h3>
```

Overskriftene lager en **innholdsfortegnelse** for siden, akkurat som i en bok:

- `h1` er tittelen på siden. Bruk **bare én** `h1` per side.
- `h2` er kapitler.
- `h3` er underkapitler i et `h2`-kapittel.
- Ikke hopp over nivåer (fra `h2` rett til `h4`).

**Viktig:** Ikke velg overskrift ut fra hvor *stor* den er. Velg ut fra hvor den hører hjemme i strukturen. Størrelsen kan vi endre med CSS senere.

### Avsnitt: `p`

```html
<p>Jeg begynte å fotografere da jeg fikk et gammelt kamera av bestefar.</p>
<p>Nå tar jeg mest bilder av fugler og natur.</p>
```

Hvert `p`-element blir et eget avsnitt med litt luft over og under.

Legg merke til at linjeskift i koden *ikke* gir linjeskift på siden:

```html
<p>
    Dette blir
    én linje
    på siden.
</p>
```

Trenger du et linjeskift inni et avsnitt (for eksempel i et dikt eller en adresse), bruker du `<br>`:

```html
<p>
    Storgata 1<br>
    1234 Småby
</p>
```

Ikke bruk `<br>` for å lage luft mellom ting. Det er jobben til CSS.

### Uthevet tekst

```html
<p>Husk å <strong>aldri</strong> se rett på sola gjennom kameraet.</p>
<p>Fuglen heter <em>Parus major</em> på latin.</p>
```

- `strong` betyr *viktig*. Vises som **fet**.
- `em` betyr *trykk på*, eller noe som skal leses annerledes. Vises som *kursiv*.

### Andre nyttige tekstelementer

```html
<hr>                                   <!-- En vannrett strek: skifte av tema -->
<blockquote>Et sitat fra noen.</blockquote>
<q>Et kort sitat inni en setning</q>
<time datetime="2026-10-21">21. oktober</time>
```

---

## 7. Lenker

Lenker lages med `a` (står for *anchor*, anker) og attributtet `href`.

### Lenke til en annen nettside

```html
<a href="https://no.wikipedia.org/wiki/Sjakk">Les om sjakk på Wikipedia</a>
```

Teksten mellom taggene er det brukeren klikker på. Skriv en tekst som forteller hvor lenken går. «Les om sjakk på Wikipedia» er bedre enn «Klikk her».

### Åpne i ny fane

```html
<a href="https://www.chess.com" target="_blank">Spill sjakk på nett</a>
```

Bruk `target="_blank"` med måte, gjerne bare på lenker som går til *andre* nettsider.

### Lenke til en annen side i ditt eget prosjekt

Har du to filer i samme mappe, `index.html` og `utstyr.html`:

```html
<a href="utstyr.html">Se utstyret mitt</a>
```

Og tilbake igjen fra `utstyr.html`:

```html
<a href="index.html">Tilbake til forsiden</a>
```

Dette kalles en **relativ** lenke. Den går ut fra der fila ligger. En lenke som starter med `https://`, kalles en **absolutt** lenke.

### Lenke til et sted på samme side

Gi elementet du vil hoppe til en `id`, og lenk til den med `#`:

```html
<a href="#regler">Gå til reglene</a>

<!-- ... mye innhold ... -->

<section id="regler">
    <h2>Regler</h2>
    ...
</section>
```

Du kan også kombinere: `href="utstyr.html#kamera"` går til `utstyr.html` og hopper rett ned til elementet med `id="kamera"`.

### E-post og telefon

```html
<a href="mailto:ola@example.com">Send meg en e-post</a>
<a href="tel:+4712345678">Ring meg</a>
```

---

## 8. Bilder, filstier og video

```html
<img src="bilder/fjelltur.jpg" alt="Utsikt fra toppen av Galdhøpiggen">
```

- `src` (*source*) er hvor bildet ligger.
- `alt` er en tekst som beskriver bildet. Den vises hvis bildet ikke lastes, og den blir lest opp for blinde og svaksynte som bruker skjermleser. **Alle bilder skal ha `alt`.**

Skriv `alt` som om du forteller noen i telefonen hva som er på bildet. «Bilde» eller «fjelltur.jpg» er ikke en god `alt`-tekst.

### Størrelse

```html
<img src="bilder/fjelltur.jpg" alt="Utsikt fra Galdhøpiggen" width="600">
```

Store bilder fra mobilen kan fylle hele skjermen. `width` begrenser bredden (i piksler) så lenge vi ikke har CSS. Senere styrer vi dette med CSS i stedet.

### Hold orden på filene

Lag en egen mappe til bildene:

```
hobbyside/
├── index.html
├── utstyr.html
└── bilder/
    ├── fjelltur.jpg
    └── telt.jpg
```

Filstien går ut fra *der HTML-fila ligger*:

| Fila ligger ... | Skriv |
|---|---|
| i samme mappe som HTML-fila | `src="telt.jpg"` |
| i en undermappe `bilder` | `src="bilder/telt.jpg"` |
| én mappe *opp* | `src="../telt.jpg"` |
| på en annen nettside | `src="https://example.com/telt.jpg"` |

**Vanlige feil når bildet ikke vises:**
- Feil stavet filnavn. `Telt.JPG` og `telt.jpg` er ikke det samme på en webserver.
- Mellomrom eller æøå i filnavnet. Gi bildet nytt navn.
- Bildet ligger i en annen mappe enn du tror. Sjekk i filutforskeren i VS Code.

**Tips:** Skriv `src="` og vent litt. VS Code foreslår filene i mappa, så slipper du skrivefeil. Du kan også trykke **Ctrl + Mellomrom** for å få forslagene fram.

### Bilde med bildetekst: `figure` og `figcaption`

```html
<figure>
    <img src="bilder/telt.jpg" alt="Et grønt telt ved et vann i solnedgang" width="500">
    <figcaption>Første natt i telt, sommeren 2025.</figcaption>
</figure>
```

`figure` binder bildet og bildeteksten sammen.

### Video fra YouTube

Du kan vise en YouTube-video rett på siden din med elementet `iframe`. En `iframe` er et vindu som viser en *annen* nettside inni din.

1. Gå til videoen på YouTube.
2. Klikk **Del**, og så **Bygg inn** (*Embed*).
3. Kopier koden og lim den inn i HTML-en.

Koden du får, ser omtrent slik ut:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/abc123XYZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```

Gjør to endringer før du er ferdig:
- **Bytt ut `title`** med en tekst som forteller hva videoen handler om. Den blir lest opp av skjermlesere, akkurat som `alt` på bilder.
- **Fjern `frameborder="0"`**. Det er en gammel måte å fjerne rammen på, og validatoren regner det som en feil. Rammen fjerner vi med CSS senere.

Med litt ryddigere innrykk blir det slik:

```html
<section id="video">
    <h2>Slik spiller du Catan</h2>
    <p>Denne videoen forklarer reglene på under ti minutter.</p>
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/abc123XYZ"
        title="Video som forklarer reglene i Catan"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
    </iframe>
</section>
```

Det er lov å skrive attributtene på hver sin linje. Det gjør lange tagger mye lettere å lese.

**Viser videoen en feilmelding?** Åpne siden med Live Server, ikke ved å dobbeltklikke på fila. YouTube vil ikke alltid vise videoer på sider som er åpnet rett fra disken. Noen videoer har også slått av innbygging. Da må du velge en annen video.

### Hvor finner jeg bilder?

Det beste er å bruke dine egne bilder. Ellers kan du bruke nettsider med gratis bilder, for eksempel [Unsplash](https://unsplash.com) eller [Pixabay](https://pixabay.com). Ikke ta bilder fra et vanlig Google-søk. De fleste bilder på nettet er beskyttet av opphavsrett.

---

## 9. Lister

### Punktliste: `ul`

`ul` står for *unordered list*. Bruk den når rekkefølgen ikke betyr noe:

```html
<ul>
    <li>Ryggsekk</li>
    <li>Sovepose</li>
    <li>Kart og kompass</li>
</ul>
```

### Nummerert liste: `ol`

`ol` står for *ordered list*. Bruk den når rekkefølgen er viktig, for eksempel i en oppskrift:

```html
<ol>
    <li>Finn en flat plass.</li>
    <li>Legg ut teltduken.</li>
    <li>Sett inn stengene.</li>
    <li>Fest pluggene i bakken.</li>
</ol>
```

Nettleseren nummererer automatisk. Flytter du på et punkt, blir tallene riktige uansett.

### `li` hører alltid hjemme i en liste

Hvert punkt er et `li` (*list item*). Et `li` skal alltid ligge rett inni et `ul` eller `ol`, og et `ul`/`ol` skal bare inneholde `li`-elementer.

### Liste inni en liste

Underpunkter legger du **inni** et `li`:

```html
<ul>
    <li>Klær
        <ul>
            <li>Ullundertøy</li>
            <li>Regnjakke</li>
        </ul>
    </li>
    <li>Mat
        <ul>
            <li>Turmat</li>
            <li>Sjokolade</li>
        </ul>
    </li>
</ul>
```

Her ser du hvorfor innrykk er så viktig. Uten dem er det nesten umulig å se hvilken `</li>` som hører til hvilken `<li>`.

---

## 10. Tabeller

Tabeller brukes til data som naturlig passer i rader og kolonner: resultater, timeplaner, priser og lignende.

```html
<table>
    <caption>Mine beste løp</caption>
    <thead>
        <tr>
            <th>Distanse</th>
            <th>Tid</th>
            <th>År</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>5 km</td>
            <td>23:41</td>
            <td>2025</td>
        </tr>
        <tr>
            <td>10 km</td>
            <td>51:02</td>
            <td>2026</td>
        </tr>
    </tbody>
</table>
```

| Element | Betydning |
|---|---|
| `table` | Hele tabellen |
| `caption` | Tittelen på tabellen |
| `thead` | Overskriftsraden(e) |
| `tbody` | Selve dataene |
| `tr` | En rad (*table row*) |
| `th` | En overskriftscelle (*table header*). Vises fet og midtstilt. |
| `td` | En vanlig celle (*table data*) |

En tabell bygges **rad for rad**: først lager du en `tr`, så fyller du den med celler.

Tabellen vil se ganske naken ut uten CSS, uten streker mellom cellene. Det fikser vi i neste runde. Ikke bruk tabeller for å plassere ting på siden. Det er også en jobb for CSS.

---

## 11. Struktur: header, nav, main, section og footer

Til nå har vi sett på enkelt-elementer. Men hvordan bygger vi opp en hel side så den blir lett å ha oversikt over?

De fleste nettsider har den samme grunnstrukturen:

```
┌─────────────────────────────────┐
│ header   (logo, tittel)         │
│   nav    (meny)                 │
├─────────────────────────────────┤
│ main     (hovedinnholdet)       │
│   section                       │
│   section                       │
│   section                       │
├─────────────────────────────────┤
│ footer   (kontaktinfo, ©)       │
└─────────────────────────────────┘
```

HTML har egne elementer for hver av disse delene:

| Element | Brukes til |
|---|---|
| `header` | Toppen av siden: tittel, logo, ofte menyen |
| `nav` | Navigasjon: menyen med lenker |
| `main` | Hovedinnholdet. Bare én `main` per side. |
| `section` | En del av innholdet med sitt eget tema. Har nesten alltid en overskrift. |
| `article` | Noe som kunne stått alene, som et blogginnlegg eller en nyhetssak |
| `aside` | Noe på siden av hovedinnholdet, som en faktaboks |
| `footer` | Bunnen av siden: kontaktinfo, opphavsrett |

Slik ser det ut i kode:

```html
<body>
    <header>
        <h1>Fuglekikking</h1>
        <nav>
            <ul>
                <li><a href="#om">Om hobbyen</a></li>
                <li><a href="#fugler">Mine fugler</a></li>
                <li><a href="utstyr.html">Utstyr</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="om">
            <h2>Om hobbyen</h2>
            <p>...</p>
        </section>

        <section id="fugler">
            <h2>Mine fugler</h2>
            <p>...</p>
        </section>

        <aside>
            <h2>Visste du?</h2>
            <p>Kråka er en av de smarteste fuglene vi har.</p>
        </aside>
    </main>

    <footer>
        <p>Laget av Kari Nordmann, 2026</p>
    </footer>
</body>
```

Disse elementene kalles **semantiske**, fordi navnet forteller hva innholdet *betyr*. Nettleseren viser dem ikke annerledes enn vanlig tekst, men de gjør tre viktige ting:

1. **Du får oversikt.** Ser du `<nav>`, vet du at det er menyen.
2. **Skjermlesere forstår siden.** En blind bruker kan hoppe rett til `main` eller `nav`.
3. **CSS og JavaScript blir lettere.** Senere kan du skrive CSS for «menyen» og «bunnen» uten å lete.

### `div` og `span`: når ingenting annet passer

`div` og `span` betyr ingenting i seg selv. De er bare bokser vi kan pakke ting inn i:

- `div` er en **blokk**, og starter på en ny linje.
- `span` ligger **inni teksten** (merk: inline).

```html
<div class="kort">
    <h3>Kjøttmeis</h3>
    <p>Sett i hagen <span class="dato">12. mars</span>.</p>
</div>
```

De blir nyttige når vi skal style med CSS. Men velg alltid et semantisk element hvis det finnes et som passer. En side som bare består av `div`-er («div-suppe») er vanskelig å lese.

### Blokk-elementer og inline-elementer

Du har kanskje lagt merke til at noen elementer alltid starter på en ny linje, mens andre ligger i teksten:

| Blokk (ny linje, tar hele bredden) | Inline (ligger i teksten) |
|---|---|
| `h1`–`h6`, `p`, `ul`, `ol`, `li`, `table`, `div`, `section`, `header`, `footer`, `figure` | `a`, `strong`, `em`, `span`, `img`, `br` |

Dette blir viktig når vi kommer til CSS.

---

## 12. DOM-en: siden som et tre

Når nettleseren leser HTML-fila di, bygger den et **tre** av alle elementene. Dette treet kalles **DOM** (*Document Object Model*).

Denne koden:

```html
<html>
    <head>
        <title>Fuglekikking</title>
    </head>
    <body>
        <header>
            <h1>Fuglekikking</h1>
        </header>
        <main>
            <section>
                <h2>Mine fugler</h2>
                <ul>
                    <li>Kjøttmeis</li>
                    <li>Rødstrupe</li>
                </ul>
            </section>
        </main>
    </body>
</html>
```

blir dette treet:

```
html
├── head
│   └── title
└── body
    ├── header
    │   └── h1
    └── main
        └── section
            ├── h2
            └── ul
                ├── li
                └── li
```

Vi bruker familieord om elementene i treet:
- `body` er **forelder** (*parent*) til `header` og `main`.
- `header` og `main` er **barn** (*children*) av `body`.
- `header` og `main` er **søsken** (*siblings*).

Legg merke til at **innrykkene i koden ser ut akkurat som treet.** Det er derfor innrykk er så viktig: koden din blir et bilde av DOM-en.

### Hvorfor bryr vi oss om DOM-en?

I neste runde skal CSS velge elementer i treet («alle `li` inni `nav`»). Senere skal JavaScript endre treet mens siden kjører («legg til en ny `li` i lista»). Er treet ryddig, blir begge deler mye enklere.

### Se DOM-en i nettleseren

Høyreklikk på noe på siden din og velg **Inspiser** (eller trykk **F12**, eller **Cmd + Option + I** på Mac). Da åpnes utviklerverktøyene, og under fanen **Elements** ser du DOM-treet. Du kan klikke på trekantene for å åpne og lukke grener, og holde musa over et element for å se hvor det er på siden.

Prøv dette: dobbeltklikk på en tekst i Elements-fanen og endre den. Siden endres med en gang. (Endringen forsvinner når du laster siden på nytt. Den ligger bare i nettleseren, ikke i fila di.)

Utviklerverktøyene er også gode til å finne feil. Har du glemt en slutttagg, ser du ofte at treet har blitt annerledes enn du trodde.

### Slik får du en DOM som er lett å jobbe med

1. **Start med grunnstrukturen.** `header`, `nav`, `main` og `footer` først. Fyll på med innhold etterpå.
2. **Del innholdet i `section`-er**, hver med sin egen overskrift.
3. **Bruk innrykk konsekvent.** Bruk *Format Document* (Shift + Option/Alt + F) ofte.
4. **Velg semantiske elementer** framfor `div` når det finnes et som passer.
5. **Gi viktige deler en `id`**, så du kan lenke til dem og finne dem igjen.
6. **Ikke nøst dypere enn du trenger.** En `div` inni en `div` inni en `div` uten grunn gjør treet vanskelig å lese.
7. **Bruk kommentarer** for å markere store deler av siden: `<!-- ===== MENY ===== -->`.

**Tips:** Lag en skisse av siden på papir først. Tegn boksene (header, meny, seksjoner, footer) og skriv hvilke elementer som skal være i hver. Da har du tegnet DOM-en før du har skrevet en eneste linje kode.

---

## 13. Litt om skjema

Skjema (*forms*) lar brukeren skrive inn noe. Uten JavaScript eller en server gjør skjemaet ingenting når du sender det, men det er greit å vite hvordan det bygges opp.

```html
<form>
    <label for="navn">Navn</label>
    <input type="text" id="navn" name="navn">

    <label for="epost">E-post</label>
    <input type="email" id="epost" name="epost">

    <label for="favoritt">Favorittspill</label>
    <select id="favoritt" name="favoritt">
        <option>Sjakk</option>
        <option>Ludo</option>
        <option>Monopol</option>
    </select>

    <label for="melding">Melding</label>
    <textarea id="melding" name="melding"></textarea>

    <button type="submit">Send</button>
</form>
```

- `label` er teksten som forteller hva feltet er. `for` på `label` må være lik `id` på `input`. Da kan brukeren klikke på teksten for å komme til feltet.
- `type` på `input` bestemmer hva slags felt det er: `text`, `email`, `number`, `password`, `date`, `checkbox`, `radio` og flere.

---

## 14. Emmet: skriv mindre, få mer

Emmet er bygget inn i VS Code. Du skriver en forkortelse og trykker **Tab** (eller Enter når forslaget dukker opp), så skriver VS Code koden for deg. Det sparer deg for mye skriving og mange skrivefeil.

### Det enkleste

| Skriv | Trykk Tab, og du får |
|---|---|
| `!` | Hele grunnmalen |
| `p` | `<p></p>` |
| `h2` | `<h2></h2>` |
| `a` | `<a href=""></a>` |
| `img` | `<img src="" alt="">` |

Markøren havner der du skal skrive, og du kan trykke Tab for å hoppe videre til neste felt.

### Fylltekst med `lorem`

Trenger du tekst for å se hvordan siden blir, før du har skrevet innholdet selv?

| Skriv | Du får |
|---|---|
| `lorem` | Et avsnitt med 30 tilfeldige latinske ord |
| `lorem10` | 10 ord |
| `p>lorem` | Et `p`-element med fylltekst inni |
| `p*3>lorem` | Tre avsnitt med fylltekst |
| `h2>lorem3` | En overskrift på tre ord |

Husk å bytte ut fylltekst med ekte innhold før du leverer!

### Inni: `>`

`>` betyr «inni».

```
nav>ul>li>a
```

blir

```html
<nav>
    <ul>
        <li><a href=""></a></li>
    </ul>
</nav>
```

Legg merke til at det må være en `ul` mellom `nav` og `li`. Et `li` skal alltid ligge i en liste.

### Gjenta: `*`

`*` betyr «så mange ganger».

```
ul>li*4
```

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

Og en hel meny på én linje:

```
nav>ul>li*4>a
```

### Ved siden av: `+`

`+` betyr «etterpå, på samme nivå».

```
header+main+footer
```

```html
<header></header>
<main></main>
<footer></footer>
```

### Klasse og id: `.` og `#`

```
section#utstyr
```
```html
<section id="utstyr"></section>
```

```
p.tips
```
```html
<p class="tips"></p>
```

Skriver du bare `.kort`, får du en `div` med klassen `kort`: `<div class="kort"></div>`.

### Tekst inni: `{ }`

```
h1{Mine hobbyer}
```
```html
<h1>Mine hobbyer</h1>
```

### Nummerering: `$`

`$` blir byttet ut med et tall som teller oppover:

```
ul>li{Punkt $}*3
```
```html
<ul>
    <li>Punkt 1</li>
    <li>Punkt 2</li>
    <li>Punkt 3</li>
</ul>
```

### Attributter: `[ ]`

```
a[href=utstyr.html]{Utstyr}
```
```html
<a href="utstyr.html">Utstyr</a>
```

### Gruppering: `( )`

Parenteser samler deler som hører sammen:

```
header>(h1{Fuglekikking})+(nav>ul>li*3>a)
```

### Sett alt sammen

Prøv denne i en tom `body`:

```
header>h1+nav>ul>li*3>a^^main>section*3>h2+p>lorem
```

`^` betyr «gå ett nivå opp». Her går vi ut av `ul` og `nav` før vi lager `main`. Det kan være vanskelig å treffe riktig, så det er helt greit å lage én del om gangen i stedet.

### Pakk inn noe som allerede finnes

Har du skrevet noen linjer tekst og vil gjøre dem om til en liste? Marker linjene, åpne kommandopaletten (**Cmd + Shift + P** / **Ctrl + Shift + P**), skriv `Emmet: Wrap with Abbreviation`, og skriv `ul>li*`. Da blir hver linje et eget punkt.

Mer om Emmet: [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

---

## 15. Flere nyttige VS Code-triks

| Hva | Mac | Windows |
|---|---|---|
| Lagre | Cmd + S | Ctrl + S |
| Rydde innrykk (Format Document) | Shift + Option + F | Shift + Alt + F |
| Kommentere ut / inn | Cmd + / | Ctrl + / |
| Flytte en linje opp/ned | Option + ↑/↓ | Alt + ↑/↓ |
| Kopiere en linje opp/ned | Shift + Option + ↑/↓ | Shift + Alt + ↑/↓ |
| Velge neste like ord | Cmd + D | Ctrl + D |
| Flere markører | Option + klikk | Alt + klikk |
| Bryte lange linjer (Word Wrap) | Option + Z | Alt + Z |
| Vise forslag | Ctrl + Mellomrom | Ctrl + Mellomrom |
| Kommandopaletten | Cmd + Shift + P | Ctrl + Shift + P |
| Åpne en fil raskt | Cmd + P | Ctrl + P |

### Endre start- og slutttagg samtidig

Endrer du `<div>` til `<section>`, må du huske å endre `</div>` også. VS Code kan gjøre det for deg. Åpne innstillingene, søk etter **Linked Editing**, og huk av. Nå endres slutttaggen automatisk når du endrer starttaggen.

### Se hvilken tagg som hører sammen

Klikk på en starttagg, så markerer VS Code den tilhørende slutttaggen. Det er nyttig når du lurer på hvor et element slutter.

### Pass på de røde strekene

VS Code setter ikke alltid rød strek under HTML-feil, så ikke stol blindt på at koden er riktig bare fordi den ser grei ut. Bruk validering (neste del).

---

## 16. Sjekk koden din: validering

Nettleseren er snill. Den viser siden selv om det er feil i koden. Det betyr at du kan ha feil uten å vite om det, og de dukker ofte opp som rare problemer senere når du legger på CSS.

Gå til **[validator.w3.org](https://validator.w3.org/#validate_by_input)**, velg **Validate by Direct Input**, lim inn koden din og trykk **Check**. Du får en liste over feil og advarsler, med linjenummer.

Vanlige feil:

| Feilmelding (omtrent) | Hva det betyr |
|---|---|
| *End tag for X seen, but there were open elements* | Du har glemt å lukke et element, eller lukket i feil rekkefølge. |
| *An img element must have an alt attribute* | Et bilde mangler `alt`. |
| *Duplicate ID* | Du har brukt samme `id` to ganger. |
| *Element li not allowed as child of element div* | Et `li` ligger utenfor en `ul` eller `ol`. |
| *Consider adding a lang attribute* | Du mangler `lang` på `html`-elementet. |

Mål: **ingen feil**. Advarsler bør du lese og vurdere.

---

## 17. Et komplett eksempel

Her er en hel side som bruker det meste fra denne guiden. Kopier den inn i `index.html`, start Live Server og se resultatet. Prøv deretter å endre på den: legg til en seksjon, bytt ut bildet med et eget, lag en ny rad i tabellen.

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brettspill – hobbyen min</title>
</head>
<body>

    <!-- ===== TOPP OG MENY ===== -->
    <header>
        <h1>Brettspill</h1>
        <p>Strategi, flaks og mye latter rundt kjøkkenbordet.</p>
        <nav>
            <ul>
                <li><a href="#om">Om hobbyen</a></li>
                <li><a href="#favoritter">Favorittene mine</a></li>
                <li><a href="#kom-i-gang">Kom i gang</a></li>
                <li><a href="samling.html">Samlingen min</a></li>
            </ul>
        </nav>
    </header>

    <!-- ===== HOVEDINNHOLD ===== -->
    <main>

        <section id="om">
            <h2>Om hobbyen</h2>
            <p>
                Jeg begynte å spille brettspill da jeg var ti år, og nå spiller vi
                <strong>hver fredag</strong> i vennegjengen.
            </p>
            <figure>
                <img src="bilder/spillkveld.jpg" alt="Fire venner rundt et bord fullt av spillbrikker og kort" width="500">
                <figcaption>Spillkveld hjemme hos meg, vinteren 2026.</figcaption>
            </figure>
        </section>

        <section id="favoritter">
            <h2>Favorittene mine</h2>
            <table>
                <caption>Spill jeg anbefaler</caption>
                <thead>
                    <tr>
                        <th>Spill</th>
                        <th>Antall spillere</th>
                        <th>Spilletid</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Catan</td>
                        <td>3–4</td>
                        <td>90 min</td>
                    </tr>
                    <tr>
                        <td>Ticket to Ride</td>
                        <td>2–5</td>
                        <td>60 min</td>
                    </tr>
                    <tr>
                        <td>Codenames</td>
                        <td>4–8</td>
                        <td>15 min</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section id="kom-i-gang">
            <h2>Kom i gang</h2>

            <h3>Dette trenger du</h3>
            <ul>
                <li>Et spill (start med noe enkelt)</li>
                <li>Noen å spille med</li>
                <li>Snacks
                    <ul>
                        <li>Noe som ikke gjør kortene fete</li>
                    </ul>
                </li>
            </ul>

            <h3>Slik lærer du et nytt spill</h3>
            <ol>
                <li>Se en video som forklarer reglene.</li>
                <li>Spill en prøverunde der ingen teller poeng.</li>
                <li>Les regelboka når dere står fast.</li>
            </ol>

            <p>
                Finn regler og anmeldelser på
                <a href="https://boardgamegeek.com" target="_blank">BoardGameGeek</a>.
            </p>
        </section>

        <aside>
            <h2>Visste du?</h2>
            <p>Det eldste brettspillet vi kjenner, <em>Senet</em>, er over 5000 år gammelt.</p>
        </aside>

    </main>

    <!-- ===== BUNN ===== -->
    <footer>
        <p>Laget av Kari Nordmann, 2026</p>
        <p><a href="mailto:kari@example.com">Send meg en e-post</a></p>
    </footer>

</body>
</html>
```

Legg merke til:
- Innrykkene viser tydelig hva som ligger inni hva.
- Kommentarene deler siden i tre store deler.
- Hver `section` har en `id`, så menyen kan lenke til den.
- Det er bare én `h1`, og overskriftene følger en logisk rekkefølge.
- Det er ingen CSS. Siden ser enkel ut, men strukturen er klar til å styles i neste runde.

---

## Videre

Nå er du klar for [oppgaven: Lag en nettside om hobbyen din](oppgave%20-%20html%20hobbyside.md).

Vil du lese mer, er disse gode:
- [MDN Web Docs – HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content) (grundig og riktig, på engelsk)
- [W3Schools – HTML](https://www.w3schools.com/html/) (mange små eksempler du kan prøve direkte)
- [Oversikt over alle HTML-elementer på MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
