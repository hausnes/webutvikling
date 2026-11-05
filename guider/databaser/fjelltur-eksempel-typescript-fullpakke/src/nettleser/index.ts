// Viser alle fjellene i databasen som "kort" på forsiden.

import type { FjellKort } from '../felles/api';
import { hentJson } from './hjelpere';

async function visFjell(): Promise<void> {
    const alleFjell = await hentJson<FjellKort[]>('/api/fjell');

    for (const fjell of alleFjell) {
        const kort = document.createElement('div');
        kort.classList.add('kort');

        // I skjemaet er beskrivelse og foto IKKE .notNull(), så typen er "string | null".
        // TypeScript tvinger oss derfor til å tenke på hva som skal skje når de mangler.
        const beskrivelse = fjell.beskrivelse ?? 'Ingen beskrivelse ennå.';
        const bilde = fjell.foto ? `<img src="/bilder/${fjell.foto}" alt="${fjell.fjellnavn}">` : '';

        kort.innerHTML = `
            <h3>${fjell.fjellnavn}</h3>
            <p>Høyde: ${fjell.hoyde} meter</p>
            <p>Beskrivelse: ${beskrivelse}</p>
            ${bilde}
        `;
        document.body.appendChild(kort);
    }
}

visFjell();
