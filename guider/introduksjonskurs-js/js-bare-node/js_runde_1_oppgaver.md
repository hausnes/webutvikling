# JavaScript – oppfølgingsoppgaver

Dette er flere oppgaver på temaene fra `js_runde_1.md`: `console.log`, variabler, `if`/`else` og løkker, og lister. Du trenger ikke gjøre alle – plukk oppgaver som passer for deg, og hopp gjerne over noen hvis de er for lette.

Vanskelighetsgrad er merket med stjerner:
- ⭐ Grunnleggende – rett fram, bruker det du nettopp har lært.
- ⭐⭐ Litt mer å tenke på.
- ⭐⭐⭐ Utfordring – krever at du kombinerer flere ting, eller tenker litt nytt.

Lag en ny fil for hver oppgave, akkurat som i runde 1 – for eksempel `opp01.js`, `opp02.js` og så videre.

Hver oppgave har et **løsningsforslag** skjult bak en trekant du kan klikke på. Prøv selv først! Mange oppgaver har også et **hint** du kan åpne hvis du står fast, før du går til løsningen.

---

## Del 1 – console.log

### Oppgave 1 – Favorittfilmer ⭐

Skriv et program som skriver ut dine tre favorittfilmer, én per `console.log`.

<details>
<summary>✅ Løsningsforslag</summary>

```js
console.log("Interstellar");
console.log("Matrix");
console.log("Oppad");
```

</details>

### Oppgave 2 – Regnestykke ⭐

Skriv ut resultatet av `12 * 8` direkte i en `console.log`, uten å lagre det i en variabel først.

<details>
<summary>✅ Løsningsforslag</summary>

```js
console.log(12 * 8);
```

</details>

### Oppgave 3 – Gjett rekkefølgen ⭐⭐

Ikke kjør koden ennå. Les den, og skriv ned hva du tror blir skrevet ut, og i hvilken rekkefølge:

```js
console.log("Start");
console.log(1 + 1);
console.log("Slutt");
```

Kjør den etterpå og sjekk om du hadde rett.

<details>
<summary>💡 Hint</summary>

Maskinen leser fila ovenfra og ned, akkurat som i oppgave 1 i runde 1.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```
Start
2
Slutt
```

`1 + 1` regnes ut til tallet `2` før det skrives ut.

</details>

---

## Del 2 – Variabler

### Oppgave 4 – Hilsen med variabler ⭐

Lag variablene `navn` og `alder` med dine egne verdier. Bruk en template literal (med backtick og `${ }`) til å skrive ut: `Hei, jeg heter <navn> og er <alder> år.`

<details>
<summary>✅ Løsningsforslag</summary>

```js
let navn = "Kari";
let alder = 15;
console.log(`Hei, jeg heter ${navn} og er ${alder} år.`);
```

</details>

### Oppgave 5 – let eller const? ⭐

Skriv to små kodeeksempler:
1. Ett der du bruker `let`, fordi verdien skal endres senere i programmet.
2. Ett der du bruker `const`, fordi verdien ikke skal endres.

<details>
<summary>✅ Løsningsforslag</summary>

```js
// let: poengsummen endrer seg mens spillet pågår
let poeng = 0;
poeng = poeng + 10;
console.log(poeng);

// const: PI endrer seg aldri
const pi = 3.14;
console.log(pi);
```

</details>

### Oppgave 6 – Finn feilen: tall som tekst ⭐⭐

Denne koden skal regne ut summen av to tall, men gir feil svar. Kjør den, se hva som skjer, og forklar hvorfor. Fiks den deretter.

```js
let tall1 = "10";
let tall2 = "5";
let sum = tall1 + tall2;
console.log(sum);
```

<details>
<summary>💡 Hint</summary>

Tenk tilbake på oppgave 7 i runde 1: hva gjør `+` når minst én av verdiene er tekst? `typeof tall1` kan hjelpe deg å sjekke.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

