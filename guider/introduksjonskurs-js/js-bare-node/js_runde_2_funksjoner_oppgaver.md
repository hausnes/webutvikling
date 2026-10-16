# Funksjoner – oppgaver

Dette er oppgaver om funksjoner, både med og uten parametere. Du trenger ikke gjøre alle. Plukk de som passer for deg, og hopp gjerne over noen hvis de er for lette.

Vanskelighetsgrad er merket med stjerner:
- ⭐ Grunnleggende – rett fram.
- ⭐⭐ Litt mer å tenke på.
- ⭐⭐⭐ Utfordring – du må kombinere flere ting.

**Ikke bli sittende fast.** Blir ⭐⭐⭐ for tungt, så hopp videre til neste del.

**Slik bruker du dokumentet:**
- Hver del starter med **Slik ser det ut**: en kort kodebit som viser det du trenger. Gå tilbake til den når du står fast.
- Under hver oppgave står **Forventet svar**. Det er det programmet ditt skal skrive ut. Stemmer det, er du ferdig.
- Står du fast, kan du åpne **💡 Hint** ved å klikke på trekanten. Hjelper ikke hintet, så spør sidemannen, og så læreren.
- Hver oppgave har også et **✅ Løsningsforslag**. Prøv selv først, og bruk hintet før du åpner løsningen. Har du fått det til, kan du sammenligne: det finnes ofte flere riktige måter å skrive koden på.
- Vil du lese mer om funksjoner før du starter, finner du en forklaring i [Funksjoner i JavaScript](js_runde_2_funksjoner.md).

**Kom i gang:**

1. Lag en ny mappe som heter `funksjoner`.
2. Åpne VS Code. Velg **File → Open Folder**, og velg mappa `funksjoner`.
3. Lag en ny fil for hver oppgave. Filnavnet står i oppgaven. Ikke slett noe – alle filene blir biblioteket ditt.
4. Kjør fila med `node` og filnavnet, for eksempel `node 01-hei.js`

---

## Del 1 – Funksjoner uten parameter

En funksjon er en bit kode som har fått et navn. Først *lager* du den. Så *kaller* du den, og da blir koden kjørt.

> **Slik ser det ut**
>
> ```js
> function strek() {               // lager funksjonen – ingenting skjer ennå
>   console.log("----------");
> }
>
> strek();                         // kaller funksjonen – nå skrives streken ut
> console.log("Hei!");
> strek();                         // kaller den en gang til
> ```
>
> ```
> ----------
> Hei!
> ----------
> ```

### Oppgave 1 – Si hei ⭐

**Lag fila:** `01-hei.js`

Lag en funksjon som heter `siHei`. Den skal skrive ut to linjer: `Hei!` og `Velkommen til JavaScript.`

Kall funksjonen tre ganger.

**Forventet svar:**

```
Hei!
Velkommen til JavaScript.
Hei!
Velkommen til JavaScript.
Hei!
Velkommen til JavaScript.
```

<details>
<summary>💡 Hint</summary>

Begge `console.log`-linjene skal stå *inni* krøllparentesene til funksjonen. Kallene, `siHei();`, skal stå *under* funksjonen, utenfor krøllparentesene.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function siHei() {
  console.log("Hei!");
  console.log("Velkommen til JavaScript.");
}

siHei();
siHei();
siHei();
```

</details>

### Oppgave 2 – Dagens meny ⭐

**Lag fila:** `02-meny.js`

Lag en funksjon som heter `visMeny`. Den skal skrive ut menyen i kantina:

```
--- Dagens meny ---
Pizza: 45 kr
Taco: 50 kr
Suppe: 35 kr
```

Skriv `Velkommen til kantina!` før menyen, og `Hva vil du ha?` etter. Bruk funksjonen.

Lag til slutt en funksjon til, `strek`, som skriver ut `-------------------`. Bruk den både før og etter menyen.

**Forventet svar:**

```
Velkommen til kantina!
-------------------
--- Dagens meny ---
Pizza: 45 kr
Taco: 50 kr
Suppe: 35 kr
-------------------
Hva vil du ha?
```

<details>
<summary>💡 Hint</summary>

Lag begge funksjonene øverst i fila. Etterpå skriver du «programmet» nedover: én `console.log`, så `strek();`, så `visMeny();`, og så videre.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function strek() {
  console.log("-------------------");
}

function visMeny() {
  console.log("--- Dagens meny ---");
  console.log("Pizza: 45 kr");
  console.log("Taco: 50 kr");
  console.log("Suppe: 35 kr");
}

console.log("Velkommen til kantina!");
strek();
visMeny();
strek();
console.log("Hva vil du ha?");
```

