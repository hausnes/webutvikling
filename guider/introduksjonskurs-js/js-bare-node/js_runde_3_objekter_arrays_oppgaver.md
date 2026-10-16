# Arrays, objekter og løkker – oppgaver

Dette er oppgaver om arrays, objekter og løkker. Du trenger ikke gjøre alle. Plukk de som passer for deg, og hopp gjerne over noen hvis de er for lette.

Vanskelighetsgrad er merket med stjerner:
- ⭐ Grunnleggende – rett fram.
- ⭐⭐ Litt mer å tenke på.
- ⭐⭐⭐ Utfordring – du må kombinere flere ting.

**Ikke bli sittende fast.** Blir ⭐⭐⭐ for tungt, så hopp videre til neste del. Del 4 har Pokémon, Bloons og kiosken – sørg for at du kommer dit.

**Slik bruker du dokumentet:**
- Hver del starter med **Slik ser det ut**: en kort kodebit som viser det du trenger. Gå tilbake til den når du står fast.
- Under hver oppgave står **Forventet svar**. Det er det programmet ditt skal skrive ut. Stemmer det, er du ferdig.
- Står du fast, kan du åpne **💡 Hint** ved å klikke på trekanten. Hjelper ikke hintet, så spør sidemannen, og så læreren.
- Hver oppgave har også et **✅ Løsningsforslag**. Prøv selv først, og bruk hintet før du åpner løsningen. Har du fått det til, kan du sammenligne: det finnes ofte flere riktige måter å skrive koden på.
- Vil du lese mer om objekter før du starter, finner du en forklaring i [Objekter i JavaScript](js_runde_3_objekter_arrays.md).
- Lister med data kan du kopiere herfra. Koden som *gjør* noe med dataene, skriver du selv.

**Kom i gang:**

1. Lag en ny mappe som heter `arrays`.
2. Åpne VS Code. Velg **File → Open Folder**, og velg mappa `arrays`.
3. Lag en ny fil for hver oppgave. Filnavnet står i oppgaven. Ikke slett noe – alle filene blir biblioteket ditt.
4. Kjør fila med `node` og filnavnet, for eksempel `node 01-sanger.js`

---

## Del 1 – Arrays

En array er en liste med verdier. Hver verdi har en plass, og tellingen starter på 0.

> **Slik ser det ut**
>
> ```js
> const dyr = ["katt", "hund", "hest"];
>
> console.log(dyr[0]);       // katt – den første har plass 0
> console.log(dyr.length);   // 3 – hvor mange det er
> dyr.push("ku");            // legger til bakerst
> dyr.pop();                 // fjerner den bakerste
> dyr[1] = "hamster";        // bytter ut den på plass 1
> console.log(dyr);          // [ 'katt', 'hamster', 'hest' ]
> ```

### Oppgave 1 – Favorittsanger ⭐

**Lag fila:** `01-sanger.js`

Lag en array med fem sanger du liker. Skriv ut den første og den siste sangen.

Den siste skal du hente ut ved hjelp av `.length` – ikke ved å skrive plassen direkte. Test det slik: legg til en sjette sang i lista. Programmet skal da skrive ut den nye sangen som den siste, uten at du endrer noe annet.

**Forventet svar:** den første og den siste sangen i lista di.

<details>
<summary>💡 Hint</summary>

`.length` sier hvor mange sanger det er. Men tellingen starter på 0. Har du fem sanger, hvilket nummer har da den siste?

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const sanger = ["Espresso", "Flowers", "Blinding Lights", "Levitating", "Cruel Summer"];

console.log(`Første: ${sanger[0]}`);
console.log(`Siste: ${sanger[sanger.length - 1]}`);
```

Med fem sanger er `sanger.length` lik 5, men plassene går fra 0 til 4. Den siste plassen er derfor alltid `sanger.length - 1`. Legger du til en sjette sang, blir `length` 6, og `sanger[5]` er den nye sangen, uten at du endrer noe annet.

</details>

### Oppgave 2 – Kø i kantina ⭐

**Lag fila:** `02-ko.js`

```js
const kø = ["Ali", "Sara", "Jonas"];
```

Gjør dette med kode, i denne rekkefølgen:
1. Emma stiller seg bakerst i køen.
2. Leo stiller seg bakerst i køen.
3. Leo går lei og går (den bakerste forlater køen).
4. Sara går, og kompisen Omar tar plassen hennes.

Skriv til slutt ut hele køen, og hvor mange som står i den.

**Forventet svar:**

```
[ 'Ali', 'Omar', 'Jonas', 'Emma' ]
4
```

<details>
<summary>💡 Hint</summary>

`push` legger til bakerst, og `pop` fjerner den bakerste. For å bytte ut Sara må du vite hvilken plass hun står på. Husk at Ali står på plass 0.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const kø = ["Ali", "Sara", "Jonas"];

kø.push("Emma");   // [ 'Ali', 'Sara', 'Jonas', 'Emma' ]
kø.push("Leo");    // [ 'Ali', 'Sara', 'Jonas', 'Emma', 'Leo' ]
kø.pop();          // [ 'Ali', 'Sara', 'Jonas', 'Emma' ]
kø[1] = "Omar";    // [ 'Ali', 'Omar', 'Jonas', 'Emma' ]

console.log(kø);
console.log(kø.length);
```

Sara står på plass 1 fordi Ali står på plass 0.

</details>

### Oppgave 3 – Gjett utskriften ⭐⭐

**Lag fila:** `03-gjett.js`

**Ikke kjør koden ennå.** Skriv den inn, og skriv det du tror kommer ut som en kommentar bak hver `console.log`, for eksempel `// 3`. Kjør den etterpå, og se hvor mange du hadde rett på.

