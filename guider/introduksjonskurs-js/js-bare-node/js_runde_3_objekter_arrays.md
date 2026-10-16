# Objekter i JavaScript

Denne teksten forklarer det du trenger å vite om objekter for å løse oppgavene i runde 3. Du kan lese den før du begynner, eller gå tilbake til den når du står fast.

Alle eksemplene kan du kjøre selv. Lag en fil, for eksempel `objekt-test.js`, lim inn koden og kjør den med `node objekt-test.js`. Endre gjerne på koden og se hva som skjer.

---

## 1. Hvorfor trenger vi objekter?

Tenk deg at du vil lagre informasjon om en film. Med vanlige variabler kan det se slik ut:

```js
const filmTittel = "Inside Out 2";
const filmÅr = 2024;
const filmLengde = 96;
```

Det fungerer, men de tre variablene henger ikke sammen. Skal du lagre ti filmer, trenger du tretti variabler.

Et **objekt** samler alt som hører sammen på ett sted:

```js
const film = {
  tittel: "Inside Out 2",
  år: 2024,
  lengde: 96
};
```

Nå er `film` én variabel som inneholder tre opplysninger.

---

## 2. Slik lager du et objekt

```js
const film = {
  tittel: "Inside Out 2",
  år: 2024,
  lengde: 96
};
```

- Et objekt starter med `{` og slutter med `}`.
- Inni står det **egenskaper**. Hver egenskap har et **navn** og en **verdi**: `tittel: "Inside Out 2"`.
- Mellom navnet og verdien står det **kolon** `:`.
- Mellom egenskapene står det **komma** `,`. Etter den siste trenger du ikke komma.

Du kan skrive alt på én linje, eller én egenskap per linje. Det betyr det samme:

```js
const film = { tittel: "Inside Out 2", år: 2024, lengde: 96 };
```

Er det mange egenskaper, er det lettere å lese når hver står på sin egen linje.

### Regler for navnene

- Ingen mellomrom. Skriv `favorittFarge`, ikke `favoritt farge`.
- Store og små bokstaver er forskjellige. `navn` og `Navn` er to *ulike* egenskaper.

### Hva kan verdiene være?

Alt du kan lagre i en variabel, kan du også lagre i en egenskap:

```js
const elev = {
  navn: "Jonas",            // tekst
  alder: 16,                // tall
  harSykkel: true,          // true eller false
  fag: ["norsk", "matte"]   // en array
};
```

---

## 3. Hente ut en verdi

Du henter en egenskap med **punktum**: først navnet på objektet, så punktum, så navnet på egenskapen.

```js
const film = { tittel: "Inside Out 2", år: 2024, lengde: 96 };

console.log(film.tittel);   // Inside Out 2
console.log(film.lengde);   // 96
```

Du kan bruke verdiene akkurat som vanlige variabler, for eksempel i en tekst med backticks:

```js
console.log(`${film.tittel} kom ut i ${film.år} og varer i ${film.lengde} minutter.`);
// Inside Out 2 kom ut i 2024 og varer i 96 minutter.
```

Eller i et regnestykke:

```js
const timer = film.lengde / 60;
console.log(timer);   // 1.6
```

### Når egenskapen ikke finnes: `undefined`

```js
console.log(film.regissør);   // undefined
console.log(film.Tittel);     // undefined – stor T!
```

`undefined` betyr «det finnes ingenting her». Får du `undefined` når du ikke venter det, så sjekk navnet på egenskapen bokstav for bokstav.

### Skriv ut hele objektet

```js
console.log(film);
// { tittel: 'Inside Out 2', 'år': 2024, lengde: 96 }
```

Node setter av og til hermetegn rundt navn med æ, ø eller å. Det er helt i orden.

---

## 4. Endre og legge til egenskaper

Du endrer en egenskap ved å gi den en ny verdi med `=`:

```js
const mobil = { merke: "Samsung", batteri: 80 };

mobil.batteri = 45;
console.log(mobil);   // { merke: 'Samsung', batteri: 45 }
```

Finnes ikke egenskapen fra før, blir den laget:

```js
mobil.farge = "svart";
console.log(mobil);   // { merke: 'Samsung', batteri: 45, farge: 'svart' }
```

### Regne med den gamle verdien

Ofte vil du ikke skrive inn et helt nytt tall, men endre det som allerede står der. Da bruker du den gamle verdien på høyre side:

```js
mobil.batteri = mobil.batteri - 10;   // brukte 10 %
mobil.batteri = mobil.batteri + 30;   // ladet 30 %
console.log(mobil.batteri);           // 65
```

Les linja fra høyre mot venstre: *ta det som står i `mobil.batteri`, trekk fra 10, og lagre svaret i `mobil.batteri`*.

Det finnes kortere skrivemåter som gjør nøyaktig det samme:

```js
mobil.batteri -= 10;   // samme som mobil.batteri = mobil.batteri - 10
mobil.batteri += 30;   // samme som mobil.batteri = mobil.batteri + 30
```

---

## 5. `const` og objekter

Dette kan virke rart første gang:

```js
const mobil = { merke: "Samsung", batteri: 80 };

mobil.batteri = 45;        // ✅ lov
mobil.farge = "svart";     // ✅ lov

mobil = { merke: "iPhone", batteri: 100 };   // ❌ TypeError: Assignment to constant variable.
```

Tenk på variabelen som en **lapp** med navnet `mobil` som er festet til én bestemt boks. `const` betyr at lappen alltid sitter på *den samme boksen*. Men du har lov til å endre det som ligger *inni* boksen.

- `mobil.batteri = 45` endrer innholdet i boksen. Det er lov.
- `mobil = { ... }` prøver å flytte lappen til en helt ny boks. Det er ikke lov med `const`.

---

## 6. En array inni et objekt

En egenskap kan inneholde en array. Da får du tak i arrayen med punktum, og så bruker du den som en helt vanlig array:

```js
const spiller = {
  navn: "Mia",
  poeng: [12, 8, 15, 10]
};

console.log(spiller.poeng);          // [ 12, 8, 15, 10 ]
console.log(spiller.poeng[0]);       // 12 – den første
console.log(spiller.poeng.length);   // 4

spiller.poeng.push(9);               // legger til en ny poengsum
```

Overalt der du før skrev navnet på en array, for eksempel `poeng`, skriver du nå `spiller.poeng`. Det gjelder også i løkker:

```js
for (let i = 0; i < spiller.poeng.length; i++) {
  console.log(spiller.poeng[i]);
}
```

---

## 7. En array med objekter

Dette er det viktigste i hele runde 3. En array kan inneholde mange objekter som har de samme egenskapene:

```js
const filmer = [
  { tittel: "Inside Out 2", år: 2024, lengde: 96 },
  { tittel: "Frost",        år: 2013, lengde: 102 },
  { tittel: "Shrek",        år: 2001, lengde: 90 }
];
```

Det ligner på en tabell: hvert objekt er en **rad**, og hver egenskap er en **kolonne**. Prøv dette:

```js
console.table(filmer);
```

```
┌─────────┬────────────────┬──────┬────────┐
│ (index) │ tittel         │ år   │ lengde │
├─────────┼────────────────┼──────┼────────┤
│ 0       │ 'Inside Out 2' │ 2024 │ 96     │
│ 1       │ 'Frost'        │ 2013 │ 102    │
│ 2       │ 'Shrek'        │ 2001 │ 90     │
└─────────┴────────────────┴──────┴────────┘
```

### Hente ut én ting: først plassen, så egenskapen

```js
console.log(filmer[1]);          // { tittel: 'Frost', 'år': 2013, lengde: 102 }
console.log(filmer[1].tittel);   // Frost
```

Les `filmer[1].tittel` fra venstre mot høyre:

| Kode | Hva det er |
|---|---|
| `filmer` | Hele arrayen, med alle filmene. |
| `filmer[1]` | Ett objekt: filmen på plass 1. |
| `filmer[1].tittel` | Tittelen til filmen på plass 1. |

En vanlig feil er å skrive `filmer.tittel`. Det gir `undefined`, fordi *arrayen* ikke har noen tittel. Det er bare hvert enkelt objekt som har det.

### Endre ett objekt i arrayen

```js
filmer[2].lengde = 95;
```

---

## 8. Løkker gjennom en array med objekter

Løkka er den samme som du har brukt før. Forskjellen er at `filmer[i]` nå er et helt objekt, og du henter egenskapene med punktum:

```js
for (let i = 0; i < filmer.length; i++) {
  console.log(`${filmer[i].tittel} (${filmer[i].år})`);
}
// Inside Out 2 (2024)
// Frost (2013)
// Shrek (2001)
```

Blir det mye `filmer[i]`, kan du lage en hjelpevariabel inni løkka. Det gjør koden lettere å lese:

```js
for (let i = 0; i < filmer.length; i++) {
  const film = filmer[i];
  console.log(`${film.tittel} varer i ${film.lengde} minutter`);
}
```

---

## 9. Fire mønstre du kommer til å bruke hele tiden

Nesten alle oppgavene i Del 4 er en av disse fire, eller en blanding.

### Mønster 1: Plukk ut noen med `if`

Skriv bare ut filmene som er lengre enn 92 minutter:

```js
for (let i = 0; i < filmer.length; i++) {
  if (filmer[i].lengde > 92) {
    console.log(filmer[i].tittel);
  }
}
// Inside Out 2
// Frost
```

Tekst sammenlignes med `===`, akkurat som tall: `if (filmer[i].tittel === "Shrek")`.

### Mønster 2: Summer