Blir menyen endret, trenger du bare å endre den ett sted, uansett hvor mange ganger den blir vist.

</details>

### Oppgave 3 – Gjett utskriften ⭐⭐

**Lag fila:** `03-gjett.js`

**Ikke kjør koden ennå.** Skriv den inn, og skriv det du tror kommer ut som kommentarer nederst i fila. Kjør den etterpå, og se om du hadde rett.

```js
console.log("A");

function hemmelig() {
  console.log("B");
}

console.log("C");
hemmelig();
hemmelig();
console.log("D");
```

<details>
<summary>💡 Hint</summary>

Maskinen leser ovenfra og ned. Men når den kommer til `function hemmelig()`, *husker* den bare funksjonen. Når blir `B` egentlig skrevet ut?

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```
A
C
B
B
D
```

Funksjonen står mellom `A` og `C`, men den blir ikke kjørt der. `B` blir skrevet ut først når funksjonen blir *kalt*, og den blir kalt to ganger.

</details>

### Oppgave 4 – Finn feilene ⭐⭐

**Lag to filer:**
- `04a-ingenting.js`
- `04b-feilmelding.js`

Begge programmene skal skrive ut `Ding dong!`, men begge har én feil. Kjør dem, se hva som skjer, og fiks dem.

**4a** skriver ikke ut noe som helst, og gir heller ingen feilmelding.

```js
function ringPåDøra() {
  console.log("Ding dong!");
}

ringPåDøra;
```

**4b** krasjer.

```js
function ringPåDøra() {
  console.log("Ding dong!");
}

ringpådøra();
```

**Forventet svar:** `Ding dong!` fra begge filene.

<details>
<summary>💡 Hint til 4a</summary>

Se nøye på den siste linja. Hva mangler for at funksjonen skal bli *kalt*?

</details>

<details>
<summary>💡 Hint til 4b</summary>

Les den siste linja i feilmeldingen. Sammenlign navnet der med navnet på funksjonen, bokstav for bokstav.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

**4a**

```js
function ringPåDøra() {
  console.log("Ding dong!");
}

ringPåDøra();
```

Uten `()` blir funksjonen ikke kalt. Maskinen ser bare navnet og gjør ingenting med det.

**4b**

```js
function ringPåDøra() {
  console.log("Ding dong!");
}

ringPåDøra();
```

Feilmeldingen var `ReferenceError: ringpådøra is not defined`. JavaScript skiller mellom store og små bokstaver, så `ringpådøra` og `ringPåDøra` er to forskjellige navn.

</details>

---

## Del 2 – Funksjoner med parametere

En parameter gjør at funksjonen kan gjøre *nesten* det samme hver gang. Du sender inn en verdi når du kaller funksjonen.

> **Slik ser det ut**
>
> ```js
> function hilsTilDyr(dyr) {          // dyr er en parameter
>   console.log(`Hei, ${dyr}!`);
> }
>
> hilsTilDyr("katt");                 // "katt" er et argument – skriver Hei, katt!
> hilsTilDyr("hund");                 // Hei, hund!
>
> function areal(bredde, høyde) {     // to parametere, skilt med komma
>   console.log(bredde * høyde);
> }
>
> areal(4, 3);                        // 12 – 4 går til bredde, 3 går til høyde
> ```

### Oppgave 5 – Hils på alle ⭐

**Lag fila:** `05-hils.js`

Lag en funksjon `hils` med én parameter, `navn`. Den skal skrive ut `Hei, ` og navnet, og et utropstegn.

Kall funksjonen tre ganger, med tre forskjellige navn.

**Forventet svar:** for eksempel