```js
const snacks = ["chips", "sjokolade"];
snacks.push("brus");
console.log(snacks.length);

snacks[0] = "popcorn";
snacks.pop();
console.log(snacks);

snacks.push("is");
console.log(snacks[2]);
console.log(snacks[3]);
```

<details>
<summary>💡 Hint</summary>

Tegn arrayen på et ark, og oppdater tegningen for hver linje. Hvor mange ting ligger i den når du kommer til den siste linja?

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const snacks = ["chips", "sjokolade"];
snacks.push("brus");
console.log(snacks.length);   // 3

snacks[0] = "popcorn";
snacks.pop();
console.log(snacks);          // [ 'popcorn', 'sjokolade' ]

snacks.push("is");
console.log(snacks[2]);       // is
console.log(snacks[3]);       // undefined
```

Slik ser arrayen ut underveis:

| Linje | Arrayen etterpå |
|---|---|
| start | `["chips", "sjokolade"]` |
| `push("brus")` | `["chips", "sjokolade", "brus"]` |
| `snacks[0] = "popcorn"` | `["popcorn", "sjokolade", "brus"]` |
| `pop()` | `["popcorn", "sjokolade"]` |
| `push("is")` | `["popcorn", "sjokolade", "is"]` |

Til slutt ligger det tre ting i arrayen, på plass 0, 1 og 2. Plass 3 finnes ikke, og derfor får du `undefined`.

</details>

### Oppgave 4 – Finn feilen: sistemann ⭐⭐

**Lag fila:** `04-siste.js`

Denne koden skal skrive ut den siste deltakeren som kom i mål, men den skriver `undefined`. Finn feilen, og fiks den.

```js
const deltakere = ["Mia", "Jonas", "Sofie", "Ahmed", "Ola"];

console.log(`Sistemann i mål: ${deltakere[deltakere.length]}`);
```

**Forventet svar:** `Sistemann i mål: Ola`

<details>
<summary>💡 Hint</summary>

`undefined` betyr at du prøvde å hente noe fra en plass som ikke finnes. Det er 5 deltakere. Hvilke plasser finnes da?

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const deltakere = ["Mia", "Jonas", "Sofie", "Ahmed", "Ola"];

console.log(`Sistemann i mål: ${deltakere[deltakere.length - 1]}`);
```

Det er 5 deltakere, så plassene er 0, 1, 2, 3 og 4. `deltakere.length` er 5, og plass 5 finnes ikke. Den siste er på plass `length - 1`.

</details>

---

## Del 2 – Løkker gjennom arrays

En løkke gjør det samme én gang for hver plass i arrayen.

> **Slik ser det ut**
>
> ```js
> const dyr = ["katt", "hund", "hest"];
>
> for (let i = 0; i < dyr.length; i++) {
>   console.log(dyr[i]);
> }
> // katt
> // hund
> // hest
> ```
>
> - `let i = 0` – start på plass 0.
> - `i < dyr.length` – sjekkes før hver runde. Løkka stopper når den ikke stemmer lenger.
> - `i++` – etter hver runde: gå til neste plass.
>
> `i` er *plassen*. `dyr[i]` er det som *ligger* på plassen.

### Oppgave 5 – Topp 5 ⭐

**Lag fila:** `05-topp5.js`

Kopier sanglista fra `01-sanger.js`. Bruk en løkke til å skrive ut alle sangene med nummer foran.

**Forventet svar:** dine sanger, nummerert fra 1 til 5. For eksempel:

```
1. Espresso
2. Flowers
3. Blinding Lights
4. Levitating
5. Cruel Summer
```

<details>
<summary>💡 Hint</summary>

`i` starter på 0, men lista di skal starte på 1. Hva kan du legge til `i` når du skriver ut nummeret? Ikke endre selve løkka, for da hopper du over den første sangen.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const sanger = ["Espresso", "Flowers", "Blinding Lights", "Levitating", "Cruel Summer"];

for (let i = 0; i < sanger.length; i++) {
  console.log(`${i + 1}. ${sanger[i]}`);
}
```

Løkka bruker fortsatt plassene 0–4. Det er bare *nummeret vi skriver ut* som får `+ 1`.

</details>

### Oppgave 6 – Ukas skjermtid ⭐

**Lag fila:** `06-skjermtid.js`

Her er skjermtiden til en elev, i timer per dag fra mandag til søndag:

```js
const skjermtid = [3, 5, 2, 6, 4, 8, 7];
```

Bruk en løkke til å regne ut hvor mange timer det ble til sammen.

**Forventet svar:** `Total skjermtid: 35 timer`

<details>
<summary>💡 Hint</summary>

Lag en variabel som starter på 0 *utenfor* løkka. Inni løkka legger du dagens timer til den. Skriv den ut *etter* løkka, ellers får du sju utskrifter.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const skjermtid = [3, 5, 2, 6, 4, 8, 7];

let sum = 0;
for (let i = 0; i < skjermtid.length; i++) {
  sum = sum + skjermtid[i];
}

console.log(`Total skjermtid: ${sum} timer`);
```

</details>

### Oppgave 7 – Lange dager ⭐⭐

**Lag fila:** `07-lange-dager.js`

Bruk den samme skjermtid-arrayen.
1. Tell hvor mange dager eleven brukte *mer enn* 5 timer.
2. Regn ut gjennomsnittet per dag.

**Forventet svar:**

```
Dager med mer enn 5 timer: 3
Gjennomsnitt: 5 timer
```

<details>
<summary>💡 Hint</summary>

Å telle er nesten det samme som å summere i oppgave 6. Du trenger en variabel utenfor løkka, men nå legger du til 1, og bare når `if`-en stemmer.

Får du 4? Les oppgaven en gang til: *mer enn* 5.

Gjennomsnitt er summen delt på antall dager. Antallet har du allerede i `.length`.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const skjermtid = [3, 5, 2, 6, 4, 8, 7];

