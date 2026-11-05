// Skjema for å registrere en ny fjelltur.
//
// Her ser du hovedpoenget med delte typer: NyFjelltur hentes rett fra databaseskjemaet.
// "import type" betyr at vi bare henter TYPEN - importen forsvinner helt når koden bygges, så
// nettleseren laster aldri inn skjemaet eller noe databasekode.
//
// Prøv selv: fjern et felt fra objektet "ny" lenger ned, skriv feil i et feltnavn, eller bruk
// varighetFelt.value (tekst) i stedet for varighetFelt.valueAsNumber. Kjør npm run typecheck.

import type { NyFjelltur } from '../db/skjema';
import type { FjellValg, PersonValg, Kvittering, Feilmelding } from '../felles/api';
import { hentElement, hentJson } from './hjelpere';

const skjema = hentElement('ny-tur-form', HTMLFormElement);
const brukerValg = hentElement('brukernavn-dropdown', HTMLSelectElement);
const fjellValg = hentElement('fjell-dropdown', HTMLSelectElement);
const datoFelt = hentElement('tidspunkt', HTMLInputElement);
const varighetFelt = hentElement('varighet', HTMLInputElement);
const beskrivelseFelt = hentElement('beskrivelse', HTMLTextAreaElement);
const tilbakemelding = hentElement('tilbakemelding', HTMLParagraphElement);

// Fyller nedtrekkslistene med personer og fjell fra databasen
async function fyllValg(): Promise<void> {
    const personer = await hentJson<PersonValg[]>('/api/personer');
    for (const person of personer) {
        brukerValg.add(new Option(person.brukernavn, person.brukernavn));
    }

    const alleFjell = await hentJson<FjellValg[]>('/api/fjell/navn');
    for (const fjell of alleFjell) {
        // Teksten som vises er navnet, men verdien vi sender er id-en (fremmednøkkelen)
        fjellValg.add(new Option(fjell.fjellnavn, String(fjell.id)));
    }
}

skjema.addEventListener('submit', async (event: SubmitEvent) => {
    event.preventDefault(); // Hindrer at siden lastes på nytt

    // Verdiene gjøres om til riktig type HER, der de kommer inn fra skjemaet.
    // Etter dette er f.eks. varighet et tall hele veien til databasen.
    const ny: NyFjelltur = {
        brukernavn: brukerValg.value,
        fjellId: Number(fjellValg.value),
        tidspunkt: datoFelt.value,
        varighet: varighetFelt.valueAsNumber,
        beskrivelse: beskrivelseFelt.value || null, // tom tekst -> ingen beskrivelse
    };

    const response = await fetch('/api/fjellturer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ny),
    });

    // Serveren svarer enten med en Kvittering eller en Feilmelding (se src/felles/api.ts)
    const svar: Kvittering | Feilmelding = await response.json();

    // "'feil' in svar" sjekker hvilken av de to typene vi fikk. Etter sjekken vet TypeScript
    // nøyaktig hvilke felt som finnes - prøv å holde musepekeren over "svar" i hver gren.
    if ('feil' in svar) {
        const detaljer = svar.detaljer ? ` (${svar.detaljer.join(', ')})` : '';
        tilbakemelding.textContent = `${svar.feil}${detaljer}`;
        tilbakemelding.className = 'feil';
    } else {
        tilbakemelding.textContent = `${svar.melding} (tur nr. ${svar.id})`;
        tilbakemelding.className = 'ok';
        skjema.reset();
    }
});

fyllValg();
