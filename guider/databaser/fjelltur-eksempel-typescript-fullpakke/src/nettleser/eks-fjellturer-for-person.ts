// Lar brukeren velge en person, og viser alle fjellturene til den personen.

import type { PersonValg, TurForPerson } from '../felles/api';
import { formaterVarighet, hentElement, hentJson } from './hjelpere';

const personValg = hentElement('personDropdown', HTMLSelectElement);
const turerBoks = hentElement('fjellturerContainer', HTMLDivElement);

// Fyller nedtrekkslisten med brukernavnene til alle personene
async function fyllPersonValg(): Promise<void> {
    const personer = await hentJson<PersonValg[]>('/api/personer');

    for (const person of personer) {
        const option = document.createElement('option');
        option.value = person.brukernavn;
        option.textContent = person.brukernavn;
        personValg.appendChild(option);
    }
}

// Henter og viser turene til personen som er valgt
async function visTurer(brukernavn: string): Promise<void> {
    const turer = await hentJson<TurForPerson[]>(`/api/fjellturer/${encodeURIComponent(brukernavn)}`);

    turerBoks.innerHTML = '';
    const overskrift = document.createElement('h2');
    overskrift.textContent = `Fjellturer for ${brukernavn}`;
    turerBoks.appendChild(overskrift);

    if (turer.length === 0) {
        const ingen = document.createElement('p');
        ingen.textContent = 'Ingen turer registrert ennå.';
        turerBoks.appendChild(ingen);
        return;
    }

    const liste = document.createElement('ul');
    for (const tur of turer) {
        const li = document.createElement('li');
        // tur.varighet er et number (fra skjemaet), så vi kan regne med den direkte
        li.textContent = `${tur.fjellnavn} (${tur.tidspunkt}, ${formaterVarighet(tur.varighet)})`;
        liste.appendChild(li);
    }
    turerBoks.appendChild(liste);
}

personValg.addEventListener('change', () => {
    if (personValg.value) {
        visTurer(personValg.value);
    }
});

fyllPersonValg();