```
Hei, Ada!
Hei, Jonas!
Hei, Sara!
```

<details>
<summary>💡 Hint</summary>

Navnet på parameteren skrives i parentesen når du lager funksjonen: `function hils(navn)`. Inni funksjonen bruker du `navn` som en helt vanlig variabel, for eksempel i en tekst med backticks og `${ }`.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function hils(navn) {
  console.log(`Hei, ${navn}!`);
}

hils("Ada");
hils("Jonas");
hils("Sara");
```

Hver gang du kaller `hils`, får `navn` en ny verdi.

</details>

### Oppgave 6 – Gangetabellen ⭐

**Lag fila:** `06-gangetabell.js`

Lag en funksjon `gangetabell` med én parameter, `tall`. Den skal skrive ut gangetabellen for tallet, fra 1 til 10.

Kall den med 7. Prøv etterpå med andre tall.

**Forventet svar:**

```
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70
```

<details>
<summary>💡 Hint</summary>

Du trenger en `for`-løkke *inni* funksjonen som teller fra 1 til og med 10. I hver runde ganger du `tall` med telleren.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function gangetabell(tall) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${tall} x ${i} = ${tall * i}`);
  }
}

gangetabell(7);
```

Én funksjon gir deg alle gangetabellene. Prøv `gangetabell(3);` eller `gangetabell(13);`.

</details>

### Oppgave 7 – Rekkefølgen betyr noe ⭐⭐

**Lag fila:** `07-presenter.js`

```js
function presenter(navn, alder) {
  console.log(`${navn} er ${alder} år.`);
}

presenter("Ada", 16);
presenter(17, "Jonas");
presenter("Sara");
```

**Ikke kjør koden ennå.** Skriv det du tror kommer ut som kommentarer bak hvert kall. Kjør den etterpå.

Fiks så de to siste kallene, slik at de skriver ut noe som gir mening. Sara er 15 år.

**Forventet svar etter at du har fikset:**

```
Ada er 16 år.
Jonas er 17 år.
Sara er 15 år.
```

<details>
<summary>💡 Hint</summary>

Maskinen vet ikke hva som er et navn og hva som er en alder. Den gir det første argumentet til den første parameteren og det andre til den andre. Hva skjer med en parameter som ikke får noe argument i det hele tatt?

</details>

<details>
<summary>✅ Løsningsforslag</summary>

Før du fikser:

```js
presenter("Ada", 16);     // Ada er 16 år.
presenter(17, "Jonas");   // 17 er Jonas år.
presenter("Sara");        // Sara er undefined år.
```

Etter at du har fikset:

```js
function presenter(navn, alder) {
  console.log(`${navn} er ${alder} år.`);
}

presenter("Ada", 16);
presenter("Jonas", 17);
presenter("Sara", 15);
```

Argumentene fordeles i rekkefølge. Mangler et argument, blir parameteren `undefined`.

</details>

### Oppgave 8 – Finn feilen: tallet som ikke finnes ⭐⭐

**Lag fila:** `08-dobbel.js`

Denne funksjonen skal skrive ut det dobbelte av tallet du sender inn, men programmet krasjer. Finn feilen, og fiks den.

```js
function skrivDobbel(tall) {
  console.log(tal * 2);
}

skrivDobbel(5);
skrivDobbel(21);
```

**Forventet svar:**

```
10
42
```

<details>
<summary>💡 Hint</summary>

Les den siste linja i feilmeldingen. Hvilket navn klager den på? Sammenlign det med navnet på parameteren.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function skrivDobbel(tall) {
  console.log(tall * 2);
}

skrivDobbel(5);
skrivDobbel(21);
```

Feilmeldingen var `ReferenceError: tal is not defined`. Parameteren heter `tall`, men inni funksjonen sto det `tal`. Navnet må være helt likt.

</details>

### Oppgave 9 – Stjernetrapp ⭐⭐⭐

**Lag fila:** `09-stjerner.js`

1. Lag en funksjon `stjerner` med én parameter, `antall`. Den skal skrive ut så mange stjerner som `antall` sier, *på én linje*. `stjerner(4)` skal skrive `****`.
2. Bruk en løkke til å kalle funksjonen med 1, 2, 3, 4 og 5, slik at du får en trapp.

