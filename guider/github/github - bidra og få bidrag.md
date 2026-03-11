# Github - viktige prinsipper

En av mange fordeler med å bruke GitHub er at det gjør det enkelt for andre å bidra til prosjektene dine, og for deg å bidra til andres prosjekter. En annen fordel er at du kan teste ut funksjonalitet uten å påvirke hovedversjonen av prosjektet. Her er noen tips for hvordan du kan gjøre dette på en effektiv måte.

Aller først: Et veldig viktig prinsipp når du skal bidra og samarbeide, er at du ikke gjør endringer i mange filer - og er "all over the place" - på en gang. Det gjør det vanskelig for den som skal se gjennom endringene dine å forstå hva du har gjort, og det kan føre til at endringene dine blir avvist. Det kan også bli merge-konflikter (dvs. når to personer endrer samme fil, og kodeforslagene overlapper hverandre). Prøv heller å gjøre små, fokuserte endringer som er lette å forstå og gjennomgå.

Meny:
- [Hvordan samarbeide ved å bruke collaborators](#hvordan-samarbeide-ved-%C3%A5-bruke-collaborators)
- [Hvordan opprette en branch](#hvordan-opprette-en-branch)
- [Hvordan bidra til andres prosjekter](#hvordan-bidra-til-andres-prosjekter)


## Hvordan samarbeide ved å bruke collaborators

Den enkleste måten man kan samarbeide på, er ved å legge til hverandre som "collaborators" i GitHub. Det gjør at dere begge/alle har tilgang til å gjøre endringer i prosjektet, og det er ingen "pull request" som må godkjennes for at endringene skal bli en del av prosjektet. Det kan være en fin måte å samarbeide på, spesielt dersom dere har et godt system på hvem som gjør hva, og dere igjen ikke er "all over the place" i prosjektet til en hver tid.

Du legger til collaborators ved å gå til "Settings" for prosjektet ditt, og deretter "Manage access". Klikk på "Invite a collaborator", og skriv inn brukernavnet til personen du vil legge til. Når de har akseptert invitasjonen, og lastet ned prosjektet, vil de ha tilgang til dette, og dere kan begynne å samarbeide.

## Hvordan opprette en branch

Dersom dere ønsker å teste ut funksjonalitet, som potensielt kan være litt "skummel" å teste på en "live" versjon av prosjektet, kan dere opprette en "branch" i GitHub. Det gjør at dere kan gjøre endringer i denne branchen uten at det påvirker hovedversjonen av prosjektet. Når dere er fornøyde med endringene, kan dere opprette en "pull request" for å få endringene inn i hovedversjonen.

For å opprette en branch, kan du gjøre dette på flere måter:
- Gå til GitHub-siden for prosjektet ditt, og klikk på "Branch: main" (eller hva hovedbranchen din heter). Deretter skriver du inn navnet på den nye branchen, og klikker på "Create branch". 
- I Github Desktop kan du klikke på "Current branch" og deretter "New branch". Skriv inn navnet på den nye branchen, og klikk på "Create branch".

Nå kan du gjøre endringer i denne branchen uten at det påvirker hovedversjonen av prosjektet. Du kjører i praksis to versjoner av prosjektet. Når du er fornøyd med endringene (og du har bekreftet at prosjektet fortsatt fungerer), kan du klikke på "Pull request" for å få endringene inn i hovedversjonen.

Det er uansett viktig å passe på hvilken branch du jobber i, og at du ikke gjør endringer i hovedbranchen uten å teste det først i en egen branch. Det kan være lurt å ha en "dev" branch som dere bruker til å teste ut funksjonalitet, og deretter merge denne inn i "main" når dere er fornøyde med endringene.

## Hvordan bidra til andres prosjekter

### Først fra synspunktet til den som vil bidra:

**Finn et prosjekt du er interessert i**: Det kan være alt fra et åpen kildekode-prosjekt til en blogg eller et verktøy du liker.

I første omgang kan du bruke mitt testprosjekt som du finner her: [Testprosjekt](https://github.com/hausnes/temp-samarbeid).

**Les dokumentasjonen**: Før du begynner å bidra, bør du lese gjennom prosjektets dokumentasjon, spesielt `CONTRIBUTING.md`-filen hvis den finnes. Denne filen inneholder ofte retningslinjer for hvordan du kan bidra, hvilke standarder som skal følges, og hvordan du skal formatere koden din.

I dette konkrete eksempelet får du tildelt en av filene som ligger her, og du skal gjøre følgende med koden:
- Legge inn en kommentar i koden som forklarer hva den gjør.
- Gi et eksempel på å bruke funksjonen, og hva den returnerer.

**Last ned prosjektet**: Du kan klone prosjektet til din lokale maskin ved å bruke Git. Dette gjør det lettere å jobbe med koden og teste endringene dine.

- **Alternativ 1**: Bruk GitHub Desktop, som er et grafisk grensesnitt for Git. Det gjør det mer visuelt å klone, lage grener og sende inn pull requests uten å bruke kommandolinjen. Velg "Clone repository", lim inn URL-en til prosjektet og følg instruksjonene. Du velger at du primært ønsker å bidra til prosjektet, om du får spørsmål om det.
- **Alternativ 2**: Bruk kommandolinjen. Åpne terminalen og kjør følgende kommando:
    ```bash
    git clone https://github.com/hausnes/temp-samarbeid.git
    ```

Deretter åpner du prosjektet i Visual Studio Code, eller en annen kodeeditor. Åpne filen du har blitt bedt om å bidra til, og legg inn kommentaren og eksempelet som beskrevet.

Når du er fornøyd med endringene dine, må du legge til og "commite" endringene.
- **Alternativ 1**: Ved hjelp av GitHub Desktop kan du enkelt se hvilke filer som er endret, legge til en beskrivelse av endringene dine og sende inn en pull request.
- **Alternativ 2**: Bruk kommandolinjen. Kjør følgende kommandoer:
    ```bash
    git add .
    git commit -m "La til kommentar og eksempel for funksjonen"
    git push origin main
    ```

Nå har eieren av prosjektet (i dette tilfellet lærer) mulighet til å se gjennom endringene dine, gi tilbakemelding og eventuelt godkjenne dem. Du må vente i spenning på om endringene dine blir godkjent og en del av prosjektet. :)

### Fra synspunktet til den som mottar bidrag:

Nå ser vi på datamaskinen til lærer, og hvordan en pull request ser ut der. Når du har sendt inn en pull request, vil eieren av prosjektet (i dette tilfellet lærer) kunne se gjennom endringene dine, gi tilbakemelding og eventuelt godkjenne dem.

## Om merge-konflikter

En merge-konflikt oppstår når Git ikke klarer å avgjøre automatisk hvilke endringer som skal beholdes når to versjoner av samme fil skal slås sammen. Det skjer som regel når to personer har redigert den samme linjen, eller samme del av en fil, på hver sin branch.

Det betyr ikke at noe er ødelagt. Det betyr bare at Git trenger hjelp fra et menneske til å avgjøre hva som er riktig sluttresultat.

Typiske årsaker til merge-konflikter er:
- To personer endrer samme tekstlinje i en fil.
- En person sletter kode som en annen person samtidig har endret.
- To personer flytter rundt på eller omorganiserer innhold i samme område av filen.

Når en merge-konflikt oppstår, markerer Git konflikten direkte i fila. Da kan det se omtrent slik ut:

```txt
<<<<<<< HEAD
const navn = "Ola";
=======
const navn = "Kari";
>>>>>>> ny-branch
```

Dette betyr:
- Innholdet mellom `<<<<<<< HEAD` og `=======` er versjonen som allerede ligger i branchen du står i.
- Innholdet mellom `=======` og `>>>>>>> ny-branch` er versjonen som kommer fra branchen du prøver å merge inn.

Du må så bestemme hva sluttresultatet skal være. Kanskje skal du beholde den ene versjonen, kanskje den andre, eller kanskje du skal skrive en ny versjon som kombinerer begge.

### Eksempel: En person sletter, en annen endrer

Utgangspunkt:

```js
function visMelding() {
    console.log("Hei");
}
```

Person A sletter hele funksjonen fordi den ikke lenger brukes.

Person B endrer funksjonen til:

```js
function visMelding() {
    console.log("Hei alle sammen");
}
```

Her må dere ta stilling til hva som faktisk er riktig:
- Skal funksjonen slettes?
- Skal den beholdes i oppdatert versjon?

Git kan ikke vite dette automatisk, fordi begge endringene kan være logiske hver for seg. En person må ta et valg før konflikten er løst.

### Hvordan løse en merge-konflikt i praksis

1. Åpne fila som Git sier har konflikt.
2. Finn konfliktmarkeringene: `<<<<<<<`, `=======` og `>>>>>>>`.
3. Les begge versjonene nøye.
4. Bestem hva sluttresultatet skal være.
5. Slett konfliktmarkeringene og behold bare den ferdige koden.
6. Test at prosjektet fortsatt fungerer.
7. Commit endringen på nytt.

Etter at konflikten er løst, skal fila igjen se helt normal ut, uten konfliktmarkeringer.

Det viktigste er altså dette: En merge-konflikt er ikke farlig, men et tegn på at to endringer må vurderes manuelt. Jo mindre og mer fokuserte endringer dere gjør om gangen, desto lettere blir det å unngå og løse slike konflikter.