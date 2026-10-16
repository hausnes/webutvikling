# Funksjoner i JavaScript

Denne teksten forklarer det du trenger å vite om funksjoner for å løse oppgavene i runde 2. Du kan lese den før du begynner, eller gå tilbake til den når du står fast.

Alle eksemplene kan du kjøre selv. Lag en fil, for eksempel `funksjon-test.js`, lim inn koden og kjør den med `node funksjon-test.js`. Endre gjerne på koden og se hva som skjer.

---

## 1. Hvorfor trenger vi funksjoner?

Tenk deg at du vil skrive ut en strek før og etter noen linjer med tekst:

```js
console.log("-------------------");
console.log("Velkommen til spillet!");
console.log("-------------------");
console.log("Du har 3 liv.");
console.log("-------------------");
```

Streken er skrevet tre ganger. Vil du gjøre den lengre, må du endre den på tre steder, og det er lett å glemme ett av dem.

En **funksjon** er en bit kode som har fått et navn. Du skriver koden én gang, og så kan du bruke den så mange ganger du vil:

```js
function strek() {
  console.log("-------------------");
}

strek();
console.log("Velkommen til spillet!");
strek();
console.log("Du har 3 liv.");
strek();
```

Nå trenger du bare å endre streken på ett sted.

Funksjoner har tre store fordeler:
- Du slipper å skrive den samme koden mange ganger.
- Du kan gi koden et navn som forteller hva den gjør, for eksempel `regnUtPris`. Da blir programmet lettere å lese.
- Er det en feil i funksjonen, trenger du bare å fikse den ett sted.

---

## 2. Lage og kalle en funksjon

Det er to steg: først **lager** du funksjonen, og så **kaller** du den.

### Lage funksjonen

```js
function strek() {
  console.log("-------------------");
}
```

- `function` forteller at nå kommer det en funksjon.
- `strek` er navnet. Du velger det selv, med de samme reglene som for variabler: ingen mellomrom, og store og små bokstaver er forskjellige.
- `()` kommer rett etter navnet. Hva som kan stå inni, kommer i neste del.
- Koden mellom `{` og `}` er det funksjonen gjør.

**Viktig:** Å lage en funksjon gjør *ingenting* av seg selv. Kjører du bare koden over, kommer det ingen utskrift. Du har bare fortalt maskinen hva `strek` betyr.

### Kalle funksjonen

```js
strek();
```

Når du skriver navnet og `()`, kjører maskinen koden inni funksjonen. Det kaller vi å **kalle** funksjonen. Du kan kalle den så mange ganger du vil:

```js
strek();
strek();
strek();
```

Parentesene er viktige. Skriver du bare `strek;` uten `()`, skjer det ingenting, og du får heller ingen feilmelding.

### I hvilken rekkefølge skjer ting?

```js
console.log("1");

function hei() {
  console.log("Hei!");
}

console.log("2");
hei();
console.log("3");
```

Utskrift:

```
1
2
Hei!
3
```

Maskinen leser fortsatt fila ovenfra og ned. Når den kommer til `function hei()`, *husker* den bare funksjonen og hopper videre. `Hei!` blir først skrevet ut når maskinen kommer til linja `hei();`.

Det er vanlig å samle funksjonene øverst i fila og kalle dem lenger ned.

### En funksjon kan gjøre mer enn én ting

Alt du kan skrive i et program, kan du også skrive inni en funksjon: flere `console.log`, variabler, `if` og løkker.

```js
function nedtelling() {
  for (let i = 3; i > 0; i--) {
    console.log(i);
  }
  console.log("Start!");
}

nedtelling();
```

---

## 3. Parametere: gi funksjonen noe å jobbe med

En funksjon som alltid gjør nøyaktig det samme, er nyttig, men begrenset. Ofte vil du at den skal gjøre *nesten* det samme hver gang. Da bruker du en **parameter**.

```js
function hilsTilDyr(dyr) {
  console.log(`Hei, ${dyr}!`);
}

hilsTilDyr("katt");     // Hei, katt!
hilsTilDyr("hund");     // Hei, hund!
hilsTilDyr("hamster");  // Hei, hamster!
```

- `dyr` i parentesen er en **parameter**. Det er en variabel som bare finnes inni funksjonen.
- `"katt"` er et **argument**. Det er den verdien du sender inn når du kaller funksjonen.
- Når du kaller `hilsTilDyr("katt")`, blir `dyr` til `"katt"` mens funksjonen kjører. Neste gang du kaller den, får `dyr` en ny verdi.

Tenk på parameteren som et tomt felt i et skjema. Hver gang du kaller funksjonen, fyller du inn feltet på nytt.

### Argumentet kan være en variabel eller et regnestykke

```js
const kjæledyr = "kanin";
hilsTilDyr(kjæledyr);        // Hei, kanin!

function dobbel(tall) {
  console.log(tall * 2);
}

dobbel(5);                   // 10
dobbel(3 + 4);               // 14 – regnestykket regnes ut først
```

