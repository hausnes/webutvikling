# Begreper rundt databaser

Om [konfidensialitet, integritet og tilgjengelighet](https://ndla.no/r/teknologiforstaelse-im-ikm-vg1/konfidensialitet-integritet-og-tilgjengelighet/bfa554f38c) hos NDLA.

Uttrykket "I swear to use the key, the whole key, and nothing but the key" er en referanse til normalisering i relasjonsdatabaser. Det er en lek med ordene fra den engelske edsavleggelsen og brukes for å forklare de tre første normalformene (1NF, 2NF og 3NF) i database-design.
- **the key** (1NF): Tabellen må ha en primærnøkkel, og alle celler må være atomære (kun én verdi per celle).
- **the whole key** (2NF): Alle ikke-nøkkelattributter må avhenge av *hele* primærnøkkelen – ikke bare deler av den (gjelder tabeller med sammensatt nøkkel).
- **nothing but the key** (3NF): Alle ikke-nøkkelattributter må avhenge *bare* av primærnøkkelen, og ikke av andre ikke-nøkkelattributter.

Uttrykket "The key, the whole key, and nothing but the key, so help me Codd" er en hyllest til Edgar F. Codd, som utviklet konseptet med relasjonsdatabaser.

> Se [eksempelet under](#eksempel-normalisering-steg-for-steg) for en konkret gjennomgang av alle tre normalformene.

| Begrep | Forklaring |
|--------|------------|
| **Database** | Strukturert samling av data med hensikt å lagre og prosessere data mest mulig effektivt. |
| **DBMS (database management system)** | Programvare for å samle inn, prosessere og lagre data |
| **Entitet** | Det du lagrer informasjon om – tabell |
| **Attributt** | Egenskaper til en entitet |
| **Verdi** | Dataene som registreres til attributtet |
| **Datatype** | Definerer oppsett på hva som fylles inn. Type data. Int = heltall, varchar = tekst |
| **Relasjoner** | Forholdet mellom entiteter |
| **Kråkefotnotasjon** | Symboler som oftest brukes til å beskrive relasjoner mellom entiteter i en ER-modell |
| **ER-modellering** | Grafisk oversikt over entiteter med attributter og datatyper, og beskrivende relasjoner mellom entitetene |
| **Determinering, avhengighet (funksjonell avhengighet)** | At verdien i ett felt bestemmer verdien i et annet, skrevet A → B. Eksempel: ProduktID → Produktnavn (kjenner du ProduktID, vet du alltid hvilket Produktnavn som hører til) |
| **KIT** | [Konfidensialitet, Integritet og tilgjengelighet](https://ndla.no/r/teknologiforstaelse-im-ikm-vg1/konfidensialitet-integritet-og-tilgjengelighet/bfa554f38c) |

---

## Relasjonstyper

| Symbol | Forklaring |
|--------|------------|
| **M:M** | Mange til mange relasjon. Kan ikke lages direkte med to tabeller – må løses opp med en egen **koblingstabell** i midten, slik at man i praksis får to 1:M-relasjoner (3 tabeller totalt) |
| **1:M** | En til mange relasjon. Løses med to tabeller, der fremmednøkkelen ligger på "mange"-siden |
| **1:1** | En til én relasjon. Kan ofte slås sammen til én tabell, men lages noen ganger som to tabeller likevel (f.eks. for å skille ut sensitive/valgfrie data eller data med ulik livssyklus) |

**Eksempel M:M:** En elev kan ta flere fag, og et fag kan ha flere elever. Dette løses med tabellene `Elev`, `Fag` og en koblingstabell `ElevFag(ElevID, FagID)`, der `ElevID` og `FagID` til sammen utgjør primærnøkkelen (og hver for seg er fremmednøkler).

---

## Normalformer

| Normalform | Forklaring |
|------------|------------|
| **Normalformer** | Regelsett for å strukturere databasen mest mulig effektivt, og for å unngå unødvendig duplisering av data |
| **1NF (Første normalform)** | Del alt opp så mye som mulig = atomærkravet: hver celle inneholder kun én verdi. Tabellen må ha en primærnøkkel som identifiserer hver rad unikt |
| **2NF (Andre normalform)** | Tabellen må først oppfylle 1NF. I tillegg må alle ikke-nøkkelattributter være avhengig av *hele* primærnøkkelen, ikke bare deler av den (gjelder tabeller med sammensatt primærnøkkel) |
| **3NF (Tredje normalform)** | Tabellen må først oppfylle 2NF. I tillegg må alle ikke-nøkkelattributter bestemmes direkte av primærnøkkelen – OG bare den – og ikke av et annet ikke-nøkkelattributt (transitiv avhengighet) |

### Eksempel: normalisering steg for steg

Tenk deg at en nettbutikk registrerer alle bestillinger i én stor, uformatert tabell:

**Bestilling (uformatert)**

| BestillingID | Kunde | Postnummer | Poststed | Produkter |
|---|---|---|---|---|
| 1 | Ola Nordmann | 0155 | Oslo | Mus (199 kr), Tastatur (499 kr) |
| 2 | Kari Hansen | 5003 | Bergen | Skjerm (1999 kr) |

Kolonnen `Produkter` inneholder flere verdier i samme celle. Det bryter atomærkravet, så tabellen er ikke på noen normalform ennå.

#### Steg 1: Første normalform (1NF)

**Regel:** Hver celle skal inneholde kun én verdi, og tabellen må ha en primærnøkkel.

Vi gir hver produktlinje sin egen rad. Siden `BestillingID` alene ikke lenger er unik per rad, må vi bruke en sammensatt primærnøkkel: `BestillingID` + `ProduktID`.

| BestillingID (PN) | ProduktID (PN) | Kunde | Postnummer | Poststed | Produktnavn | Pris |
|---|---|---|---|---|---|---|
| 1 | 1 | Ola Nordmann | 0155 | Oslo | Mus | 199 |
| 1 | 2 | Ola Nordmann | 0155 | Oslo | Tastatur | 499 |
| 2 | 3 | Kari Hansen | 5003 | Bergen | Skjerm | 1999 |

Nå er alle celler atomære, men mye informasjon gjentas unødvendig (kunde- og produktdata dupliseres for hver rad).

#### Steg 2: Andre normalform (2NF)

**Regel:** Alle ikke-nøkkelattributter må avhenge av *hele* den sammensatte primærnøkkelen – ikke bare deler av den.

Primærnøkkelen over er `(BestillingID, ProduktID)`. Men:
- `Kunde`, `Postnummer` og `Poststed` avhenger bare av `BestillingID` (delvis avhengighet).
- `Produktnavn` og `Pris` avhenger bare av `ProduktID` (delvis avhengighet).

Ingen ikke-nøkkelattributter avhenger av *hele* nøkkelen, så tabellen bryter 2NF. Løsningen er å splitte den i tre tabeller:

**Bestilling**

| BestillingID (PN) | Kunde | Postnummer | Poststed |
|---|---|---|---|
| 1 | Ola Nordmann | 0155 | Oslo |
| 2 | Kari Hansen | 5003 | Bergen |

**Produkt**

| ProduktID (PN) | Produktnavn | Pris |
|---|---|---|
| 1 | Mus | 199 |
| 2 | Tastatur | 499 |
| 3 | Skjerm | 1999 |

**BestillingsLinje** (koblingstabell)

| BestillingID (PN, FN) | ProduktID (PN, FN) |
|---|---|
| 1 | 1 |
| 1 | 2 |
| 2 | 3 |

#### Steg 3: Tredje normalform (3NF)

**Regel:** Ikke-nøkkelattributter kan ikke avhenge av *andre* ikke-nøkkelattributter (transitiv avhengighet) – de skal kun avhenge av primærnøkkelen.

Se på `Bestilling`-tabellen over: `Postnummer` bestemmer `Poststed` (0155 gir alltid Oslo), uavhengig av hvilken bestilling det er. `Poststed` avhenger altså av `Postnummer`, ikke direkte av `BestillingID` – en transitiv avhengighet som bryter 3NF.

Løsningen er å flytte postnummer-informasjonen til en egen tabell:

**Postnummer**

| Postnummer (PN) | Poststed |
|---|---|
| 0155 | Oslo |
| 5003 | Bergen |

**Bestilling**

| BestillingID (PN) | Kunde | Postnummer (FN) |
|---|---|---|
| 1 | Ola Nordmann | 0155 |
| 2 | Kari Hansen | 5003 |

Nå avhenger alle ikke-nøkkelattributter kun av primærnøkkelen i sin egen tabell, og databasen er på 3NF: ingen duplisert informasjon, og hver opplysning finnes bare ett sted.

---

## Nøkkelbegreper

| Begrep | Forklaring |
|--------|------------|
| **Kandidatnøkkel** | Et attributt som er unikt (som identifiserer en spesifikk forekomst i en entitet) |
| **Primærnøkkel** | Det attributtet (kandidatnøkkel) som velges som identifikatoren i en tabell |
| **Sekundærnøkkel** | Den kandidatnøkkelen som ikke brukes som primærnøkkel |
| **Fremmednøkkel (FN)** | En kopi av primærnøkkelen fra en annen tabell, plassert i denne tabellen for å lenke de to tabellene sammen |
| **Koblingstabell** | En egen tabell som brukes til å løse opp en M:M-relasjon. Inneholder primærnøklene fra de to tabellene den kobler sammen, som til sammen utgjør dens egen (sammensatte) primærnøkkel |