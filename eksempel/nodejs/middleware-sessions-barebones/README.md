# Innlogging med Sessions - eksempel

## Om prosjektet

Dette er et enkelt Node.js-prosjekt som demonstrerer bruk av middleware, sessions og passord-hashing med bcrypt. Prosjektet lar brukere registrere seg, logge inn og få tilgang til beskyttede ressurser basert på hvilken **rolle** de har.

Prosjektet er ment å fungere som en form for mal eller utgangspunkt for å forstå hvordan disse konseptene fungerer i praksis.

## Hvordan kjøre prosjektet

1. Installer avhengigheter:
   ```
   npm install
   ```

2. Start serveren:
   ```
   node app.js
   ```

3. Åpne nettleseren på: `http://localhost:3000`

## Forhåndsdefinerte testbrukere

Prosjektet har tre forhåndsdefinerte testbrukere som kan brukes til å teste de ulike rollene. Disse ble opprettet via registreringsskjemaet på startsiden med følgende brukernavn (fornavn) og passord:

| Fornavn   | Passord   | Rolle     |
|-----------|-----------|-----------|
| `vanlig`  | `vanlig`  | `vanlig`  |
| `support` | `support` | `support` |
| `admin`   | `admin`   | `admin`   |

> Merk: Brukernavn i dette systemet er **fornavn**. Brukerne må opprettes manuelt via registreringsskjemaet første gang du starter prosjektet (databasen starter tom).

> Merk: Du kan selv opprette flere brukere med forskjellige roller ved å bruke registreringsskjemaet på startsiden. Pass på å bruke unike fornavn for hver bruker.

## Rollesystemet

Systemet har tre roller med ulik tilgang:

### Vanlig bruker
- Kan logge inn og se **sin egen** profilside (`/api/minside`)
- Ser kun egne data: id, fornavn, etternavn, passord (hashet) og rolle
- Har ikke tilgang til noen admin- eller support-ruter

### Support-bruker
- Har alt vanlige brukere har
- Får i tillegg tilgang til en oversikt over **alle brukeres fornavn og etternavn** (`/api/support/brukere`)
- Har **ikke** tilgang til sensitiv informasjon som passord-hash, id eller roller

### Admin-bruker
- Har alt vanlige brukere og support-brukere har
- Får tilgang til **fullstendig informasjon om alle brukere** (`/api/admin/brukere`), inkludert id, passord-hash og rolle
- Admin har også tilgang til support-ruten (`/api/support/brukere`)

### Oversikt over tilganger

| Rute                      | Vanlig | Support | Admin |
|---------------------------|--------|---------|-------|
| `/beskyttet`              | ✅     | ✅      | ✅    |
| `/api/minside`            | ✅     | ✅      | ✅    |
| `/api/support/brukere`    | ❌     | ✅      | ✅    |
| `/api/admin/brukere`      | ❌     | ❌      | ✅    |

## Mappestruktur

- **public/** - Filer som alle kan se (før innlogging)
- **beskyttet/** - Filer som krever innlogging
- **app.js** - Serveren med alle ruter
- **brukere.db** - SQLite-databasen (opprettes automatisk)

## Viktige konsepter

### 1. Middleware
Funksjoner som kjører **mellom** request og response. Brukes til å beskytte ruter:

```javascript
function kreverInnlogging(req, res, next) {
    if (!req.session.bruker) {
        return res.redirect("/");
    }
    next(); // Gå videre til neste middleware/rute
}
```

### 2. Rollebasert tilgangskontroll (middleware)
For å sjekke roller brukes en fleksibel middleware-funksjon som tar imot én eller flere tillatte roller:

```javascript
function kreverRolle(...roller) {
    return (req, res, next) => {
        if (!req.session.bruker) {
            return res.redirect("/");
        }
        if (!roller.includes(req.session.bruker.rolle)) {
            return res.status(403).json({ message: "Ingen tilgang" });
        }
        next();
    };
}
```

Eksempel på bruk – support-ruten er tilgjengelig for både `support` og `admin`:
```javascript
app.get("/api/support/brukere", kreverRolle('support', 'admin'), (req, res) => { ... });
```

Rollen til den innloggede brukeren lagres i sesjonen ved innlogging og sjekkes av middleware ved hver forespørsel.

### 3. Sessions
- Hver bruker får en unik session ved innlogging
- Sesjonen lagres på serveren; nettleseren får en cookie med session-ID
- Brukerens id, fornavn og **rolle** lagres i sesjonen:
  ```javascript
  req.session.bruker = { id: bruker.id, fornavn: bruker.fornavn, rolle: bruker.rolle };
  ```

### 4. Bcrypt (passord-hashing)
- Aldri lagre passord i klartekst!
- Bcrypt hasher passordet før lagring
- Kan ikke reverseres, men kan sammenlignes ved innlogging