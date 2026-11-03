# Vurdering - Personlig portefølje (IM)

## Bakgrunn

Du skal lage en **personlig porteføljenettside**. Nettsiden skal vise hvem du er, hva du kan, prosjekter du har laget og interessene dine.

Tenk på den som en nettside du kunne sendt til en arbeidsgiver, en læreplass eller en skole. Derfor skal **hovedsiden være profesjonell og tydelig**. På undersidene har du stor frihet til å være kreativ, prøve ut ulike stiler og vise variasjon.

Fagstoffet du trenger, finner du i guidene vi har gått gjennom i timene:
- [Guide - HTML](../../guider/html-og-css/guide%20-%20html.md)
- [Guide - CSS](../../guider/html-og-css/guide%20-%20css.md)
- [Guide - GitHub og GitHub Desktop](../../guider/github/guide%20-%20github%20og%20github%20desktop.md)

---

## Innhold på nettsiden

### Hovedsiden (`index.html`)

Hovedsiden er det første besøkende ser. Den skal være ryddig, profesjonell og gi en rask oversikt. Den bør blant annet ha:
- Hvem du er (navn, kort presentasjon, gjerne et bilde av deg eller noe som representerer deg)
- Tydelig navigasjon til undersidene
- Et utvalg av det du vil vise frem, for eksempel kunnskaper og prosjekter
- Kontaktinformasjon eller lenker (for eksempel GitHub)

### Undersider

Du skal ha **flere undersider**, gjerne i egne mapper. Forslag:
- **Om meg**: litt mer utfyllende om deg
- **Kunnskaper**: hva du kan, og hva du holder på å lære
- **Prosjekter**: ting du har laget, på skolen eller på fritiden
- **Interesser**: hobbyer og ting du brenner for

Her kan du gjerne prøve noe annet enn på hovedsiden: egne fargetemaer, en annen layout, animasjoner eller andre effekter. Det viktigste er at du kan forklare hvorfor du har gjort det slik.

---

## Krav