**Forventet svar:**

```
*
**
***
****
*****
```

<details>
<summary>💡 Hint</summary>

Hver `console.log` gir en ny linje, så du kan ikke skrive ut én stjerne om gangen. Lag en tom tekst (`""`) inni funksjonen, og bruk en løkke til å legge til én `"*"` om gangen. Skriv ut teksten *etter* løkka.

Til del 2 trenger du en løkke *utenfor* funksjonen, der du kaller `stjerner(i)`.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function stjerner(antall) {
  let linje = "";
  for (let i = 0; i < antall; i++) {
    linje = linje + "*";
  }
  console.log(linje);
}

for (let i = 1; i <= 5; i++) {
  stjerner(i);
}
```

Det finnes to løkker her, men de er helt adskilt. Den ytre løkka bestemmer *hvor mange linjer* det blir. Løkka inni funksjonen bygger opp *én linje*. Begge kan hete `i`, fordi `i` inni funksjonen bare finnes der.

</details>

---

## Del 3 – return: få et svar tilbake

Så langt har funksjonene skrevet ut noe. Med `return` gir funksjonen et svar *tilbake*, så du kan lagre det eller regne videre med det.

> **Slik ser det ut**
>
> ```js
> function dobbel(tall) {
>   return tall * 2;                  // gir svaret tilbake
> }
>
> const svar = dobbel(5);             // svar blir 10
> console.log(svar);                  // 10
> console.log(dobbel(3) + 1);         // 7 – dobbel(3) blir byttet ut med 6
> ```
>
> - `console.log` *viser* et svar i terminalen.
> - `return` *gir* svaret tilbake til programmet, så du kan bruke det videre.
> - En funksjon uten `return` gir tilbake `undefined`.

### Oppgave 10 – Kvadrat ⭐

**Lag fila:** `10-kvadrat.js`

Lag en funksjon `kvadrat` med én parameter. Den skal *returnere* tallet ganget med seg selv. Funksjonen skal ikke skrive ut noe selv.

Bruk funksjonen til å skrive ut:
1. kvadratet av 3
2. kvadratet av 12
3. kvadratet av 2 pluss kvadratet av 3

**Forventet svar:**

```
9
144
13
```

<details>
<summary>💡 Hint</summary>

Inni funksjonen skal det stå `return`, ikke `console.log`. Selve utskriften gjør du utenfor, for eksempel `console.log(kvadrat(3));`. I del 3 kan du legge sammen to funksjonskall med `+`.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function kvadrat(tall) {
  return tall * tall;
}

console.log(kvadrat(3));
console.log(kvadrat(12));
console.log(kvadrat(2) + kvadrat(3));
```

Del 3 går bare fordi funksjonen bruker `return`. Med `console.log` inni funksjonen hadde du ikke kunnet legge sammen svarene.

</details>

### Oppgave 11 – Celsius til Fahrenheit ⭐

**Lag fila:** `11-fahrenheit.js`

I USA måler de temperatur i Fahrenheit. Du regner om fra Celsius slik: gang med 9, del på 5 og legg til 32.

Lag en funksjon `tilFahrenheit` som tar imot grader Celsius og returnerer grader Fahrenheit. Bruk den til å skrive ut en setning for 0, 100 og 20 grader.

**Forventet svar:**

```
0 °C er 32 °F
100 °C er 212 °F
20 °C er 68 °F
```

**Ekstra:** Prøv `tilFahrenheit(-40)`. Hva er spesielt med svaret?

<details>
<summary>💡 Hint</summary>

Regnestykket i funksjonen er `celsius * 9 / 5 + 32`. Du kan sette et funksjonskall rett inn i en tekst: `` `${tilFahrenheit(0)} °F` ``.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function tilFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

console.log(`0 °C er ${tilFahrenheit(0)} °F`);
console.log(`100 °C er ${tilFahrenheit(100)} °F`);
console.log(`20 °C er ${tilFahrenheit(20)} °F`);
```

−40 °C er −40 °F. Det er den eneste temperaturen der begge skalaene viser det samme tallet.

</details>

### Oppgave 12 – Gjett: return eller console.log? ⭐⭐

**Lag fila:** `12-return-eller-log.js`

**Ikke kjør koden ennå.** Skriv det du tror kommer ut som kommentarer, og kjør den etterpå.

```js
function skrivTredobbel(tall) {
  console.log(tall * 3);
}