let antallLange = 0;
let sum = 0;
for (let i = 0; i < skjermtid.length; i++) {
  if (skjermtid[i] > 5) {
    antallLange = antallLange + 1;
  }
  sum = sum + skjermtid[i];
}

console.log(`Dager med mer enn 5 timer: ${antallLange}`);
console.log(`Gjennomsnitt: ${sum / skjermtid.length} timer`);
```

Det er `>` og ikke `>=`. Med `>=` blir tirsdag (5 timer) også telt med, og da får du 4. Det går fint å summere og telle i samme løkke, men to løkker er også helt riktig.

</details>

### Oppgave 8 – Finn feilen: én for mye ⭐⭐

**Lag fila:** `08-en-for-mye.js`

Denne løkka skriver ut handlelista, men den skriver ut én linje for mye. Finn feilen, og fiks den.

```js
const handleliste = ["melk", "brød", "egg", "ost"];

for (let i = 0; i <= handleliste.length; i++) {
  console.log(handleliste[i]);
}
```

**Forventet svar:** fire linjer – `melk`, `brød`, `egg` og `ost` – og ingen `undefined`.

<details>
<summary>💡 Hint</summary>

Tell selv. Hvor mange varer er det, og hvor mange ganger kjører løkka? Se på sammenligningen i midten av `for`-linja.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const handleliste = ["melk", "brød", "egg", "ost"];

for (let i = 0; i < handleliste.length; i++) {
  console.log(handleliste[i]);
}
```

Med `<=` kjører løkka også når `i` er 4. Plass 4 finnes ikke, så du får `undefined`. Med `<` stopper den etter plass 3.

</details>

### Oppgave 9 – Verste dag ⭐⭐⭐

**Lag fila:** `09-verste-dag.js`

To arrays hører sammen: samme plass betyr samme dag.

```js
const dager = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];
const timer = [3, 5, 2, 6, 4, 8, 7];
```

Finn dagen med mest skjermtid, uten å se på tallene selv. Programmet skal finne den.

**Forventet svar:** `Verst: Lørdag med 8 timer`

<details>
<summary>💡 Hint</summary>

Lag to variabler utenfor løkka. Den ene holder på det høyeste antallet timer du har sett så langt. Den andre holder på *plassen* der du så det. La begge starte med mandag.

Inni løkka spør du: er denne dagen verre enn den verste så langt? Da oppdaterer du begge variablene.

Etter løkka bruker du plassen til å hente navnet fra `dager`.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const dager = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];
const timer = [3, 5, 2, 6, 4, 8, 7];

let flestTimer = timer[0];
let plass = 0;

for (let i = 1; i < timer.length; i++) {
  if (timer[i] > flestTimer) {
    flestTimer = timer[i];
    plass = i;
  }
}

console.log(`Verst: ${dager[plass]} med ${flestTimer} timer`);
```

Løkka starter på 1 fordi mandag (plass 0) allerede er «den verste så langt». Det er også riktig å starte på 0, da sammenligner du bare mandag med seg selv først.

</details>

### Oppgave 10 – Seksere ⭐⭐⭐

**Lag fila:** `10-seksere.js`

En terning ble kastet sju ganger:

```js
const kast = [3, 6, 1, 6, 2, 6, 5];
```

Lag en ny array som heter `seksere`. Den skal inneholde *nummeret på kastene* som ble en sekser. Det første kastet er kast nummer 1. Skriv ut arrayen.

**Forventet svar:** `[ 2, 4, 6 ]`

<details>
<summary>💡 Hint</summary>

Lag en tom array utenfor løkka, og bruk `push` inni løkka.

Pass på hva du pusher. `kast[i]` er det terningen viste, og det er jo alltid 6 her. `i` er plassen. Men plassen starter på 0, mens kastnummeret starter på 1.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const kast = [3, 6, 1, 6, 2, 6, 5];

const seksere = [];
for (let i = 0; i < kast.length; i++) {
  if (kast[i] === 6) {
    seksere.push(i + 1);
  }
}

console.log(seksere);
```

Vi pusher `i + 1` (kastnummeret), ikke `kast[i]` (som ville gitt `[ 6, 6, 6 ]`).

</details>

### Oppgave 11 – Hemmelig beskjed ⭐⭐⭐

**Lag fila:** `11-baklengs.js`

Noen har gjemt en beskjed baklengs:

```js
const ord = ["koden!", "hemmelige", "den", "knekt", "har", "Du"];
```

Bruk en løkke som går *bakover* gjennom arrayen. Bygg opp beskjeden som én tekst, og skriv den ut på én linje.

**Forventet svar:** `Du har knekt den hemmelige koden!`

<details>
<summary>💡 Hint</summary>

Løkka må starte på den *siste* plassen og telle *nedover* til og med 0. Da må alle de tre delene av `for`-linja endres.

Lag en tom tekst (`""`) utenfor løkka. Hver runde legger du til ett ord og et mellomrom. Skriv ut teksten etter løkka.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const ord = ["koden!", "hemmelige", "den", "knekt", "har", "Du"];

let beskjed = "";
for (let i = ord.length - 1; i >= 0; i--) {
  beskjed = beskjed + ord[i] + " ";
}