### HTML
- Bruk **semantisk HTML** så langt det lar seg gjøre: `header`, `nav`, `main`, `section`, `article`, `footer`, riktige overskriftsnivåer (`h1`, `h2`, `h3` ...), lister der det er lister, og så videre.
- Bruk `div` bare når det ikke finnes et semantisk element som passer.
- Koden skal være **validert** uten feil på [validator.w3.org](https://validator.w3.org/#validate_by_input).
- Riktig `lang`-attributt og en beskrivende `<title>` på alle sider.

### Navigasjon og struktur
- Det skal være **lett å finne frem**, og lett å komme tilbake til hovedsiden fra alle undersider.
- Navigasjonen skal se lik ut og ligge på samme sted på alle sider (selv om resten av designet kan variere).
- Filer og mapper skal være ryddig organisert, med gode filnavn (små bokstaver, ingen mellomrom, ingen æ, ø eller å).

Eksempel på mappestruktur:

```
portfolio/
├── index.html
├── style.css
├── bilder/
├── om-meg/
│   ├── index.html
│   └── style.css
├── prosjekter/
│   └── index.html
└── interesser/
    └── index.html
```

### CSS
- All styling skal ligge i egne CSS-filer, ikke i `style`-attributter.
- Du skal bruke **både Flexbox og CSS Grid** der det passer. Du må kunne forklare hvorfor du valgte det ene eller det andre.
- Nettsiden skal fungere på både mobil og PC (bruk for eksempel media queries, `flex-wrap` eller `auto-fit` i grid).

### Universell utforming
Nettsiden skal oppfylle grunnleggende krav til universell utforming:
- God **fargekontrast** mellom tekst og bakgrunn. Sjekk med for eksempel [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
- Alle bilder skal ha en **beskrivende `alt`-tekst** (eller tom `alt=""` hvis bildet bare er pynt).
- Lenker skal ha tekst som forteller hvor de går (ikke bare «klikk her»).
- Det skal være mulig å navigere med **tastaturet** (prøv selv med Tab-tasten).
- Teksten skal være lett å lese (størrelse, linjeavstand og skrifttype).

### Opphavsrett og kilder
- Bruk bare bilder, ikoner, skrifttyper og annet innhold du har lov til å bruke. Bruk egne bilder, eller innhold med lisenser som tillater det (for eksempel [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/) eller Creative Commons).
- Oppgi kilder der det trengs, for eksempel i `footer` eller i README-filen.
- Tenk over hva du deler om deg selv. Dette er en offentlig nettside.

### Git og GitHub Pages
- Prosjektet skal ligge i et eget repo på GitHub, og være publisert med **GitHub Pages**.
- Du skal jobbe jevnlig med **commit og push**, med commit-meldinger som forteller hva du har gjort (for eksempel «Lagt til grid på prosjektsiden», ikke «endringer»).
- Du må forstå sammenhengen mellom filene på din maskin, repoet på GitHub og den publiserte nettsiden.

### Planlegging og dokumentasjon
- Bruk **Figma-designet** du laget i teknologiforståelse som utgangspunkt for nettsiden. Ta skjermbilder av designet og legg dem i repoet, for eksempel i en mappe som heter `skisser/`.
- Lag en `README.md` i repoet ditt med:
  - Lenke til den publiserte nettsiden
  - Skjermbilder av Figma-designet ditt
  - Hva du eventuelt har endret fra designet til den ferdige nettsiden, og hvorfor
  - En kort beskrivelse av designvalgene dine (farger, skrifttyper, layout) og hvorfor du valgte dem
  - Kilder til bilder, kode og inspirasjon du har brukt

### JavaScript og AI
- JavaScript er ikke et krav, men det er lov å bruke dersom du forstår det du har laget.
- Du kan bruke kode du finner andre steder og ta hjelp av AI, men **du må forstå og kunne forklare all koden** på nettsiden din. Oppgi hvor du har hentet inspirasjon og kode fra.

---

## Vurdering: fagsamtale

Etter arbeidsperioden skal du ha en **fagsamtale** med faglærer. Nettsiden trenger ikke å være helt ferdig, men du må kunne vise hva du har gjort.

I fagsamtalen skal du:
1. **Vise frem** nettsiden og fortelle kort om den.
2. **Forklare** hva du har gjort, hvordan og hvorfor. Både koden og designvalgene.
3. **Gjøre endringer** foran faglærer, for eksempel:
   - Endre layouten i en seksjon med Flexbox eller Grid
   - Legge til en ny underside og koble den til navigasjonen
   - Rette en feil eller forbedre noe som ikke oppfyller kravene til universell utforming
   - Gjøre en del av siden mer tilpasset mobil
   - Committe og pushe endringen, og vise at den blir publisert

**Tips:** Lag heller en enklere nettside som du forstår godt, enn en avansert nettside du ikke klarer å forklare.

---

## Kompetansemål

Oppgaven dekker disse kompetansemålene fra [Vg1 informasjonsteknologi og medieproduksjon](https://www.udir.no/lk20/ikm01-01/kompetansemaal-og-vurdering/kv236?lang=nob) (konseptutvikling og programmering). Eleven skal kunne:

| # | Kompetansemål |
|---|---|
| **KM1** | anvende regelverk for bruk og formidling av innhold i egen produksjon og reflektere over ansvar og etikk knyttet til bruk og formidling av innhold i egen produksjon |
| **KM2** | utforske og beskrive sammenhenger mellom løsninger, kundens behov og brukernes forutsetninger og erfaringer |
| **KM5** | bruke oppmerkingsspråk og stilsett i ulike produksjoner |
| **KM6** | visualisere og utvikle konsepter og ideer tilpasset ulike plattformer |
| **KM8** | bruke prinsipper for feilsøking og retting i arbeid med programmering |
| **KM9** | bruke dokumentasjon og dokumentere faglige prosesser |

---

## Vurderingskriterier for høy måloppnåelse

### 1. HTML og struktur (KM5)
- HTML-koden er gjennomgående semantisk. Du bruker riktige elementer for innholdet, og `div` bare der ingen semantiske elementer passer.
- Overskriftene har en logisk rekkefølge (én `h1` per side, deretter `h2`, `h3` uten å hoppe over nivåer).
- Koden validerer uten feil, har konsekvente innrykk og er lett å lese.
- Filer og mapper er ryddig og logisk organisert, med gode filnavn og riktige relative filstier.
- Du kan forklare DOM-en og hvordan strukturen i HTML-en henger sammen med hvordan siden blir stylet.

### 2. CSS, layout og design (KM5, KM6)
- Du bruker både Flexbox og Grid på en hensiktsmessig måte, og kan begrunne hvorfor du valgte det ene eller det andre i ulike deler av siden.
- CSS-koden er ryddig og gjenbrukbar (for eksempel klasser framfor gjentatte regler, felles stilark for felles elementer).
- Du forstår og kan forklare boksmodellen, selektorer og hvilken regel som «vinner» når flere regler gjelder.
- Nettsiden er tilpasset ulike skjermstørrelser og fungerer godt på både mobil og PC.
- Hovedsiden har et profesjonelt og helhetlig uttrykk. Undersidene viser kreativitet og variasjon, samtidig som helheten henger sammen.
- Nettsiden bygger tydelig på Figma-designet ditt, og du kan forklare hvordan ideen utviklet seg fra design til ferdig nettside, og begrunne eventuelle endringer.

### 3. Navigasjon og brukeropplevelse (KM2, KM6)
- Navigasjonen er tydelig, konsekvent og lik på alle sider, og det er alltid lett å komme tilbake til hovedsiden.
- Du kan forklare hvem nettsiden er laget for (for eksempel en arbeidsgiver), og hvordan det har påvirket innhold og design.
- Du kan begrunne designvalgene dine (farger, skrifttyper, layout, bilder) ut fra målgruppen og hva nettsiden skal formidle.

### 4. Universell utforming (KM2)
- Tekst og bakgrunn har god kontrast (minst 4,5:1 for vanlig tekst), og du har sjekket dette med et verktøy.
- Alle bilder har beskrivende og meningsfulle `alt`-tekster. Bilder som bare er pynt, har tom `alt`.
- Lenketekster er beskrivende, og hele siden kan brukes med tastatur.
- Du kan forklare hvorfor universell utforming er viktig, og hvem som har nytte av det.

### 5. Opphavsrett og etikk (KM1)
- Alt innhold du ikke har laget selv, er brukt lovlig og har kildehenvisning.
- Du kan forklare forskjellen på ulike lisenser (for eksempel Creative Commons) og hva du har lov til å bruke.
- Du har gjort bevisste valg om hvilke personopplysninger og bilder du deler på en offentlig nettside, og kan begrunne dem.

### 6. Git, GitHub Pages og dokumentasjon (KM9)
- Nettsiden er publisert og fungerer på GitHub Pages.
- Commit-historikken viser jevnlig arbeid gjennom hele perioden, med meningsfulle commit-meldinger.
- Du forstår og kan forklare arbeidsflyten: endre filer lokalt, commit, push og publisering. Du kan forklare forskjellen på commit og push.
- `README.md` er godt strukturert med markdown (overskrifter, lister, lenker, bilder), og inneholder skjermbilder av Figma-designet, designvalg og kilder.

### 7. Fagsamtale, feilsøking og forståelse (KM5, KM8)
- Du forklarer koden din selvstendig og med riktige faguttrykk (element, attributt, selektor, egenskap, forelder/barn og så videre).
- Du gjør endringer i koden foran faglærer på en trygg og selvstendig måte.
- Du feilsøker systematisk, for eksempel med utviklerverktøyene i nettleseren (inspisere elementer, se overstyrte regler, teste mobilvisning) og validatoren.
- Du kan reflektere over hva som fungerte bra, hva som var utfordrende, og hva du ville gjort annerledes.

---

**Kort oppsummert:** Høy måloppnåelse handler om at du har laget en ryddig, tilgjengelig og gjennomtenkt nettside, og at du **forstår og kan forklare** hva du har gjort, hvorfor og hvordan.
