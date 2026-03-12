# Oppgavesamling for databaser, SQL og datamodellering
[Tilbake til samleside](../README.md)

Mange av oppgåvene her let deg øve deg på å skrive spørringar opp mot ein allerede eksisterande database. 

Du kan skrive spørringane på fleire måtar:
- Installer [SQLite Studio](https://sqlitestudio.pl/), legg til databasen her og opne eit (eller fleire) SQL-vindu.
- Skriv spørringar direkte i Visual Studio Code.
- ...

## 1. SQL-spørringar mot "world"-databasen

Last ned databasefila «world»:
- [MySQL-versjon](https://dev.mysql.com/doc/index-other.html). Eventuelt, direktelenke: [world.zip](https://downloads.mysql.com/docs/world-db.zip).
- [SQLite-versjon](../eksempel/databaser/world_sqlite.sql).

Bli kjent med strukturen for databasen.

1.	List opp alle land 
2.	Finn hovedstaden til et spesifikt land
3.	List byer med befolkning over 5 millioner
4.	Vis land med over 100 millioner befolkning
5.	Finn landet med høyest forventet levealder
6.	List de 5 mest befolkede landene i verden
7.	Vis befolkningen til hver verdensdel. PS. Se på GROUP BY og SUM
8.	Finn land som snakker engelsk
9.	Sorter land etter befolkning i synkende rekkefølge
10.	Tell antall land i hver verdensdel PS. Se på GROUP BY og COUNT
11.	Vis byen i hvert land som har flest innbyggere i landet (Se på MAX og GROUP BY)
12.	Finn alle offisielle språk i Europa
13.	Informasjonen i databasen er utdatert. Velg  de 5 største landene og 5 største byene og oppdater informasjon
14.	…

## 2. Musikkdatabase (Hilde A.)

Design en relasjonsdatabase for musikkartister. Lag datamodellen.

Databasen skal minst inneholde følgende tabeller 
- Artist 
- Medlem (For band/grupper) 
- Album 
- Låt 
- Sjanger 

Sammmenligne din egen datamodell med vedlagte [musikk.db](../eksempel/databaser/musikk-hilde/musikk.db)-database. NB: Denne har, som du sikkert har i din egen modell, noen forenklinger. 
Tenk gjennom hvordan du kan se relasjoner og få oversikt nå når du ikke har en modell å basere deg på.

Oppgaver til vedlagte [musikk.db](../eksempel/databaser/musikk-hilde/musikk.db)-database:
Ved hjelp av INSERT SQL:  
- Legg til artisten Pink Floyd,  
- Legg til medlemmene til Pink Floyd,  
- Legg til minst 2 album fra Pink Floyd,  
- Legg til minst to låter fra hvert album.   
- For å legge til dette bandet, må du også legge til en ny sjanger i databasen. 

Andre spørringer:
- Skriv en SELECT SQL som henter ut alle band som begynner med P
- Skriv SQL som henter ut alle band og alle medlemmer 
- Skriv SQL som setter inn et dummy band 
- Skriv delete SQL som sletter dette dummybandet 
- Skriv SQL som henter ut alle låtene til Pink Floyd og hvilket album de er på 
- Skriv SQL som henter ut de 2 bandene som har flest låter 
- Opprett en tabell som inneholder konserter  
- Sett inn data i konsert tabellen (F.eks Pink Floyd hadde konsert I Roma 20/06/1971 )   
- Legg til en teoretisk konsert frem i tid

## 3. "Chinook", stor musikkdatabase
Last ned [«chinook.zip»](https://www.sqlitetutorial.net/sqlite-sample-database/).

Pakk ut fila og dobbeltklikk på den for å opne i SQLite Studio. Bla gjennom og sjå kva tabellane heiter, og bruk modellen frå lenka over (eller vedlagt bilete) til å få litt oversikt over databasen.

![Chinook datamodell](../bilder/sqlite-sample-database-color-chinook.jpg)

Skriv deretter fylgjande spørringar:
1. Alle artistane som ligg inne hjå dette plateselskapet.
2. Alle artistane og kva album dei har.
3. Alle artistane sine album, og kor mange låtar det er per album.

Løysingsforslag for oppgåve nr. 3:

```sql
SELECT artists.Name, albums.Title, COUNT(*) AS antall_spor
FROM artists
INNER JOIN albums ON artists.ArtistId = albums.ArtistId
INNER JOIN tracks ON albums.AlbumId = tracks.AlbumId
GROUP BY albums.AlbumId
LIMIT 20; 
```

## 4. Datamodelleringsoppgaver

Her er en samling med oppgaver innen datamodellering. For hver oppgave, tegn en datamodell som følger normaliseringsreglene (1NF, 2NF, 3NF). Forklar hva du har gjort, og hvorfor.

Dette er en god øvelse for å kunne forklare og forstå normalisering og datamodellering bedre.

### 4.1 Standardeksempelet, postadresse

Gitt dette eksempelet:

![modell](../bilder/datamodellering-4-1.png/)

For å lage en funksjonell datamodell, som følger normaliseringsreglene, hva må gjøres?
Tegn modellen, og legg til/fjern det du mener er nødvendig.

### 4.2 Idretter

Gitt dette eksempelet:

![modell](../bilder/datamodellering-4-2.png/)

For å lage en funksjonell datamodell, som følger normaliseringsreglene, hva må gjøres?
Tegn modellen, og legg til/fjern det du mener er nødvendig.
(NB: Denne oppgaven kan du se et [løsningsforslag på hos NDLA](https://ndla.no/r/konseptutvikling-og-programmering-im-ikm-vg1/relasjoner-og-kardinalitet/6c9ad7f243).)

### 4.3 Skuespillere og filmer

Gitt dette eksempelet:

![modell](../bilder/datamodellering-4-3.png/)

For å lage en funksjonell datamodell, som følger normaliseringsreglene, hva må gjøres?
Tegn modellen, og legg til/fjern det du mener er nødvendig.
(NB: Denne oppgaven kan du se et [løsningsforslag på hos NDLA](https://ndla.no/r/konseptutvikling-og-programmering-im-ikm-vg1/relasjoner-og-kardinalitet/6c9ad7f243).)

### 4.4 Elever og fag

Gitt dette eksempelet:

![modell](../bilder/datamodellering-4-4.png/)

For å lage en funksjonell datamodell, som følger normaliseringsreglene, hva må gjøres?
Tegn modellen, og legg til/fjern det du mener er nødvendig.

### 4.5 Artister og konserter

Se skissen under, og ta utgangspunkt i at artister ønsker å holde konserter, og kunder ønsker å se artistene sine konserter. Forklar hva du må gjøre med datamodellen for å gjøre dette mulig, og forklar hvorfor:

![modell](../bilder/datamodellering-4-5.png/)