console.log(beskjed);
```

Alle tre delene av `for`-linja er snudd:
- `let i = ord.length - 1` – start på den siste plassen.
- `i >= 0` – fortsett til og med plass 0.
- `i--` – tell nedover.

Denne løsningen får et usynlig mellomrom helt til slutt. Vil du unngå det, kan du bare legge til mellomrommet når `i > 0`.

</details>

---

## Del 3 – Objekter

Et objekt samler ting som hører sammen. I en array har hver verdi et *nummer*. I et objekt har hver verdi et *navn*, og det kaller vi en *egenskap*.

> **Slik ser det ut**
>
> ```js
> const katt = { navn: "Pusur", alder: 4, farge: "grå" };
>
> console.log(katt.navn);    // Pusur
> katt.alder = 5;            // endrer en egenskap
> katt.innekatt = true;      // lager en ny egenskap
> console.log(katt.vekt);    // undefined – egenskapen finnes ikke
> console.log(katt);         // { navn: 'Pusur', alder: 5, farge: 'grå', innekatt: true }
> ```

### Oppgave 12 – Din egen spillfigur ⭐

**Lag fila:** `12-figur.js`

Lag et objekt for en spillfigur du liker. Det skal ha et navn, hvilket spill figuren er fra, og hvilket level den er på. Legg til minst én egenskap du finner på selv.

Skriv ut en setning med verdier fra objektet.

**Forventet svar:** noe som ligner på `Steve fra Minecraft er på level 12.`

<details>
<summary>💡 Hint</summary>

Husk komma mellom egenskapene. Et egenskapsnavn kan ikke ha mellomrom, så skriv for eksempel `favorittSpill`. Bruk backticks og `${ }` for å sette verdier inn i en tekst.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const figur = {
  navn: "Steve",
  spill: "Minecraft",
  level: 12,
  favorittVerktøy: "diamanthakke"
};

console.log(`${figur.navn} fra ${figur.spill} er på level ${figur.level}.`);
```

</details>

### Oppgave 13 – Level up ⭐

**Lag fila:** `13-level-up.js`

```js
const figur = { navn: "Steve", liv: 20, gull: 0, level: 1 };
```

Dette skjer med Steve, i denne rekkefølgen:
1. Steve finner 50 gull.
2. Han blir truffet av en creeper og mister 7 liv.
3. Han går opp ett level.

Gjør endringene med kode under objektet. Ikke skriv de nye tallene rett inn i objektet. Skriv ut hele objektet til slutt.

**Forventet svar:** `{ navn: 'Steve', liv: 13, gull: 50, level: 2 }`

<details>
<summary>💡 Hint</summary>

Den nye verdien er den gamle verdien pluss eller minus noe. Det er samme triks som da kiosken trakk 25 kr fra pengene. Endrer du startverdiene i objektet, skal programmet fortsatt regne riktig.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const figur = { navn: "Steve", liv: 20, gull: 0, level: 1 };

figur.gull = figur.gull + 50;
figur.liv = figur.liv - 7;
figur.level = figur.level + 1;

console.log(figur);
```

Høyre side regnes ut først, med den gamle verdien. Så lagres svaret i egenskapen. Kortere skrivemåter som gjør det samme: `figur.gull += 50;`, `figur.liv -= 7;` og `figur.level++;`.

</details>

### Oppgave 14 – Finn feilene ⭐⭐

**Lag to filer:**
- `14a-stor-bokstav.js`
- `14b-komma.js`

Begge programmene har én feil. Kjør dem, se hva som skjer, og fiks dem.

**14a** skal skrive `Steve har 20 liv.`

```js
const figur = { navn: "Steve", liv: 20, gull: 0, level: 1 };

console.log(`${figur.Navn} har ${figur.liv} liv.`);
```

**14b** skal skrive ut objektet.

```js
const figur = {
  navn: "Steve"
  liv: 20,
  gull: 0
};

console.log(figur);
```

**Forventet svar:** `Steve har 20 liv.` og `{ navn: 'Steve', liv: 20, gull: 0 }`

<details>
<summary>💡 Hint til 14a</summary>

`undefined` betyr at egenskapen ikke finnes. Sammenlign navnet i `console.log` med navnet i objektet, bokstav for bokstav.

</details>

<details>
<summary>💡 Hint til 14b</summary>

Les feilmeldingen ovenfra. Node peker på linje 3, men feilen står ofte på linja *før* den Node peker på. Hva mangler på slutten av linje 2?

</details>

<details>
<summary>✅ Løsningsforslag</summary>

**14a**

```js
const figur = { navn: "Steve", liv: 20, gull: 0, level: 1 };

console.log(`${figur.navn} har ${figur.liv} liv.`);
```

JavaScript skiller mellom store og små bokstaver. `Navn` og `navn` er to forskjellige egenskaper, og `Navn` finnes ikke. Derfor ble det `undefined`.

**14b**

```js
const figur = {
  navn: "Steve",
  liv: 20,
  gull: 0
};

console.log(figur);
```

Det manglet komma etter `"Steve"`. Alle egenskaper unntatt den siste må ha komma etter seg.

</details>

### Oppgave 15 – Gjett: const og objekter ⭐⭐

**Lag fila:** `15-const.js`

**Ikke kjør koden ennå.** Skriv det du tror kommer ut som kommentarer, og kjør den etterpå.

```js
const figur = { navn: "Alex", liv: 20 };

figur.liv = 15;
console.log(figur);

figur.sverd = "diamant";
console.log(figur);

figur = { navn: "Creeper", liv: 20 };
console.log(figur);
```

Alle tre linjene endrer noe, og `figur` er laget med `const`. Hvorfor krasjer bare den siste?

<details>
<summary>💡 Hint</summary>

`const` passer på *variabelen* `figur`: den skal alltid være det samme objektet. Hva som ligger *inni* objektet, kan du endre så mye du vil. Hvilken av linjene prøver å gi `figur` et helt nytt objekt?

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const figur = { navn: "Alex", liv: 20 };

figur.liv = 15;
console.log(figur);   // { navn: 'Alex', liv: 15 }

figur.sverd = "diamant";
console.log(figur);   // { navn: 'Alex', liv: 15, sverd: 'diamant' }

figur = { navn: "Creeper", liv: 20 };   // TypeError: Assignment to constant variable.
console.log(figur);   // kjører aldri
```

