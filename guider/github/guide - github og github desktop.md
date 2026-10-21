# Kom i gang med GitHub og publiser din egen nettside

> Følg denne veiledningen for å sette opp GitHub, lage din egen nettside og publisere den på nett, slik at du kan åpne den på mobil og PC, og dele den med venner!

---

## Før du starter

Du trenger:

- En PC med **Windows** eller **Mac** .
- **Visual Studio Code** installert.
- Tilgang til **e-posten** din (du må bekrefte e-postadressen når du lager konto). Det anbefales å bruke en e-postadresse som ikke er knyttet til skole eller jobb, da du kan miste tilgang til den senere.

### Ordliste

| Ord | Betydning |
|---|---|
| **Repository** (repo) | En prosjektmappe som ligger lagret på GitHub. |
| **Klone** | Laste ned en kopi av et repository til PC-en din. |
| **Commit** | Lagre et «øyeblikksbilde» av endringene dine, med en kort beskrivelse. |
| **Push** | Sende endringene dine fra PC-en opp til GitHub. |

> ⚠️ **Personvern:** Alt du legger i et offentlig (public) repository kan sees av alle på internett. Ikke legg ut personopplysninger, bilder av andre eller passord.

---

## 1. Opprett en GitHub-konto

1. Gå til [github.com](https://github.com).
2. Klikk på **Sign up** og følg instruksjonene for å lage en ny konto.
3. Velg et brukernavn du vil huske. Tenk over dette:
    - Bruk kun bokstavene **a–z**, tall og bindestrek (`-`). Ikke bruk æ, ø eller å.
    - Brukernavnet blir en del av nettadressen din, og kan sees av alle. Velg noe du kan stå for.
    - Tenk over om du vil ha fullt navn i brukernavnet. Fornavn og et tall eller en forkortelse kan være lurt (f.eks. `kari-n` eller `ola2010`).
4. **Bekreft e-postadressen din** med koden eller lenken GitHub sender deg. Uten dette vil ikke alt fungere senere.

---

## 2. Lag et repository for nettsiden din

1. Logg inn på GitHub.
2. Klikk på pluss-ikonet (**+**) øverst til høyre og velg **New repository**.
3. Gi repositoryet navnet **brukernavn.github.io** (bytt ut `brukernavn` med ditt eget GitHub-brukernavn).
    - Eksempel: Har du brukernavnet `kari-n`, skal repositoryet hete `kari-n.github.io`.
4. Velg **Public**.
5. Slå på / huk av for **Add README**.
6. Klikk **Create repository**.

> ⚠️ **Viktig:** Navnet må være **helt likt** brukernavnet ditt, etterfulgt av `.github.io`. Ett feil tegn, så vil ikke nettsiden dukke opp på riktig adresse!

---

## 3. Installer GitHub Desktop

1. Gå til [desktop.github.com](https://desktop.github.com) og last ned programmet.
2. Installer programmet.
3. Velg **Sign in to GitHub.com**. Nettleseren åpnes – logg inn der og klikk **Authorize** for å koble GitHub Desktop til kontoen din.

---

## 4. Klon repositoryet til din PC

1. Åpne **GitHub Desktop**.
2. Gå til **File** > **Clone repository**.
3. Finn repositoryet du nettopp lagde (`brukernavn.github.io`) i listen.
4. Velg hvor prosjektet skal lagres på PC-en. Det enkleste er å beholde standardmappen (`Dokumenter\GitHub`). **Husk hvor mappen ligger!**
    - Unngå å lagre i en mappe som synkroniseres med OneDrive – det kan skape problemer.
5. Klikk **Clone**.

---

## 5. Lag nettsiden i Visual Studio Code

1. Åpne mappen i **Visual Studio Code**. Du kan gjøre det på én av to måter:
    - I GitHub Desktop: velg **Open in Visual Studio Code**, eller
    - I VS Code: gå til **File** > **Open Folder** og velg mappen du nettopp klonet.
2. Får du spørsmålet *«Do you trust the authors of the files in this folder?»*, klikker du **Yes, I trust the authors**.
3. Høyreklikk i sidestolpen (til venstre) og velg **New File**.
4. Kall filen **index.html** (dette blir hovedsiden).
    - Bruk **små bokstaver**! `Index.html` vil ikke fungere.
    - Lim gjerne inn det du har jobbet med tidligere.
5. Lim inn denne HTML-koden (dersom du ikke har laget noe selv):

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Min første nettside</title>
</head>
<body>
    <h1>Hei verden!</h1>
    <p>Dette er min første nettside, publisert med GitHub Pages.</p>
</body>
</html>
```

6. Lagre filen med **Ctrl+S** (på Mac: **Cmd+S**).
    - Ser du en hvit prikk på fanen øverst, er filen **ikke** lagret ennå.

---

## 6. Publiser nettsiden din

1. Gå tilbake til **GitHub Desktop**.
2. Du ser nå endringene dine i listen til venstre.
3. Skriv en kort oppsummering i **Summary**-feltet nede til venstre, f.eks. `Første nettside`.
4. Klikk **Commit to main**.
5. Klikk **Push origin** i verktøylinjen øverst (knappen til høyre for **Current branch**).

---

## 7. Besøk nettsiden din!

- Etter noen minutter vil nettsiden være tilgjengelig på:

    `https://brukernavn.github.io`

- Du kan følge med på publiseringen under fanen **Actions** i repositoryet ditt på github.com. Når det er en grønn hake, er siden publisert.
- Del lenken med venner, familie – eller åpne den på mobilen din!

---

## Feilsøking

| Problem | Løsning |
|---|---|
| Endringene vises ikke i GitHub Desktop | Har du lagret filen (Ctrl+S)? Ligger filen i riktig mappe (den du klonet)? |
| Jeg ser README-teksten i stedet for nettsiden min | Filen `index.html` er ikke pushet, eller den har feil navn (husk små bokstaver). |
| Siden finnes ikke (404) | Sjekk at repositoryet heter nøyaktig `brukernavn.github.io`. Se også under **Settings** > **Pages** i repositoryet. Har du bekreftet e-postadressen din? |
| Endringene mine vises ikke på nettsiden | Vent et par minutter og sjekk fanen **Actions**. Oppdater siden med **Ctrl+F5** (på Mac: **Cmd+Shift+R**). |

---

**Tips:**
- Du kan endre på nettsiden når som helst. Husk å **lagre**, **committe** og **pushe** på nytt for å oppdatere nettsiden på nett.
- Trenger du inspirasjon? Sjekk ut [GitHub Pages-dokumentasjonen](https://pages.github.com/).