`tall1` og `tall2` er tekst (de har hermetegn), så `+` limer dem sammen til `"105"` i stedet for å legge dem sammen. Du må gjøre tekst om til tall først, for eksempel med `Number(...)`:

```js
let tall1 = "10";
let tall2 = "5";
let sum = Number(tall1) + Number(tall2);
console.log(sum); // 15
```

</details>

### Oppgave 7 – Bytt om på to variabler ⭐⭐⭐

Du har to variabler:

```js
let a = 5;
let b = 10;
```

Skriv kode som gjør at `a` blir `10` og `b` blir `5` – altså bytter de verdi med hverandre. (Tips: du klarer det ikke med bare én hjelpelinje – du trenger en tredje, midlertidig variabel til å holde på den ene verdien mens du bytter.)

<details>
<summary>💡 Hint</summary>

Hva skjer hvis du skriver `a = b;` først? Da mister du den opprinnelige verdien til `a` for alltid – med mindre du har lagret den et annet sted før du overskriver.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
let a = 5;
let b = 10;

let mellomlagring = a;
a = b;
b = mellomlagring;

console.log(a); // 10
console.log(b); // 5
```

</details>

---

## Del 3 – if og else

### Oppgave 8 – Positiv eller negativ ⭐

Lag en variabel `tall` med en verdi du velger selv. Skriv et program som sjekker om tallet er positivt eller negativt, og skriver ut riktig beskjed.

<details>
<summary>✅ Løsningsforslag</summary>

```js
let tall = -7;

if (tall >= 0) {
  console.log("Tallet er positivt.");
} else {
  console.log("Tallet er negativt.");
}
```

</details>

### Oppgave 9 – God morgen, dag eller kveld ⭐

Lag en variabel `klokke` som et tall mellom 0 og 23. Skriv ut `"God morgen"` hvis klokka er mellom 6 og 11, `"God dag"` hvis den er mellom 12 og 17, og `"God kveld"` ellers.

<details>
<summary>💡 Hint</summary>

Du trenger `else if`, akkurat som i oppgave 12 i runde 1. Husk at rekkefølgen betyr noe.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
let klokke = 14;

if (klokke >= 6 && klokke <= 11) {
  console.log("God morgen");
} else if (klokke >= 12 && klokke <= 17) {
  console.log("God dag");
} else {
  console.log("God kveld");
}
```

`&&` betyr «og» – begge sidene må stemme. Har dere ikke sett `&&` ennå, kan dere også løse det med to separate `if`-er inni hverandre, eller spørre læreren om et lite tips.

</details>

### Oppgave 10 – Finn feilen: er du myndig? ⭐⭐

Denne koden skal sjekke om noen er 18 år eller mer, men den sier «myndig» uansett hva du setter `alder` til. Hva er galt?

```js
let alder = 15;
if (alder = 18) {
  console.log("Du er myndig.");
} else {
  console.log("Du er ikke myndig.");
}
```

<details>
<summary>💡 Hint</summary>

Dette er akkurat samme felle som i oppgave 11 i runde 1 – tell likhetstegnene.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

`=` setter verdien 18 inn i `alder` i stedet for å sammenligne. I tillegg skal du sjekke «18 eller mer», ikke bare «nøyaktig 18»:

```js
let alder = 15;
if (alder >= 18) {
  console.log("Du er myndig.");
} else {
  console.log("Du er ikke myndig.");
}
```

</details>

### Oppgave 11 – Karaktersetter ⭐⭐⭐

Du har en variabel `poeng` som et tall mellom 0 og 100. Skriv et program som skriver ut riktig karakter etter denne skalaen:

- 90 eller mer: `A`
- 75–89: `B`
- 60–74: `C`
- 40–59: `D`
- under 40: `F`

<details>
<summary>💡 Hint</summary>

Husk oppgave 12 i runde 1: med `else if` vinner den **første** som stemmer. Så du må starte med den høyeste grensa (90), ikke den laveste – ellers vinner feil gren.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
let poeng = 82;