De to første endringene skjer *inni* objektet. `figur` peker fortsatt på det samme objektet, og det tillater `const`. Den siste linja prøver å la `figur` peke på et *helt nytt* objekt. Det er å gi variabelen en ny verdi, og det er akkurat det `const` forbyr. Programmet krasjer, og den siste `console.log` blir aldri kjørt.

</details>

### Oppgave 16 – Karakterkortet ⭐⭐

**Lag fila:** `16-karakterer.js`

Et objekt kan ha en array inni seg:

```js
const elev = {
  navn: "Sara",
  klasse: "1IMA",
  karakterer: [4, 5, 3, 6, 5]
};
```

Skriv ut hvor mange karakterer Sara har, hva den første karakteren er, og gjennomsnittet av karakterene. Gjennomsnittet regner du ut med en løkke.

**Forventet svar:**

```
Sara har 5 karakterer.
Den første er 4.
Snittet er 4.6.
```

<details>
<summary>💡 Hint</summary>

`elev.karakterer` er en helt vanlig array. Alt du har gjort med arrays i Del 1 og 2, kan du gjøre med den. Du må bare skrive `elev.karakterer` der du før skrev navnet på arrayen.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const elev = {
  navn: "Sara",
  klasse: "1IMA",
  karakterer: [4, 5, 3, 6, 5]
};

let sum = 0;
for (let i = 0; i < elev.karakterer.length; i++) {
  sum = sum + elev.karakterer[i];
}

console.log(`${elev.navn} har ${elev.karakterer.length} karakterer.`);
console.log(`Den første er ${elev.karakterer[0]}.`);
console.log(`Snittet er ${sum / elev.karakterer.length}.`);
```

</details>

---

## Del 4 – Arrays med objekter

En array kan inneholde objekter. Det ligner på en tabell i en database: hvert objekt er en rad, og hver egenskap er en kolonne.

> **Slik ser det ut**
>
> ```js
> const dyr = [
>   { navn: "Pusur", art: "katt", alder: 4 },
>   { navn: "Fido",  art: "hund", alder: 7 }
> ];
>
> console.log(dyr[1].navn);   // Fido – først plassen, så egenskapen
> console.table(dyr);         // viser hele lista som en tabell
>
> for (let i = 0; i < dyr.length; i++) {
>   console.log(dyr[i].navn); // Pusur, så Fido
> }
> ```

Oppgave 17–20 bruker denne lista. Kopier den inn øverst i hver fil. Kjør gjerne `console.table(pokemon);` først, så ser du hva som ligger i den.

```js
const pokemon = [
  { navn: "Pikachu",    type: "Elektrisk", hp: 35,  angrep: 55 },
  { navn: "Charmander", type: "Ild",       hp: 39,  angrep: 52 },
  { navn: "Bulbasaur",  type: "Gress",     hp: 45,  angrep: 49 },
  { navn: "Squirtle",   type: "Vann",      hp: 44,  angrep: 48 },
  { navn: "Snorlax",    type: "Normal",    hp: 160, angrep: 110 },
  { navn: "Gyarados",   type: "Vann",      hp: 95,  angrep: 125 },
  { navn: "Eevee",      type: "Normal",    hp: 55,  angrep: 55 },
  { navn: "Gengar",     type: "Spøkelse",  hp: 60,  angrep: 65 }
];
```

### Oppgave 17 – Pokédex ⭐

**Lag fila:** `17-pokedex.js`

1. Bruk en løkke til å skrive ut navnet på alle Pokémonene.
2. Bruk en løkke til å skrive ut en setning om hver av dem.

**Forventet svar:** først åtte navn, og så

```
Pikachu har 35 HP
Charmander har 39 HP
...
Gengar har 60 HP
```

<details>
<summary>💡 Hint</summary>

Inni løkka er `pokemon[i]` én Pokémon, altså et helt objekt. Navnet henter du fra objektet med punktum.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
// (pokemon-lista øverst)

for (let i = 0; i < pokemon.length; i++) {
  console.log(pokemon[i].navn);
}

for (let i = 0; i < pokemon.length; i++) {
  console.log(`${pokemon[i].navn} har ${pokemon[i].hp} HP`);
}
```

</details>

### Oppgave 18 – Finn feilen: åtte undefined ⭐⭐

**Lag fila:** `18-undefined.js`

Denne løkka skal skrive ut navnene, men skriver `undefined` åtte ganger. Finn feilen, og fiks den.

```js
for (let i = 0; i < pokemon.length; i++) {
  console.log(pokemon.navn);
}
```

**Forventet svar:** åtte navn, fra `Pikachu` til `Gengar`.

<details>
<summary>💡 Hint</summary>

`pokemon` er hele arrayen. Har en array en egenskap som heter `navn`? Hvordan hentet du én Pokémon i oppgave 17?

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
for (let i = 0; i < pokemon.length; i++) {
  console.log(pokemon[i].navn);
}
```

`pokemon` er hele lista, og lista har ingen egenskap som heter `navn`. Først må du hente *én* Pokémon med `pokemon[i]`, og så kan du hente navnet med `.navn`.

</details>

### Oppgave 19 – Utvalg ⭐⭐

**Lag fila:** `19-utvalg.js`

1. Skriv ut navnet på alle Pokémonene av typen `"Vann"`.
2. Tell hvor mange som har mer enn 50 HP.

**Forventet svar:**

```
Squirtle
Gyarados
4 har mer enn 50 HP
```

<details>
<summary>💡 Hint</summary>

Du trenger en `if` inni løkka. Tekst sammenlignes med `===`, akkurat som tall. Pass på stor forbokstav: `"Vann"` og `"vann"` er ikke det samme. Tellingen gjør du som i oppgave 7.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
// (pokemon-lista øverst)

for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].type === "Vann") {
    console.log(pokemon[i].navn);
  }
}

let antall = 0;
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].hp > 50) {
    antall = antall + 1;
  }
}
console.log(`${antall} har mer enn 50 HP`);
```