Hvor lang tid tar det å se alle filmene?

```js
let total = 0;                          // 1. utenfor løkka: start på 0
for (let i = 0; i < filmer.length; i++) {
  total = total + filmer[i].lengde;     // 2. inni løkka: legg til
}
console.log(`Totalt ${total} minutter`); // 3. etter løkka: skriv ut
// Totalt 288 minutter
```

Vil du ha gjennomsnittet, deler du summen på antallet: `total / filmer.length`.

### Mønster 3: Tell

Hvor mange filmer kom ut etter 2010?

```js
let antall = 0;
for (let i = 0; i < filmer.length; i++) {
  if (filmer[i].år > 2010) {
    antall = antall + 1;
  }
}
console.log(antall);   // 2
```

Å telle er nesten det samme som å summere. Forskjellen er at du legger til **1**, og bare når `if`-en stemmer.

### Mønster 4: Finn den største (eller minste)

Hvilken film er lengst?

```js
let lengst = filmer[0];                    // start med den første

for (let i = 1; i < filmer.length; i++) {
  if (filmer[i].lengde > lengst.lengde) {  // er denne lengre enn den lengste så langt?
    lengst = filmer[i];                    // da er det den nye lengste
  }
}

console.log(`Lengst: ${lengst.tittel} med ${lengst.lengde} minutter`);
// Lengst: Frost med 102 minutter
```

Fordi `lengst` er et helt objekt, har du både tittelen og lengden når løkka er ferdig. Vil du finne den *minste*, snur du bare `>` til `<`.

### Husk: hvor står koden?

| Hvor | Hva som står der |
|---|---|
| **Før** løkka | Variabler som skal huske noe gjennom hele løkka: `let total = 0;` |
| **Inni** løkka | Det som skal skje for *hvert* objekt. |
| **Etter** løkka | Det som skal skje *én gang* når du har sett på alle, for eksempel å skrive ut svaret. |

Står `console.log` inni løkka når den skulle stått etter, får du én utskrift per objekt i stedet for én til slutt.

---

## 10. Hakeparenteser i stedet for punktum (for bonusoppgavene)

Det finnes en annen måte å hente en egenskap på:

```js
const film = { tittel: "Frost", år: 2013 };

console.log(film.tittel);      // Frost
console.log(film["tittel"]);   // Frost – betyr det samme
```

Hvorfor trenger vi to måter? Med hakeparenteser kan du bruke en **variabel** som navn:

```js
const hvilken = "år";
console.log(film[hvilken]);   // 2013 – henter egenskapen som heter "år"
console.log(film.hvilken);    // undefined – leter etter en egenskap som heter "hvilken"
```

Dette trenger du bare i bonusoppgavene. I alle de vanlige oppgavene holder det med punktum.

---

## 11. Vanlige feil

| Det du ser | Hva som er galt |
|---|---|
| `undefined` når du henter en egenskap | Feil navn. Sjekk stavemåten, og sjekk store og små bokstaver. |
| `undefined` når du skriver `filmer.tittel` | Du glemte plassen. Det skal være `filmer[i].tittel`. |
| `SyntaxError: Unexpected identifier` | Det mangler sannsynligvis et komma mellom to egenskaper. Se på linja *før* den Node peker på. |
| `TypeError: Assignment to constant variable.` | Du prøvde å gi en `const`-variabel et helt nytt objekt. Endre egenskapene i stedet, eller bruk `let`. |
| `TypeError: Cannot read properties of undefined` | Du prøvde å hente en egenskap fra noe som ikke finnes, for eksempel `filmer[3].tittel` når det bare er tre filmer. Sjekk løkka: står det `<` eller `<=`? |
| Mange utskrifter når du ville ha én | `console.log` står inni løkka. Flytt den ut. |

---

## Ordliste

| Kode | Betyr |
|---|---|
| `{ tittel: "Frost", år: 2013 }` | Et objekt med to egenskaper. |
| egenskap | Et navn og en verdi inni et objekt, for eksempel `år: 2013`. |
| `film.tittel` | Henter egenskapen `tittel` fra objektet `film`. |
| `film.år = 2014;` | Endrer egenskapen, eller lager den hvis den ikke fantes. |
| `film.lengde = film.lengde + 5;` | Regner ut ny verdi fra den gamle. |
| `undefined` | Egenskapen (eller plassen) finnes ikke. |
| `const` med objekt | Du kan endre innholdet, men ikke bytte ut hele objektet. |
| `spiller.poeng[0]` | Det første elementet i arrayen som ligger i egenskapen `poeng`. |
| `filmer[1].tittel` | Tittelen til objektet på plass 1 i arrayen. |
| `console.table(filmer)` | Viser en array med objekter som en tabell. |
| `film["tittel"]` | Det samme som `film.tittel`, men navnet kan være en variabel. |
