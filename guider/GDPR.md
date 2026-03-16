# GDPR for webutvikling

Når elevene lager en webapp som samler inn data, må de følge GDPR, som er regelverket for hvordan personopplysninger skal behandles i EU/EØS. GDPR handler om rettferdighet, sikkerhet og respekt for brukernes personvern.

Nedenfor finner du:
- [Hva er GDPR](#1-hva-er-gdpr)
- [Grunnreglene elevene må forholde seg til](#2-grunnreglene-elevene-m%C3%A5-forholde-seg-til)
- [Hva elevene enkelt kan gjøre for å være GDPR-vennlige (konkret sjekkliste)](#3-hva-elevene-enkelt-kan-gj%C3%B8re-for-%C3%A5-v%C3%A6re-gdpr-vennlige-konkret-sjekkliste)
- [Forslag til enkel implementasjon](#4-forslag-til-enkel-implementasjon)
- [Viktige lenker](#viktige-lenker)

## 1: Hva er GDPR

GDPR er et regelverk som beskytter persondata og gir individer kontroll over egne opplysninger. Det gjelder for alle som samler inn, lagrer eller bruker personopplysninger – også elever som lager en webapp.
— GDPR gjelder for alle organisasjoner som behandler persondata i EU/EØS, uavhengig av lokasjon 
— Persondata betyr all info som kan identifisere en person, direkte eller indirekte (eks. navn, e‑post, IP‑adresse) 
— Elever må følge grunnprinsippene: lovlighet, rettferdighet, transparens, dataminimering, formålsbegrensning, sikkerhet og ansvarlighet

## 2: Grunnreglene elevene må forholde seg til

- Samle inn minst mulig data (dataminimering). Bare be om data som faktisk trengs for at appen skal fungere.
    - Dette er et eksplisitt GDPR‑prinsipp (“data minimisation”)
- Fortell brukeren hva dere gjør (transparens). Elevene må lage en kort og tydelig personvernerklæring som forklarer:
    - Hvilke data de samler inn
    - Hvorfor
    - Hvordan det brukes
    - Hvordan det lagres
    – Transparens er et krav: data må behandles lovlig, rettferdig og transparent.
- Ha et tydelig formål (formålsbegrensning). Data kan kun brukes til det formålet eleven oppgir.
    - GDPR krever spesifikke og legitime formål
- Sørg for sikker lagring av data. Data må lagres på en måte som forhindrer lekkasjer.
    - GDPR krever sikker behandling og beskyttelse mot uautorisert tilgang
- La brukeren bestemme (samtykke og rettigheter). Brukere har rett til:
    - å se hvilke data som lagres
    - å få data slettet
    - å trekke tilbake samtykke
    – Disse rettighetene er del av GDPRs kjernebestemmelser 
- Ikke samle inn sensitive personopplysninger. Eksempler: helseopplysninger, politisk tro, seksuell orientering.
    - Slike data har særskilte restriksjoner 
    - For elevprosjekter anbefales det å unngå dette helt.

## 3: Hva elevene enkelt kan gjøre for å være GDPR‑vennlige (konkret sjekkliste)

1. Lag en dataliste. Hvilke data samler webappen inn? Å lage en slik oversikt er anbefalt som første steg.
2. Skriv en enkel personvernerklæring. Denne bør inneholde:
    - Hvilke data appen registrerer (f.eks. e‑post, IP, bruksmønster)
    - Formålet
    - Hvor lenge data lagres
    - Hvordan man kan få data slettet
    - Hold det kort og lettlest.
3. Hent inn samtykke når nødvendig. Bruk av skjema / “Jeg samtykker”-boks når data ikke er nødvendige for kjernefunksjon.
4. Implementer god teknisk sikkerhet.
    - Passordbeskyttet database
    - Kryptering
    - Ingen deling av data med tredjeparter uten grunn
5. Lag funksjon for sletting. Manuelt eller automatisk – brukeren skal kunne be om sletting.
6. Ikke behold data lenger enn nødvendig.
    - Slett data når prosjektet avsluttes.
    - GDPR krever lagringsbegrensning.

## 4: Forslag til enkel implementasjon

For prosjektet ditt:
- Kun samler inn brukernavn og et frivillig profilbilde
- Har en kort personvernerklæring på forsiden
- Har en knapp “Slett min konto og data”
- Lagrer alt lokalt i et passordbeskyttet system i skyen
- Sletter alle brukere ved prosjektslutt

## Viktige lenker

Dersom du vil gå mer i dybden, eller trenger mer informasjon, kan du sjekke ut disse ressursene:

- [Europa.eu: Data protection under GDPR](https://europa.eu/youreurope/business/dealing-with-customers/data-protection/data-protection-gdpr/index_en.htm)
- [Termly: GDPR for Dummies](https://termly.io/resources/articles/gdpr-for-dummies/)