</details>

### Oppgave 20 – Sterkest ⭐⭐⭐

**Lag fila:** `20-sterkest.js`

Finn Pokémonen med høyest angrep.

**Forventet svar:** `Sterkest: Gyarados med 125 i angrep`

Sammenlign med oppgave 9, der du brukte to arrays. Hva var enklest?

<details>
<summary>💡 Hint</summary>

Det er samme idé som i oppgave 9, men enklere. Nå kan du huske hele Pokémon-objektet, ikke bare plassen. Start med den første, og bytt den ut hvis du finner en med høyere angrep.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
// (pokemon-lista øverst)

let sterkest = pokemon[0];

for (let i = 1; i < pokemon.length; i++) {
  if (pokemon[i].angrep > sterkest.angrep) {
    sterkest = pokemon[i];
  }
}

console.log(`Sterkest: ${sterkest.navn} med ${sterkest.angrep} i angrep`);
```

I oppgave 9 måtte du huske både det høyeste tallet og plassen, og så slå opp navnet i en annen array. Her husker du hele objektet, og da har du både navnet og angrepet på ett sted.

</details>

### Oppgave 21 – Bloons TD 6: tårnbutikken ⭐⭐

**Lag fila:** `21-tarn.js`

Du starter spillet med 650 penger.

```js
const tårn = [
  { navn: "Dart Monkey",      pris: 200 },
  { navn: "Boomerang Monkey", pris: 315 },
  { navn: "Bomb Shooter",     pris: 375 },
  { navn: "Tack Shooter",     pris: 260 },
  { navn: "Sniper Monkey",    pris: 350 },
  { navn: "Super Monkey",     pris: 2500 }
];
let penger = 650;
```

*Prisene er fra Medium. Spillet justerer prisene av og til, så de kan være litt annerledes enn det du ser i spillet. Bruk tallene her, så stemmer sjekken.*

1. Skriv ut alle tårnene du har råd til.
2. Skriv ut alle tårnene du har råd til *to* av.
3. ⭐⭐⭐ Kjøp Dart Monkeys helt til du ikke har råd til flere. Bruk en `while`-løkke. Hvor mange fikk du, og hvor mye har du igjen?

**Forventet svar:**

```
Har råd til:
Dart Monkey
Boomerang Monkey
Bomb Shooter
Tack Shooter
Sniper Monkey
Har råd til to av:
Dart Monkey
Boomerang Monkey
Tack Shooter
Du kjøpte 3 Dart Monkeys og har 50 igjen.
```

<details>
<summary>💡 Hint</summary>

1. En `if` inni løkka: er prisen mindre enn eller lik pengene?
2. Samme spørsmål, men nå skal to tårn få plass. Hva koster to?
3. Så lenge du har råd til en Dart Monkey, trekker du prisen fra pengene og teller én ape til. Det er det samme som «120 kr, boksen koster 25» fra kiosken.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
// (tårn-lista og let penger = 650; øverst)

console.log("Har råd til:");
for (let i = 0; i < tårn.length; i++) {
  if (tårn[i].pris <= penger) {
    console.log(tårn[i].navn);
  }
}

console.log("Har råd til to av:");
for (let i = 0; i < tårn.length; i++) {
  if (tårn[i].pris * 2 <= penger) {
    console.log(tårn[i].navn);
  }
}

const dartMonkey = tårn[0];
let antall = 0;
while (penger >= dartMonkey.pris) {
  penger = penger - dartMonkey.pris;
  antall = antall + 1;
}
console.log(`Du kjøpte ${antall} Dart Monkeys og har ${penger} igjen.`);
```

Del 3 må stå til slutt, fordi `while`-løkka endrer `penger`. Står den først, har du bare 50 igjen når du sjekker hva du har råd til.

</details>

### Oppgave 22 – Bloons TD 6: bloonsene lekker ⭐⭐⭐

**Lag fila:** `22-lekker.js`

Du spiller på Medium og har 150 liv. Da slipper en hel bølge gjennom forsvaret ditt.

En bloon tar like mange liv som den har lag. En rosa bloon har fem lag (rosa → gul → grønn → blå → rød), så den tar 5 liv. En svart bloon har to rosa bloons inni seg, så den tar 1 + 5 + 5 = 11. En keramisk tar hele 104.

```js
const bølge = [
  { farge: "rød",      skade: 1 },
  { farge: "blå",      skade: 2 },
  { farge: "grønn",    skade: 3 },
  { farge: "gul",      skade: 4 },
  { farge: "rosa",     skade: 5 },
  { farge: "svart",    skade: 11 },
  { farge: "hvit",     skade: 11 },
  { farge: "keramisk", skade: 104 }
];
let liv = 150;
```

1. Alle bloonsene i bølgen slipper gjennom. Regn ut hvor mange liv du har igjen.
2. Har du mer enn 0 liv igjen, skal programmet skrive `Du overlevde med 9 liv.` (med det riktige tallet). Ellers skal det skrive `GAME OVER`.
3. Legg til én keramisk bloon til i bølgen med `push`, og kjør igjen.

**Forventet svar:** `Du overlevde med 9 liv.` Etter `push`: `GAME OVER`

<details>
<summary>💡 Hint</summary>

Trekk skaden fra livene inni løkka, én bloon om gangen. `if`-en som bestemmer om du overlevde, skal stå *etter* løkka. Ellers får du én melding for hver bloon.

`push`-linja må stå *før* løkka, ellers er løkka allerede ferdig når den nye bloonen kommer.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
// (bølge-lista og let liv = 150; øverst)

bølge.push({ farge: "keramisk", skade: 104 });   // del 3 – fjern linja for del 1 og 2

for (let i = 0; i < bølge.length; i++) {
  liv = liv - bølge[i].skade;
}