function giTredobbel(tall) {
  return tall * 3;
}

const a = skrivTredobbel(5);
const b = giTredobbel(5);

console.log(a);
console.log(b);
```

Hvor mange linjer blir skrevet ut? Hvorfor blir `a` og `b` forskjellige?

<details>
<summary>💡 Hint</summary>

Gå gjennom linjene én om gangen. Skriver `skrivTredobbel(5)` ut noe når den blir kalt? Gjør `giTredobbel(5)` det? Og hva gir en funksjon *tilbake* når den ikke har `return`?

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```
15
undefined
15
```

- Den første `15` kommer fra `console.log` inni `skrivTredobbel`, med en gang den blir kalt.
- `giTredobbel(5)` skriver ikke ut noe. Den gir bare `15` tilbake, og det havner i `b`.
- `skrivTredobbel` har ingen `return`, så den gir tilbake `undefined`. Derfor er `a` lik `undefined`.

`console.log` viser noe til *deg*. `return` gir noe tilbake til *programmet*.

</details>

### Oppgave 13 – Finn feilen: hvor ble prisen av? ⭐⭐

**Lag fila:** `13-moms.js`

Denne funksjonen skal regne ut prisen med 25 % moms, men programmet skriver `undefined`. Finn feilen, og fiks den.

```js
function prisMedMoms(pris) {
  const medMoms = pris * 1.25;
}

console.log(prisMedMoms(100));
console.log(prisMedMoms(40));
```

**Forventet svar:**

```
125
50
```

<details>
<summary>💡 Hint</summary>

Funksjonen regner ut riktig svar, men gjør den noe med det? Hva gir en funksjon tilbake når det ikke står `return` i den?

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function prisMedMoms(pris) {
  const medMoms = pris * 1.25;
  return medMoms;
}

console.log(prisMedMoms(100));
console.log(prisMedMoms(40));
```

Variabelen `medMoms` finnes bare inni funksjonen. Uten `return` blir svaret borte når funksjonen er ferdig. Du kan også skrive alt på én linje: `return pris * 1.25;`

</details>

### Oppgave 14 – Kiosken ⭐⭐

**Lag fila:** `14-kiosk.js`

Lag en funksjon `totalpris` med to parametere, `pris` og `antall`. Den skal returnere hva varene koster til sammen.

Du har 120 kr og vil kjøpe:
- 2 energidrikker til 25 kr
- 1 skolebolle til 20 kr
- 3 sjokolader til 18 kr

Bruk funksjonen til å regne ut hva alt koster til sammen. Skriv ut totalen. Har du nok penger, skriv `Du har råd!` og hvor mye du har igjen. Ellers skriv hvor mye du mangler.

**Forventet svar:**

```
Totalt: 124 kr
Du mangler 4 kr.
```

Endre pengene til 150. Da skal det stå `Du har råd! Du får 26 kr tilbake.`

<details>
<summary>💡 Hint</summary>

Kall `totalpris` én gang for hver vare, og legg sammen svarene: `totalpris(25, 2) + totalpris(20, 1) + ...`

Lag `let penger = 120;` øverst. Etterpå trenger du en `if` som sjekker om `penger` er større enn eller lik totalen.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function totalpris(pris, antall) {
  return pris * antall;
}

let penger = 120;

const total = totalpris(25, 2) + totalpris(20, 1) + totalpris(18, 3);
console.log(`Totalt: ${total} kr`);