if (poeng >= 90) {
  console.log("A");
} else if (poeng >= 75) {
  console.log("B");
} else if (poeng >= 60) {
  console.log("C");
} else if (poeng >= 40) {
  console.log("D");
} else {
  console.log("F");
}
```

</details>

---

## Del 4 – Løkker

### Oppgave 12 – Tell til ti ⭐

Skriv en løkke som skriver ut tallene fra 1 til 10.

<details>
<summary>✅ Løsningsforslag</summary>

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

</details>

### Oppgave 13 – Alle partall ⭐

Skriv en løkke som skriver ut alle partall fra 2 til 20 (2, 4, 6, ..., 20).

<details>
<summary>💡 Hint</summary>

Du trenger ikke sjekke hvert eneste tall med en `if`. Hva skjer hvis løkka hopper 2 og 2 om gangen i stedet for 1 og 1, altså `i = i + 2` i stedet for `i++`?

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
for (let i = 2; i <= 20; i = i + 2) {
  console.log(i);
}
```

</details>

### Oppgave 14 – Dobling ⭐⭐

Skriv en `while`-løkke som starter på tallet 1 og dobler seg selv (ganger med 2) helt til tallet er over 100. Skriv ut hvert tall underveis, og skriv til slutt ut hvor mange runder det tok.

<details>
<summary>💡 Hint</summary>

Du trenger to variabler: én for selve tallet (som dobles hver runde), og én teller som øker med 1 for hver runde.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
let tall = 1;
let runder = 0;

while (tall <= 100) {
  console.log(tall);
  tall = tall * 2;
  runder = runder + 1;
}

console.log("Antall runder: " + runder);
```

</details>

### Oppgave 15 – Summer fra 1 til 100 ⭐⭐⭐

Skriv et program som bruker en løkke til å legge sammen alle tallene fra 1 til 100 (altså 1 + 2 + 3 + ... + 100), og skriver ut summen til slutt.

<details>
<summary>💡 Hint</summary>

Samme oppskrift som oppgave 19 i runde 1: en sum-variabel som starter på `0` **utenfor** løkka, som du legger til i hver runde.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}

console.log(sum); // 5050
```

</details>

### Oppgave 16 – Finn og fiks den uendelige løkka ⭐⭐⭐

Denne koden skal telle ned fra 10 til 1, men den stopper aldri. Finn feilen, og fiks den. (Husk `Ctrl + C` hvis du kjører den som den er!)

```js
let i = 10;
while (i > 0) {
  console.log(i);
  i++;
}
```

<details>
<summary>💡 Hint</summary>

Tenk som i oppgave 16 i runde 1: hva må skje inni løkka for at `i > 0` til slutt blir usann?

</details>

<details>
<summary>✅ Løsningsforslag</summary>

`i++` øker `i`, så `i > 0` blir aldri usann – den bare vokser og vokser. Siden du skal telle **ned**, må `i` minke:

```js
let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}
```

</details>

---

## Del 5 – Lister

### Oppgave 17 – Favorittfarger ⭐

Lag en liste med dine tre favorittfarger, og skriv ut hver av dem med en egen `console.log` (ikke bare hele lista på én gang).

<details>
<summary>✅ Løsningsforslag</summary>

```js
let farger = ["blå", "grønn", "lilla"];

console.log(farger[0]);
console.log(farger[1]);
console.log(farger[2]);
```

</details>

### Oppgave 18 – Det siste elementet ⭐

Lag en liste med fem tall du finner på selv. Skriv ut det **siste** elementet i lista ved å bruke `.length` – ikke ved å skrive indeksen direkte (for eksempel ikke `tall[4]`).

<details>
<summary>💡 Hint</summary>