if (liv > 0) {
  console.log(`Du overlevde med ${liv} liv.`);
} else {
  console.log("GAME OVER");
}
```

Uten den ekstra bloonen tar bølgen 141 liv, og du har 9 igjen. Med den ekstra keramiske tar bølgen 245 liv, og du ender på −95.

</details>

### Oppgave 23 – Kvittering i kiosken ⭐⭐

**Lag fila:** `23-kvittering.js`

```js
const kurv = [
  { vare: "Energidrikk", pris: 25, antall: 2 },
  { vare: "Skolebolle",  pris: 20, antall: 1 },
  { vare: "Sjokolade",   pris: 18, antall: 3 },
  { vare: "Vann",        pris: 15, antall: 1 }
];
```

Skriv ut en kvittering: én linje per vare, og totalen til slutt.

**Forventet svar:**

```
2 x Energidrikk = 50 kr
1 x Skolebolle = 20 kr
3 x Sjokolade = 54 kr
1 x Vann = 15 kr
Totalt: 139 kr
```

<details>
<summary>💡 Hint</summary>

For hver vare regner du pris ganger antall. Skriv ut linja inni løkka, og legg summen til en total utenfor løkka. Det er samme mønster som i oppgave 6.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
// (kurv-lista øverst)

let total = 0;
for (let i = 0; i < kurv.length; i++) {
  const sum = kurv[i].pris * kurv[i].antall;
  console.log(`${kurv[i].antall} x ${kurv[i].vare} = ${sum} kr`);
  total = total + sum;
}

console.log(`Totalt: ${total} kr`);
```

</details>

### Oppgave 24 – Rabatt og aldersgrense ⭐⭐⭐

**Lag fila:** `24-kiosk.js`

Kopier kurven og koden fra oppgave 23, og bygg videre:

1. **Rabatt:** handler du for mer enn 100 kr, får du 20 kr i avslag. Skriv ut hva kunden skal betale.
2. **Aldersgrense:** energidrikk selges bare til de som er 16 eller eldre. Lag `let alder = 15;` øverst. Er kunden under 16, skal energidrikken ikke telles med, og kvitteringen skal si `Energidrikk: ikke tillatt (under 16)`.

**Forventet svar:** med `alder = 15`:

```
Energidrikk: ikke tillatt (under 16)
1 x Skolebolle = 20 kr
3 x Sjokolade = 54 kr
1 x Vann = 15 kr
Totalt: 89 kr
Å betale: 89 kr
```

Endre til `alder = 16`. Da skal totalen bli 139 kr, og kunden skal betale 119 kr.

<details>
<summary>💡 Hint</summary>

Rabatten bestemmer du *etter* løkka. Først må du vite totalen.

Aldersgrensen må sjekkes *inni* løkka, for hver vare. Er dette energidrikk, *og* er kunden under 16? Begge deler må stemme, og det skriver du med `&&`.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
// (kurv-lista øverst)
let alder = 15;

let total = 0;
for (let i = 0; i < kurv.length; i++) {
  const linje = kurv[i];

  if (linje.vare === "Energidrikk" && alder < 16) {
    console.log("Energidrikk: ikke tillatt (under 16)");
  } else {
    const sum = linje.pris * linje.antall;
    console.log(`${linje.antall} x ${linje.vare} = ${sum} kr`);
    total = total + sum;
  }
}
console.log(`Totalt: ${total} kr`);

let åBetale = total;
if (total > 100) {
  åBetale = total - 20;
}
console.log(`Å betale: ${åBetale} kr`);
```

`const linje = kurv[i];` er bare en snarvei, så du slipper å skrive `kurv[i]` mange ganger. Det er `else`-en som sørger for at energidrikken ikke blir lagt til totalen når kunden er for ung.

</details>

---

## Bonusrunde – skikkelige nøtter 🥜

Disse oppgavene krever noe du ikke har lært ennå. Hvert hint sier hva du kan søke etter, for eksempel på MDN, som er den offisielle dokumentasjonen for JavaScript. Det er ikke juks. Slik jobber programmerere hele tiden.

### Bonus A – Pokémon-kamp ⭐⭐⭐⭐

**Lag fila:** `bonus-a-kamp.js`

Bruk Pokémon-lista fra Del 4. La to Pokémoner sloss etter disse reglene:
- Den første angriper først. Så slår den andre tilbake, hvis den fortsatt lever. Det er én runde.
- Den som blir angrepet, mister angrepet til motstanderen delt på 10, rundet *ned*, i HP.
- Kampen fortsetter til én av dem har 0 HP eller mindre.

Skriv ut hvem som vinner, og i hvilken runde.

**Forventet svar:** Pikachu mot Charmander gir `Charmander vinner i runde 7!`. Prøv andre par etterpå.

<details>
<summary>💡 Hint</summary>

Søk opp **«Math.floor javascript»**. Den runder ned.

Du trenger en `while`-løkke som går så lenge *begge* har mer enn 0 HP. Lag egne variabler for HP-en under kampen, så lista ikke endres.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
// (pokemon-lista øverst)

const a = pokemon[0];   // Pikachu
const b = pokemon[1];   // Charmander

let hpA = a.hp;
let hpB = b.hp;
let runde = 0;

while (hpA > 0 && hpB > 0) {
  runde = runde + 1;

  hpB = hpB - Math.floor(a.angrep / 10);
  if (hpB > 0) {
    hpA = hpA - Math.floor(b.angrep / 10);
  }
}

if (hpA > 0) {
  console.log(`${a.navn} vinner i runde ${runde}!`);
} else {
  console.log(`${b.navn} vinner i runde ${runde}!`);
}
```

Bytt ut plassene i `pokemon[0]` og `pokemon[1]` for å prøve andre par.

</details>

### Bonus B – Tell typene ⭐⭐⭐⭐

**Lag fila:** `bonus-b-typer.js`