if (penger >= total) {
  console.log(`Du har råd! Du får ${penger - total} kr tilbake.`);
} else {
  console.log(`Du mangler ${total - penger} kr.`);
}
```

</details>

---

## Del 4 – Funksjoner sammen med if, løkker og arrays

En funksjon kan inneholde alt du har lært: `if`, løkker og arrays. Og du kan kalle funksjoner inni løkker.

> **Slik ser det ut**
>
> ```js
> function erPartall(tall) {
>   if (tall % 2 === 0) {           // % gir resten etter deling
>     return true;
>   }
>   return false;                   // kommer bare hit hvis if-en ikke stemte
> }
>
> const tallene = [3, 8, 5];
> for (let i = 0; i < tallene.length; i++) {
>   if (erPartall(tallene[i])) {
>     console.log(`${tallene[i]} er et partall`);   // 8 er et partall
>   }
> }
> ```
>
> `return` avslutter funksjonen med en gang. Kode under en `return` som blir nådd, blir ikke kjørt.

### Oppgave 15 – Er du myndig? ⭐⭐

**Lag fila:** `15-myndig.js`

1. Lag en funksjon `erMyndig` med én parameter, `alder`. Den skal returnere `true` hvis alderen er 18 eller mer, og ellers `false`.
2. Gå gjennom denne arrayen med en løkke, og bruk funksjonen til å skrive ut en linje for hver alder:

```js
const aldre = [15, 18, 17, 21, 16];
```

**Forventet svar:**

```
15 år: ikke myndig
18 år: myndig
17 år: ikke myndig
21 år: myndig
16 år: ikke myndig
```

<details>
<summary>💡 Hint</summary>

Funksjonen skal ikke skrive ut noe. Den skal bare svare `true` eller `false` med `return`.

Inni løkka kan du skrive `if (erMyndig(aldre[i]))`. Funksjonskallet blir byttet ut med `true` eller `false`, og det er akkurat det en `if` trenger.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function erMyndig(alder) {
  if (alder >= 18) {
    return true;
  }
  return false;
}

const aldre = [15, 18, 17, 21, 16];

for (let i = 0; i < aldre.length; i++) {
  if (erMyndig(aldre[i])) {
    console.log(`${aldre[i]} år: myndig`);
  } else {
    console.log(`${aldre[i]} år: ikke myndig`);
  }
}
```

Funksjonen kan også skrives kortere: `return alder >= 18;`. Sammenligningen er allerede `true` eller `false`.

</details>

### Oppgave 16 – Karaktermaskinen ⭐⭐⭐

**Lag fila:** `16-karakter.js`

Lag en funksjon `karakter` som tar imot antall poeng på en prøve (0–100) og returnerer karakteren:

| Poeng | Karakter |
|---|---|
| 90 eller mer | 6 |
| 75–89 | 5 |
| 60–74 | 4 |
| 45–59 | 3 |
| 30–44 | 2 |
| under 30 | 1 |

Bruk funksjonen på alle poengsummene i denne arrayen:

```js
const poeng = [95, 40, 72, 18, 60];
```

**Forventet svar:**

```
95 poeng gir karakter 6
40 poeng gir karakter 2
72 poeng gir karakter 4
18 poeng gir karakter 1
60 poeng gir karakter 4
```

<details>
<summary>💡 Hint</summary>

Start med den høyeste karakteren: `if (poeng >= 90) { return 6; }`. Så sjekker du `>= 75`, og så videre nedover. Siden `return` avslutter funksjonen, kommer du bare videre til neste sjekk hvis den forrige ikke stemte. Til slutt trenger du en `return 1;` for alt som er igjen.

Pass på at 60 poeng gir 4 og ikke 3. Det er `>=` du trenger.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function karakter(poeng) {
  if (poeng >= 90) {
    return 6;
  }
  if (poeng >= 75) {
    return 5;
  }
  if (poeng >= 60) {
    return 4;
  }
  if (poeng >= 45) {
    return 3;
  }
  if (poeng >= 30) {
    return 2;
  }
  return 1;
}

const poeng = [95, 40, 72, 18, 60];

