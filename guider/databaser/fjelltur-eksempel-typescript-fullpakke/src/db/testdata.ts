// Testdata som legges inn når databasen lages på nytt (npm run db:nullstill).
// Dataene er de samme som i de andre fjelltur-eksemplene.
//
// Legg merke til at hver liste har en type, f.eks. NyPerson[]. Prøv å skrive feil i et feltnavn,
// fjerne et påkrevd felt eller skrive en tekst der det skal være et tall - da vil ikke koden
// kompilere, og du ser feilen med en gang i editoren.

import type { NyPerson, NyttOmraade, NyttFjell, NyFjelltur, NyttBilde } from './skjema';

export const personer: NyPerson[] = [
    { brukernavn: 'harry', fornavn: 'Harry', etternavn: 'Potter', epost: 'harry@potter.com' },
    { brukernavn: 'larry', fornavn: 'Leisure Suit', etternavn: 'Larry', epost: 'larry@larry.com' },
    { brukernavn: 'fjellguden', fornavn: 'Guri', etternavn: 'Fjellrud', epost: 'fjellgud@outlook.com' },
    { brukernavn: 'hausnes', fornavn: 'Jo Bjørnar', etternavn: 'Hausnes', epost: 'fjellhausnes@gmail.com' },
    { brukernavn: 'visjonæren', fornavn: 'Visjo', etternavn: 'Nær', epost: 'visjo@nær.com' },
];

export const omraader: NyttOmraade[] = [
    { id: 1, navn: 'Jotunheimen', beskrivelse: 'Spisse tindar, og masse stein.' },
    { id: 2, navn: 'Vossafjella', beskrivelse: 'Eit godt andrevalg i livet.' },
    { id: 3, navn: 'Hardanger', beskrivelse: 'Det flottaste området for tur og anna morro i heile verda.' },
];

export const fjell: NyttFjell[] = [
    { id: 1, fjellnavn: 'Fanaråken', hoyde: 2010, beskrivelse: 'Flott og fager, Fanaråken er ikkje mager.', omraadeId: 1, foto: 'fanaråken.jpg' },
    { id: 2, fjellnavn: 'Store Soleibotntind', hoyde: 1920, beskrivelse: 'Soleibotntind for the wind.', omraadeId: 1, foto: 'soleibotntind.jpg' },
    { id: 3, fjellnavn: 'Olsskavlen', hoyde: 1580, beskrivelse: 'Rund og butt, jamnt og trutt.', omraadeId: 2, foto: 'olsskavlen.jpg' },
    { id: 4, fjellnavn: 'Horndalsnuten', hoyde: 1460, beskrivelse: 'Voss og Granvin i same slengen.', omraadeId: 2, foto: 'horndalsnuten.jpg' },
    { id: 5, fjellnavn: 'Nesheimshorgi', hoyde: 1141, beskrivelse: 'Utsikt heim til Jo Bjørnar.', omraadeId: 3, foto: 'nesheimshorgi.jpg' },
    { id: 6, fjellnavn: 'Midtfjell', hoyde: 1222, beskrivelse: 'Stupbratt og flott.', omraadeId: 3, foto: 'midtfjell.jpg' },
    { id: 7, fjellnavn: 'Oksen', hoyde: 1242, beskrivelse: 'Fjord, fjord og atter fjord.', omraadeId: 3, foto: 'oksen.jpg' },
    { id: 8, fjellnavn: 'Øvre Brekkebakkadn', hoyde: 1242, beskrivelse: 'Der ingen skulle tru at nokon kunne bu.', omraadeId: 2, foto: 'hallingskeid.jpg' },
];

export const fjellturer: NyFjelltur[] = [
    { id: 1, tidspunkt: '2026-01-05', varighet: 248, beskrivelse: 'Tung tur, med flott ver.', brukernavn: 'hausnes', fjellId: 6 },
    { id: 2, tidspunkt: '2026-01-06', varighet: 390, beskrivelse: 'Mykje folk.', brukernavn: 'hausnes', fjellId: 7 },
    { id: 3, tidspunkt: '2026-01-28', varighet: 124, beskrivelse: 'Svipptur!', brukernavn: 'hausnes', fjellId: 5 },
    { id: 4, tidspunkt: '2026-01-05', varighet: 202, beskrivelse: 'Blei trua på tur, blei veldig sur.', brukernavn: 'fjellguden', fjellId: 1 },
    { id: 5, tidspunkt: '2026-01-06', varighet: 121, beskrivelse: 'Regn og sky, eg saknar by.', brukernavn: 'fjellguden', fjellId: 2 },
    { id: 6, tidspunkt: '2026-02-27', varighet: 89, beskrivelse: 'Gav opp halvveis grunna is.', brukernavn: 'larry', fjellId: 3 },
    { id: 7, tidspunkt: '2026-02-08', varighet: 11, beskrivelse: 'Gav opp i første bakken, hadde vondt i trollstaven.', brukernavn: 'harry', fjellId: 4 },
    { id: 8, tidspunkt: '2026-01-09', varighet: 572, beskrivelse: 'Barnemat!', brukernavn: 'hausnes', fjellId: 1 },
    { id: 9, tidspunkt: '2026-01-11', varighet: 251, beskrivelse: 'Fanaråken leviosa.', brukernavn: 'harry', fjellId: 1 },
    { id: 10, tidspunkt: '2025-12-29', varighet: 593, beskrivelse: 'Juleflesket skal av!', brukernavn: 'larry', fjellId: 8 },
    { id: 11, tidspunkt: '2026-03-11', varighet: 599, beskrivelse: 'Tung tur, men gidameg så pent.', brukernavn: 'fjellguden', fjellId: 1 },
];

export const bilder: NyttBilde[] = [
    { id: 1, tittel: 'Solnedgang', bildetekst: 'Bileter har copyright meg!', filnavn: 'sol.jpg', turId: 1 },
    { id: 2, tittel: 'Solnedgang 2', bildetekst: 'HDR-versjon av solnedgangen.', filnavn: 'sol-hdr.jpg', turId: 1 },
];
