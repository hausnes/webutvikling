# Repetisjonsoppgave: Splitting av tabell i relasjonsdatabaser

## Mål

Under viser vi en tabell med informasjon om ansatte i en bedrift. Tabellen inneholder mye gjentakende informasjon. Oppgaven din er å:

1. Oppdage hvilke data som gjentar seg unødvendig
2. Splitte tabellen i to mindre tabeller
3. Opprette primærnøkler (PK) og fremmednøkler (FK) som knytter tabellene sammen

## Utgangstabell: Ansatte

| AnsattNavn | Alder | Stilling | Avdeling | AvdelingsTlf | Avdelingsleder |
|---|---|---|---|---|---|
| Kari Nilsen | 34 | Selger | Salg | 55 11 22 33 | Per Hansen |
| Ola Berg | 41 | Selger | Salg | 55 11 22 33 | Per Hansen |
| Silje Voll | 27 | Selger | Salg | 55 11 22 33 | Per Hansen |
| Henrik Dahl | 45 | Selger | Salg | 55 11 22 33 | Per Hansen |
| Marte Skog | 31 | Selgerkonsulent | Salg | 55 11 22 33 | Per Hansen |
| Eva Solheim | 29 | Konsulent | IT | 55 44 55 66 | Anne Kvam |
| Jonas Aas | 52 | Tekniker | IT | 55 44 55 66 | Anne Kvam |
| Sander Lie | 24 | Utvikler | IT | 55 44 55 66 | Anne Kvam |
| Ida Fjeld | 38 | Systemansvarlig | IT | 55 44 55 66 | Anne Kvam |
| Magnus Rud | 33 | Utvikler | IT | 55 44 55 66 | Anne Kvam |
| Mia Reite | 38 | Regnskapsfører | Økonomi | 55 77 88 99 | Tom Riise |
| Bjørn Vik | 47 | Controller | Økonomi | 55 77 88 99 | Tom Riise |
| Nora Haug | 26 | Regnskapsfører | Økonomi | 55 77 88 99 | Tom Riise |
| Erik Moen | 55 | Regnskapsassistent | Økonomi | 55 77 88 99 | Tom Riise |
| Thea Ness | 30 | Controller | Økonomi | 55 77 88 99 | Tom Riise |
| Sondre Bakke | 28 | Markedsfører | Marked | 55 22 33 44 | Kristine Lund |
| Vilde Strand | 35 | Markedsansvarlig | Marked | 55 22 33 44 | Kristine Lund |
| Anders Eide | 40 | Markedsfører | Marked | 55 22 33 44 | Kristine Lund |
| Frida Holm | 25 | Innholdsprodusent | Marked | 55 22 33 44 | Kristine Lund |
| Petter Aune | 48 | Markedsfører | Marked | 55 22 33 44 | Kristine Lund |
| Camilla Berge | 33 | HR-rådgiver | HR | 55 66 77 88 | Liv Andersen |
| Fredrik Sand | 29 | HR-rådgiver | HR | 55 66 77 88 | Liv Andersen |
| Emma Kolstad | 41 | Rekrutterer | HR | 55 66 77 88 | Liv Andersen |
| Torstein Lie | 50 | HR-konsulent | HR | 55 66 77 88 | Liv Andersen |
| Julie Wold | 26 | Rekrutterer | HR | 55 66 77 88 | Liv Andersen |
| Stian Haugland | 44 | Produksjonsmedarbeider | Produksjon | 55 99 00 11 | Geir Olsen |
| Linda Amundsen | 37 | Kvalitetskontrollør | Produksjon | 55 99 00 11 | Geir Olsen |
| Robert Nygård | 29 | Produksjonsmedarbeider | Produksjon | 55 99 00 11 | Geir Olsen |
| Hanna Reiten | 32 | Logistikkkoordinator | Produksjon | 55 99 00 11 | Geir Olsen |
| Kevin Strøm | 24 | Produksjonsmedarbeider | Produksjon | 55 99 00 11 | Geir Olsen |

## Oppgave

**Steg 1: Se på tabellen**

Se nøye på tabellen over. Hvilke opplysninger gjentar seg for flere rader? Hvorfor er det unødvendig (og uheldig) å lagre disse opplysningene på hver enkelt rad?

**Steg 2: Del opp tabellen**

Del informasjonen opp slik du mener er hensiktsmessig. Bruk [draw.io](https://draw.io).

<details style="margin-bottom: 1em;">

<summary>Se forslag til løsning her.</summary>

Du trenger typisk to tabeller:

- Én tabell med informasjon som er unik for hver ansatt
- Én tabell med informasjon som er felles for en gruppe ansatte

</details>

**Steg 3: Primærnøkler**

Legg til en primærnøkkel (PK) i hver av de to tabellene. Husk at en primærnøkkel skal identifisere hver rad unikt — tenk over hvorfor et navn alene ikke er en god primærnøkkel.

**Steg 4: Relasjon/forhold mellom tabellene og bruk av fremmednøkkel**

Er sammenhengen mellom de to tabellene et en-til-en-forhold eller et en-til-mange-forhold? Begrunn svaret ut fra dataene i tabellen.

Hvilken av de to tabellene trenger en fremmednøkkel (FK) for å vise sammenhengen til den andre tabellen? Legg til fremmednøkkelen, og forklar med egne ord hva den peker på.

**Steg 5: Opprett databasen og legg til data**

Bruk [Letos](https://letos.org/) (el.l.) til å opprette de to tabellene i databasen. Legg inn noen av dataene fra utgangstabellen i de to nye tabellene.

**Steg 6: Skriv SQL-spørringer**

Enkle:

Skriv SQL-spørringer som henter ut informasjon fra de to tabellene. Finn gjerne på egne, men løs i alle fall disse:
- Hent ut alle ansatte som jobber i avdelingen "IT".
- Hent ut alle ansatte som er over 40 år gamle.
- Hent ut alle ansatte som jobber i avdelingen "Salg" og som er over 30 år gamle.
- Hent ut alle som har Geir Olsen som avdelingsleder.
- Tell hvor mange ansatte som jobber i avdelingen "Marked".
- Tell hvor mange som er over 30 år gamle.

Avanserte (her må du utforske litt mer selv):
- Opprett en ny avdeling i databasen. Bruk SQL!
- Opprett en ny ansatt i databasen, og legg denne til i den nye avdelingen. Bruk SQL!

## Tilleggsspørsmål

- Hva skjer med de gamle dataene dine dersom avdelingen "IT" bytter telefonnummer, når informasjonen er delt opp slik du har gjort det? Sammenlign med hvordan det ville vært i den opprinnelige, usplittede tabellen.
- Kan du komme på et annet eksempel fra hverdagen (ikke fra denne oppgaven) hvor samme type gjentakende informasjon oppstår, og som burde splittes på samme måte?