### Flere parametere

En funksjon kan ha flere parametere. Da skiller du dem med komma, både når du lager funksjonen og når du kaller den:

```js
function areal(bredde, høyde) {
  console.log(`Arealet er ${bredde * høyde} m²`);
}

areal(4, 3);    // Arealet er 12 m²
areal(10, 2);   // Arealet er 20 m²
```

Argumentene blir fordelt i **rekkefølge**: det første argumentet går til den første parameteren, det andre til den andre, og så videre.

```js
function presenterDyr(navn, art) {
  console.log(`${navn} er en ${art}.`);
}

presenterDyr("Pusur", "katt");   // Pusur er en katt.
presenterDyr("katt", "Pusur");   // katt er en Pusur.  – feil rekkefølge!
```

Maskinen vet ikke hva som er navn og hva som er art. Den tar bare det første argumentet og legger det i den første parameteren.

### Hvis du glemmer et argument

```js
presenterDyr("Fido");   // Fido er en undefined.
```

Parameteren `art` fikk ingen verdi, og da er den `undefined`, altså «det finnes ingenting her».

---

## 4. `return`: få et svar tilbake

Så langt har funksjonene våre skrevet ut noe med `console.log`. Men ofte vil du at funksjonen skal **regne ut** noe og gi svaret tilbake, slik at du kan bruke det videre. Til det bruker du `return`.

```js
function dobbel(tall) {
  return tall * 2;
}

const svar = dobbel(5);
console.log(svar);   // 10
```

`return` betyr «gi denne verdien tilbake til den som kalte meg». Når maskinen kommer til `dobbel(5)`, kjører den funksjonen, og så blir hele `dobbel(5)` byttet ut med svaret `10`.

### Svaret kan brukes som en hvilken som helst verdi

```js
console.log(dobbel(5));                 // 10 – rett inn i console.log
console.log(dobbel(5) + dobbel(1));     // 12 – i et regnestykke
console.log(`Svaret er ${dobbel(7)}`);  // Svaret er 14 – i en tekst
const stort = dobbel(dobbel(3));        // 12 – dobbel(3) er 6, og dobbel(6) er 12
```

### `return` og `console.log` er ikke det samme

Dette er den vanligste forvirringen med funksjoner. Se på disse to:

```js
function skrivDobbel(tall) {
  console.log(tall * 2);
}

function giDobbel(tall) {
  return tall * 2;
}

const a = skrivDobbel(5);   // skriver ut 10
const b = giDobbel(5);      // skriver ikke ut noe

console.log(a);   // undefined
console.log(b);   // 10
```

| | `console.log` inni funksjonen | `return` inni funksjonen |
|---|---|---|
| Hva skjer? | Viser verdien i terminalen. | Gir verdien tilbake til koden som kalte funksjonen. |
| Kan du lagre svaret i en variabel? | Nei, du får `undefined`. | Ja. |
| Kan du regne videre med svaret? | Nei. | Ja. |

`console.log` er for *mennesker* som ser på terminalen. `return` er for *programmet*, som skal bruke svaret videre.

En funksjon uten `return` gir alltid tilbake `undefined`.

### `return` avslutter funksjonen

Når maskinen kommer til `return`, hopper den ut av funksjonen med en gang. Kode under `return` blir aldri kjørt:

```js
function test() {
  return "ferdig";
  console.log("Dette blir aldri skrevet ut");
}
```

Det kan du bruke sammen med `if`. Den første `return` som blir nådd, bestemmer svaret:

```js
function størst(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

console.log(størst(4, 9));   // 9
console.log(størst(12, 7));  // 12
```

### Funksjoner som svarer `true` eller `false`

En funksjon kan gi tilbake `true` eller `false`. Det er nyttig når du skal stille et ja/nei-spørsmål. Slike funksjoner får ofte navn som starter på `er` eller `har`:

```js
function erPartall(tall) {
  if (tall % 2 === 0) {
    return true;
  }
  return false;
}

if (erPartall(8)) {
  console.log("8 er et partall");
}
```

`%` gir resten etter en deling. Er resten 0 når du deler på 2, er tallet et partall.

Du kan også skrive `return tall % 2 === 0;`. Sammenligningen er allerede `true` eller `false`, så du trenger ikke `if`.

---

## 5. Variabler inni funksjoner

En variabel du lager *inni* en funksjon, finnes bare der. Det samme gjelder parameterne.

```js
function regnUt(pris) {
  const medFrakt = pris + 49;
  return medFrakt;
}

console.log(regnUt(100));   // 149
console.log(medFrakt);      // ReferenceError: medFrakt is not defined
console.log(pris);          // ReferenceError: pris is not defined
```

Vil du bruke svaret utenfor funksjonen, må du sende det ut med `return` og ta imot det:

```js
const totalt = regnUt(100);
console.log(totalt);   // 149
```

Dette er en fordel. Du kan bruke variabelnavn som `sum` eller `i` inni mange forskjellige funksjoner, uten at de krasjer med hverandre.

---

## 6. Funksjoner sammen med løkker og arrays

### Kalle en funksjon inni en løkke

```js
function kvadrat(tall) {
  return tall * tall;
}

for (let i = 1; i <= 4; i++) {
  console.log(`${i} i andre er ${kvadrat(i)}`);
}
// 1 i andre er 1
// 2 i andre er 4
// 3 i andre er 9
// 4 i andre er 16
```

### En løkke inni en funksjon

```js
function skrivLinje(tegn, antall) {
  let linje = "";
  for (let i = 0; i < antall; i++) {
    linje = linje + tegn;
  }
  console.log(linje);
}

skrivLinje("=", 10);   // ==========
skrivLinje("#", 3);    // ###
```

### Sende en array inn i en funksjon

En parameter kan også være en array:

```js
function største(liste) {
  let størst = liste[0];
  for (let i = 1; i < liste.length; i++) {
    if (liste[i] > størst) {
      størst = liste[i];
    }
  }
  return størst;
}

console.log(største([4, 19, 7]));       // 19
console.log(største([100, 3, 250, 8])); // 250
```

Funksjonen fungerer for *alle* lister, uansett hvor lange de er.

### En funksjon kan bruke en annen funksjon

```js
function moms(pris) {
  return pris * 0.25;
}

function prisMedMoms(pris) {
  return pris + moms(pris);
}

console.log(prisMedMoms(200));   // 250
```

Store problemer blir lettere når du deler dem opp i små funksjoner som gjør én ting hver.

---

## 7. Gode navn på funksjoner

Et godt funksjonsnavn forteller hva funksjonen *gjør*. Det starter derfor ofte med et verb:

| Navn | Hva det forteller |
|---|---|
| `skrivMeny()` | Skriver ut noe. |
| `regnUtPris(antall)` | Regner ut og gir tilbake et svar. |
| `erMyndig(alder)` | Svarer ja eller nei, altså `true` eller `false`. |
| `f(x)` eller `greia()` | Ingenting. Unngå slike navn. |

---

## 8. En annen skrivemåte du kommer til å se

Når du leser kode på nettet, ser du ofte funksjoner skrevet slik:

```js
const dobbel = (tall) => {
  return tall * 2;
};
```

Dette kalles en **pilfunksjon** (arrow function), og den gjør det samme som `function dobbel(tall)`. Du trenger ikke å bruke denne skrivemåten nå, men det er greit å kjenne den igjen.

---

## 9. Vanlige feil

| Det du ser | Hva som er galt |
|---|---|
| Ingenting skjer | Du har laget funksjonen, men ikke kalt den. Eller du glemte `()`: `strek;` i stedet for `strek();`. |
| `ReferenceError: strk is not defined` | Du har stavet navnet feil når du kalte funksjonen, eller inni den. Sjekk store og små bokstaver. |
| `undefined` der det skulle stått et tall | Funksjonen mangler `return`, eller den bruker `console.log` i stedet for `return`. |
| `undefined` inni en tekst fra funksjonen | Du har glemt et argument da du kalte funksjonen. |
| Rare svar, som `katt er en Pusur` | Argumentene står i feil rekkefølge. |
| Kode i funksjonen blir aldri kjørt | Den står under en `return`. |
| `ReferenceError` når du bruker en variabel fra funksjonen | Variabler og parametere inni funksjonen finnes bare der. Bruk `return`. |
| `NaN` | «Not a Number». Du har regnet med noe som ikke er et tall, ofte `undefined` fra et glemt argument. |

---

## Ordliste

| Kode | Betyr |
|---|---|
| `function strek() { ... }` | Lager en funksjon som heter `strek`. Gjør ingenting før den blir kalt. |
| `strek();` | Kaller funksjonen, altså kjører koden inni den. |
| parameter | Variabelen i parentesen når du lager funksjonen: `function hils(navn)`. |
| argument | Verdien du sender inn når du kaller funksjonen: `hils("Ada")`. |
| `function areal(bredde, høyde)` | En funksjon med to parametere. Argumentene fordeles i rekkefølge. |
| `return verdi;` | Gir en verdi tilbake og avslutter funksjonen. |
| `const svar = dobbel(5);` | Tar imot verdien funksjonen gir tilbake. |
| `undefined` | Det du får tilbake fra en funksjon uten `return`, og verdien til en parameter som ikke fikk noe argument. |
| `erPartall(8)` | En funksjon som gir tilbake `true` eller `false`. |
| `%` | Resten etter en deling. `7 % 2` er 1. |
| `(tall) => { ... }` | En pilfunksjon, en annen skrivemåte for en funksjon. |