`.length` sier hvor mange elementer det er. Siden tellingen starter på 0, er det siste elementet ett mindre enn lengden.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
let tall = [3, 17, 8, 42, 6];
console.log(tall[tall.length - 1]);
```

</details>

### Oppgave 19 – Summer ei liste ⭐⭐

Her er en liste med tall:

```js
let tall = [3, 8, 1, 10, 4];
```

Skriv et program som regner ut **summen** av alle tallene i lista, og skriver ut summen.

<details>
<summary>💡 Hint</summary>

Bruk samme oppskrift som i oppgave 19 i runde 1 (teller + løkke + if), men denne gangen skal du legge sammen tallene i stedet for å telle hvor mange de er.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
let tall = [3, 8, 1, 10, 4];
let sum = 0;

for (let i = 0; i < tall.length; i++) {
  sum = sum + tall[i];
}

console.log(sum); // 26
```

</details>

### Oppgave 20 – Finn det største tallet ⭐⭐⭐

Her er en liste med tall:

```js
let tall = [12, 45, 3, 67, 29];
```

Skriv et program som finner det **største** tallet i lista, uten å bruke noen ferdige funksjoner – bare en løkke og en `if`.

<details>
<summary>💡 Hint</summary>

Start med å anta at det **første** tallet i lista (`tall[0]`) er det største du har sett så langt. La så løkka gå gjennom resten av lista og sjekke: er dette tallet større enn det største jeg har funnet til nå? I så fall, oppdater.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
let tall = [12, 45, 3, 67, 29];
let storst = tall[0];

for (let i = 1; i < tall.length; i++) {
  if (tall[i] > storst) {
    storst = tall[i];
  }
}

console.log(storst); // 67
```

</details>

### Oppgave 21 – Hvem har flest poeng? ⭐⭐⭐

Du har to lister som hører sammen – samme indeks betyr samme person:

```js
let navn = ["Ada", "Alan", "Grace"];
let poeng = [85, 92, 78];
```

Skriv et program som finner og skriver ut **navnet** til personen med høyest poengsum.

<details>
<summary>💡 Hint</summary>

Dette er oppgave 20 med én ting til: i tillegg til å holde styr på den høyeste poengsummen du har sett, må du huske **hvilken indeks** den hørte til, så du kan hente ut riktig navn til slutt.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
let navn = ["Ada", "Alan", "Grace"];
let poeng = [85, 92, 78];

let hoyestePoeng = poeng[0];
let vinnerIndeks = 0;

for (let i = 1; i < poeng.length; i++) {
  if (poeng[i] > hoyestePoeng) {
    hoyestePoeng = poeng[i];
    vinnerIndeks = i;
  }
}

console.log(navn[vinnerIndeks]); // "Alan"
```

</details>

---

## Bonusrunde – skikkelige nøtter 🥜

Disse fire oppgavene krever litt mer enn det vi har jobbet med i runde 1 – du må utforske litt selv for å løse dem. Hvert hint peker deg mot noe å søke opp (for eksempel på MDN, som er den offisielle dokumentasjonen for JavaScript). Det er helt vanlig å måtte lete etter nye verktøy sånn – det er ikke juks, det er sånn programmerere jobber.

### Bonus A – FizzBuzz ⭐⭐⭐⭐

En klassisk programmeringsoppgave. Skriv et program som går gjennom alle tallene fra 1 til 100. For hvert tall:

- Er tallet delelig med 3 **og** 5, skriv ut `"FizzBuzz"`.
- Er tallet delelig med bare 3, skriv ut `"Fizz"`.
- Er tallet delelig med bare 5, skriv ut `"Buzz"`.
- Ellers, skriv ut tallet selv.

<details>
<summary>💡 Hint</summary>

Du trenger en måte å sjekke om ett tall er delelig med et annet. Søk opp **«modulo javascript»** eller **«prosenttegn javascript %»** – det er en regneoperator du ikke har møtt ennå, som gir deg resten etter en divisjon. `10 % 5` gir `0` (ingen rest), mens `10 % 3` gir `1`.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