for (let i = 0; i < poeng.length; i++) {
  console.log(`${poeng[i]} poeng gir karakter ${karakter(poeng[i])}`);
}
```

Du kan også bruke `else if` hele veien nedover. Det gir samme svar.

</details>

### Oppgave 17 – Sum og snitt ⭐⭐⭐

**Lag fila:** `17-sum-snitt.js`

1. Lag en funksjon `sum` som tar imot en array med tall og returnerer summen av tallene.
2. Lag en funksjon `snitt` som tar imot en array og returnerer gjennomsnittet. `snitt` skal *bruke* `sum`-funksjonen. Den skal ikke ha sin egen løkke.
3. Test begge funksjonene på to forskjellige arrays.

```js
const tall1 = [4, 8, 15, 16, 23, 42];
const tall2 = [2, 4];
```

**Forventet svar:**

```
Sum: 108, snitt: 18
Sum: 6, snitt: 3
```

<details>
<summary>💡 Hint</summary>

`sum` blir som summeringen du har gjort før: en variabel som starter på 0, og en løkke som legger til ett tall om gangen. Bruk parameteren (for eksempel `liste`) i løkka, ikke `tall1`. Da virker funksjonen for alle arrays.

Gjennomsnitt er summen delt på antallet. Summen får du ved å kalle `sum(liste)`.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function sum(liste) {
  let total = 0;
  for (let i = 0; i < liste.length; i++) {
    total = total + liste[i];
  }
  return total;
}

function snitt(liste) {
  return sum(liste) / liste.length;
}

const tall1 = [4, 8, 15, 16, 23, 42];
const tall2 = [2, 4];

console.log(`Sum: ${sum(tall1)}, snitt: ${snitt(tall1)}`);
console.log(`Sum: ${sum(tall2)}, snitt: ${snitt(tall2)}`);
```

`snitt` bruker `sum`, så du skriver summeringen bare ett sted. Er det en feil i `sum`, fikser du den der, og da blir `snitt` også riktig.

</details>

---

## Bonusrunde – skikkelige nøtter 🥜

Disse oppgavene krever noe du ikke har lært ennå. Hvert hint sier hva du kan søke etter, for eksempel på MDN, som er den offisielle dokumentasjonen for JavaScript. Det er ikke juks. Slik jobber programmerere hele tiden.

### Bonus A – Primtall ⭐⭐⭐⭐

**Lag fila:** `bonus-a-primtall.js`

Et primtall er et tall større enn 1 som bare kan deles på 1 og seg selv uten at det blir rest. 7 er et primtall, men 9 er det ikke, fordi 9 kan deles på 3.

Lag en funksjon `erPrimtall` som returnerer `true` eller `false`. Bruk den til å skrive ut alle primtall fra 1 til 50 på én linje.

**Forventet svar:** `2 3 5 7 11 13 17 19 23 29 31 37 41 43 47`

<details>
<summary>💡 Hint</summary>

Du trenger `%`, som gir resten etter en deling. `9 % 3` er 0, og det betyr at 9 kan deles på 3.

Inni funksjonen: prøv å dele tallet på alle tall fra 2 og opp til (men ikke med) tallet selv. Går en av delingene opp, kan du `return false` med en gang. Kommer du gjennom hele løkka, er det et primtall. Husk at 1 ikke er et primtall.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function erPrimtall(tall) {
  if (tall < 2) {
    return false;
  }
  for (let deler = 2; deler < tall; deler++) {
    if (tall % deler === 0) {
      return false;
    }
  }
  return true;
}

