
# Kom i gang med GitHub og publiser din egen nettside

> Følg denne veiledningen for å sette opp GitHub, lage din egen nettside og publisere den slik at du (og andre) kan besøke den fra mobil, PC eller dele med venner!

---

## 1. Opprett en GitHub-konto

1. Gå til [github.com](https://github.com).
2. Klikk på **Sign up** og følg instruksjonene for å lage en ny konto.
3. Velg et brukernavn du vil huske (f.eks. fornavn-etternavn).

---

## 2. Lag et repository for nettsiden din

1. Logg inn på GitHub.
2. Klikk på pluss-ikonet (+) øverst til høyre og velg **New repository**.
3. Gi repositoryet navnet **brukernavn.github.io** (bytt ut `brukernavn` med ditt eget GitHub-brukernavn).
4. Velg **Public**.
5. Huk av for **Add a README file**.
6. Klikk **Create repository**.

> Dette navnet er viktig for at nettsiden skal vises automatisk med GitHub Pages!

---

## 3. Installer GitHub Desktop

1. Gå til [desktop.github.com](https://desktop.github.com) og last ned programmet.
2. Installer og logg inn med GitHub-kontoen din.

---

## 4. Klon repositoryet til din PC

1. Åpne **GitHub Desktop**.
2. Gå til **File** > **Clone repository**.
3. Finn repositoryet du nettopp lagde (brukernavn.github.io).
4. Velg en mappe på PC-en din hvor prosjektet skal lagres.
5. Klikk **Clone**.

---

## 5. Lag nettsiden i Visual Studio Code

1. Åpne **Visual Studio Code**.
2. Gå til **File** > **Open Folder** og velg mappen du nettopp klonet, eventuelt velg `Open in Visual Studio Code` i Github Desktop.
3. Høyreklikk i sidestolpen og velg **New File**.
4. Kall filen **index.html** (dette blir hovedsiden).
5. Lim inn denne HTML-koden:

```html
<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Min Første Nettside</title>
</head>
<body>
        <h1>Hei verden!</h1>
        <p>Dette er min første nettside, publisert med GitHub Pages.</p>
</body>
</html>
```

6. Lagre filen.

---

## 6. Publiser nettsiden din

1. Gå tilbake til **GitHub Desktop**.
2. Du ser nå endringene dine i listen.
3. Skriv en kort oppsummering i **Summary**-feltet, f.eks. `Første nettside`.
4. Klikk **Commit to main**.
5. Klikk **Push origin** (øverst i midten).

---

## 7. Besøk nettsiden din!

- Etter noen minutter vil nettsiden være tilgjengelig på:

    `https://ditt-brukernavn.github.io`

- Del lenken med venner, familie – eller åpne den på mobilen din!

---

**Tips:**
- Du kan endre på nettsiden når som helst. Husk å lagre, committe og pushe på nytt for å oppdatere nettsiden på nett.
- Trenger du inspirasjon? Sjekk ut [GitHub Pages-dokumentasjonen](https://pages.github.com/).