`%` gir resten etter en divisjon. Er resten `0` når du deler på 3, er tallet delelig med 3. `&&` betyr «og» – begge sidene må stemme samtidig.

</details>

### Bonus B – Gangetabellen ⭐⭐⭐⭐

Skriv et program som skriver ut hele gangetabellen fra 1 til 10, én rad per linje. Radene skal se omtrent sånn ut:

```
1 2 3 4 5 6 7 8 9 10
2 4 6 8 10 12 14 16 18 20
3 6 9 12 15 18 21 24 27 30
...
```

<details>
<summary>💡 Hint</summary>

Søk opp **«nøstede løkker javascript»** (nested loops på engelsk). Det betyr rett og slett en `for`-løkke inni en annen `for`-løkke – den ytre styrer hvilken rad du er på, den indre bygger opp innholdet i raden.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
for (let rad = 1; rad <= 10; rad++) {
  let linje = "";
  for (let kolonne = 1; kolonne <= 10; kolonne++) {
    linje = linje + (rad * kolonne) + " ";
  }
  console.log(linje);
}
```

Den ytre løkka går gjennom radene 1–10. For hver rad bygger den indre løkka opp en tekststreng med alle produktene i raden, før hele raden skrives ut på én gang.

</details>

### Bonus C – Er det et palindrom? ⭐⭐⭐⭐

Et palindrom er et ord som er likt om du leser det baklengs – som `"anna"` eller `"bob"`. Skriv et program som sjekker om ordet under er et palindrom, og skriver ut `true` eller `false`.

```js
let ord = "anna";
```

<details>
<summary>💡 Hint</summary>

Visste du at en tekststreng kan indekseres akkurat som en liste? `ord[0]` gir deg den første bokstaven, og `ord.length` gir deg hvor mange bokstaver ordet har – helt likt `dyr[0]` og `dyr.length` fra runde 1. Sammenlign bokstaven først i ordet med bokstaven sist i ordet, så den nest første med den nest siste, og så videre.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
let ord = "anna";
let erPalindrom = true;

for (let i = 0; i < ord.length / 2; i++) {
  if (ord[i] !== ord[ord.length - 1 - i]) {
    erPalindrom = false;
  }
}

console.log(erPalindrom);
```

Løkka går bare gjennom første halvdel av ordet, og sammenligner hver bokstav med dens «speilbilde» fra enden. Finner den ett eneste avvik, settes `erPalindrom` til `false` – og blir aldri satt tilbake til `true` igjen.

</details>

### Bonus D – Sorter en liste ⭐⭐⭐⭐⭐

Den vanskeligste oppgaven i hele dokumentet! Skriv et program som sorterer en liste med tall i stigende rekkefølge – **uten** å bruke noen ferdige sorteringsfunksjoner.

```js
let tall = [5, 2, 9, 1, 7];
```

<details>
<summary>💡 Hint</summary>

Denne teknikken kalles **boblesortering** (bubble sort på engelsk) – søk gjerne opp det navnet. Ideen: gå gjennom lista og sammenlign hvert par med naboer. Er naboen til venstre større enn naboen til høyre, bytt om på dem (bruk samme triks som i oppgave 7 – en midlertidig variabel). Gjenta hele runden flere ganger – store tall «bobler» gradvis mot slutten av lista for hver runde.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
let tall = [5, 2, 9, 1, 7];

for (let runde = 0; runde < tall.length; runde++) {
  for (let i = 0; i < tall.length - 1; i++) {
    if (tall[i] > tall[i + 1]) {
      let mellomlagring = tall[i];
      tall[i] = tall[i + 1];
      tall[i + 1] = mellomlagring;
    }
  }
}

console.log(tall); // [1, 2, 5, 7, 9]
```

Den ytre løkka bestemmer hvor mange runder vi tar gjennom lista (i verste fall trenger vi like mange runder som det er elementer). Den indre løkka går gjennom naboparene og bytter om når rekkefølgen er feil, akkurat som i hint-et.

</details>