let primtall = "";
for (let i = 1; i <= 50; i++) {
  if (erPrimtall(i)) {
    primtall = primtall + i + " ";
  }
}
console.log(primtall);
```

`return false` inni løkka avslutter hele funksjonen med en gang. `return true` nederst blir bare nådd hvis ingen av delingene gikk opp.

</details>

### Bonus B – Stein, saks, papir ⭐⭐⭐⭐

**Lag fila:** `bonus-b-stein-saks-papir.js`

Lag en funksjon `vinner(spiller1, spiller2)`. Hver spiller velger `"stein"`, `"saks"` eller `"papir"`. Funksjonen skal returnere `"Spiller 1 vinner"`, `"Spiller 2 vinner"` eller `"Uavgjort"`.

Stein slår saks, saks slår papir, og papir slår stein.

```js
console.log(vinner("stein", "saks"));
console.log(vinner("stein", "papir"));
console.log(vinner("papir", "papir"));
```

**Forventet svar:**

```
Spiller 1 vinner
Spiller 2 vinner
Uavgjort
```

**Ekstra:** Lag en funksjon `datamaskinVelger()` uten parametere, som returnerer et tilfeldig valg. Spill mot datamaskinen.

<details>
<summary>💡 Hint</summary>

Sjekk uavgjort først. Det er bare tre måter spiller 1 kan vinne på. Hvis ingen av dem stemmer, og det ikke er uavgjort, har spiller 2 vunnet.

Du kan sjekke flere ting på én gang med `&&` (og) og `||` (eller).

Til ekstraoppgaven: søk opp **«Math.random javascript»** og **«Math.floor javascript»**. Lag en array med de tre valgene, og hent ut en tilfeldig plass.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function vinner(spiller1, spiller2) {
  if (spiller1 === spiller2) {
    return "Uavgjort";
  }
  if (
    (spiller1 === "stein" && spiller2 === "saks") ||
    (spiller1 === "saks" && spiller2 === "papir") ||
    (spiller1 === "papir" && spiller2 === "stein")
  ) {
    return "Spiller 1 vinner";
  }
  return "Spiller 2 vinner";
}

console.log(vinner("stein", "saks"));
console.log(vinner("stein", "papir"));
console.log(vinner("papir", "papir"));

// Ekstra
function datamaskinVelger() {
  const valg = ["stein", "saks", "papir"];
  return valg[Math.floor(Math.random() * 3)];
}

const meg = "saks";
const maskin = datamaskinVelger();
console.log(`Du valgte ${meg}, datamaskinen valgte ${maskin}. ${vinner(meg, maskin)}!`);
```

</details>

### Bonus C – Brukernavn ⭐⭐⭐⭐

**Lag fila:** `bonus-c-brukernavn.js`

Skolen lager brukernavn slik: de tre første bokstavene i fornavnet, de tre første i etternavnet, og de to siste sifrene i fødselsåret. Alt skal være med små bokstaver.

Lag en funksjon `lagBrukernavn(fornavn, etternavn, år)` som returnerer brukernavnet.

```js
console.log(lagBrukernavn("Ola", "Nordmann", 2009));
console.log(lagBrukernavn("Kari", "Hansen", 2010));
```

**Forventet svar:**

```
olanor09
karhan10
```

<details>
<summary>💡 Hint</summary>

Søk opp **«javascript slice»** og **«javascript toLowerCase»**. `"Nordmann".slice(0, 3)` gir `"Nor"`.

Pass opp for året. `2009 % 100` gir 9, ikke `"09"`. Gjør heller året om til tekst med `String(år)`, og bruk `slice` på den teksten også.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
function lagBrukernavn(fornavn, etternavn, år) {
  const del1 = fornavn.slice(0, 3);
  const del2 = etternavn.slice(0, 3);
  const del3 = String(år).slice(2, 4);
  return (del1 + del2 + del3).toLowerCase();
}

console.log(lagBrukernavn("Ola", "Nordmann", 2009));
console.log(lagBrukernavn("Kari", "Hansen", 2010));
```

</details>

---

## Ordliste

| Kode | Betyr |
|---|---|
| `function strek() { ... }` | Lager en funksjon. Ingenting skjer før den blir kalt. |
| `strek();` | Kaller funksjonen, altså kjører koden inni den. Uten `()` skjer ingenting. |
| `function hils(navn)` | `navn` er en *parameter*: en variabel som bare finnes inni funksjonen. |
| `hils("Ada")` | `"Ada"` er et *argument*: verdien som blir lagt i parameteren. |
| `function areal(bredde, høyde)` | Flere parametere skilles med komma. Argumentene fordeles i rekkefølge. |
| `return verdi;` | Gir en verdi tilbake og avslutter funksjonen med en gang. |
| `const svar = dobbel(5);` | Tar vare på verdien som funksjonen gir tilbake. |
| `console.log` mot `return` | `console.log` viser noe til deg. `return` gir noe tilbake til programmet. |
| `undefined` | Det en funksjon uten `return` gir tilbake. Også verdien til en parameter som ikke fikk noe argument. |
| `erPartall(8)` | En funksjon som svarer `true` eller `false`. Kan stå rett inn i en `if`. |
| `%` | Resten etter en deling. `7 % 2` er 1. |