Lag et objekt som teller hvor mange Pokémoner det er av hver type. Programmet skal finne typene selv. Du skal ikke skrive dem inn.

**Forventet svar:**

```
{ Elektrisk: 1, Ild: 1, Gress: 1, Vann: 2, Normal: 2, 'Spøkelse': 1 }
```

(Node setter hermetegn rundt `'Spøkelse'` fordi navnet har en ø i seg. Det er helt i orden.)

<details>
<summary>💡 Hint</summary>

Søk opp **«javascript object bracket notation»**. `antall.Vann` og `antall["Vann"]` betyr det samme. Men med hakeparenteser kan du bruke en *variabel* i stedet for å skrive navnet selv.

En egenskap som ikke finnes ennå, er `undefined`. Den må få verdien 0 før du kan legge til 1.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
// (pokemon-lista øverst)

const antall = {};

for (let i = 0; i < pokemon.length; i++) {
  const type = pokemon[i].type;

  if (antall[type] === undefined) {
    antall[type] = 0;
  }
  antall[type] = antall[type] + 1;
}

console.log(antall);
```

`antall.type` ville betydd en egenskap som *heter* «type». `antall[type]` bruker *verdien* i variabelen `type`, for eksempel `"Vann"`.

</details>

### Bonus C – Terningsimulator ⭐⭐⭐⭐

**Lag fila:** `bonus-c-terning.js`

Kast en terning 6000 ganger, og tell hvor mange ganger hver side kom opp.

**Forventet svar:** omtrent 1000 av hver. Det blir aldri helt likt, og det blir nye tall hver gang du kjører.

<details>
<summary>💡 Hint</summary>

Søk opp **«Math.random javascript»**. `Math.random()` gir et tilfeldig desimaltall mellom 0 og 1. Gang det opp, rund ned med `Math.floor`, og legg til 1. Da har du en terning.

Lag en array med seks nuller, én teller for hver side av terningen. Kaster du en firer, skal teller nummer fire øke, og den står på plass 3.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const teller = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < 6000; i++) {
  const terning = Math.floor(Math.random() * 6) + 1;
  teller[terning - 1] = teller[terning - 1] + 1;
}

for (let i = 0; i < teller.length; i++) {
  console.log(`${i + 1}: ${teller[i]}`);
}
```

`Math.random() * 6` gir et tall fra 0 til (men ikke med) 6. `Math.floor` gjør det til 0, 1, 2, 3, 4 eller 5, og `+ 1` gir 1–6.

</details>

### Bonus D – Bondesjakk ⭐⭐⭐⭐⭐

**Lag fila:** `bonus-d-bondesjakk.js`

Et bondesjakkbrett kan lagres som en array med tre arrays inni:

```js
const brett = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "X", "X"]
];
```

Skriv et program som sjekker om X har tre på rad: vannrett, loddrett eller på skrå. Programmet skal skrive `X har vunnet!` eller `Ingen har vunnet ennå.`

**Forventet svar:** `X har vunnet!`

Lag deretter et brett der ingen har vunnet, og sjekk at programmet skjønner det.

<details>
<summary>💡 Hint</summary>

Søk opp **«2D array javascript»**. `brett[1]` er hele den midterste raden, og den er selv en array. `brett[1][2]` er derfor den siste ruta i den midterste raden.

Det finnes åtte måter å vinne på: tre rader, tre kolonner og to diagonaler.

</details>

<details>
<summary>✅ Løsningsforslag</summary>

```js
const brett = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "X", "X"]
];

let vunnet = false;

// tre rader
for (let rad = 0; rad < 3; rad++) {
  if (brett[rad][0] === "X" && brett[rad][1] === "X" && brett[rad][2] === "X") {
    vunnet = true;
  }
}

// tre kolonner
for (let kol = 0; kol < 3; kol++) {
  if (brett[0][kol] === "X" && brett[1][kol] === "X" && brett[2][kol] === "X") {
    vunnet = true;
  }
}

// to diagonaler
if (brett[0][0] === "X" && brett[1][1] === "X" && brett[2][2] === "X") {
  vunnet = true;
}
if (brett[0][2] === "X" && brett[1][1] === "X" && brett[2][0] === "X") {
  vunnet = true;
}

if (vunnet) {
  console.log("X har vunnet!");
} else {
  console.log("Ingen har vunnet ennå.");
}
```

Et brett der ingen har vunnet, for eksempel:

```js
const brett = [
  ["X", "O", "X"],
  ["X", "O", "O"],
  ["O", "X", "X"]
];
```

</details>

---

## Ordliste

| Kode | Betyr |
|---|---|
| `["katt", "hund"]` | En array – en liste med verdier. |
| `dyr[0]` | Det *første* elementet. Tellingen starter på 0. |
| `dyr.length` | Hvor mange elementer arrayen har. |
| `dyr.push(x)` | Legger `x` til bakerst. |
| `dyr.pop()` | Fjerner det bakerste elementet. |
| `for (let i = 0; i < dyr.length; i++)` | Går gjennom arrayen, én plass om gangen. |
| `i` og `dyr[i]` | `i` er plassen. `dyr[i]` er det som ligger der. |
| `{ navn: "Pusur", alder: 4 }` | Et objekt: verdier som har et navn. |
| `katt.navn` | Henter egenskapen `navn` fra objektet. |
| `katt.alder = 5;` | Endrer en egenskap, eller lager den hvis den ikke fantes. |
| `undefined` | Det finnes ingenting der: plassen eller egenskapen finnes ikke. |
| `const` med objekt | Variabelen kan ikke byttes ut, men innholdet kan endres. |
| `dyr[1].navn` | Navnet til objektet på plass 1 i arrayen. |
| `console.table(dyr)` | Viser en array med objekter som en tabell. |
| Summere og telle | En variabel *utenfor* løkka, som du legger til i *inni* løkka. |
