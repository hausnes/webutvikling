// Små hjelpefunksjoner som brukes av all nettleserkoden.

/**
 * Henter et element fra HTML-en og SJEKKER at det finnes og er av riktig type.
 *
 * Alternativet er å skrive: document.getElementById('x') as HTMLSelectElement
 * Men "as" er bare et løfte til TypeScript - ingenting blir sjekket. Har du skrevet feil id,
 * krasjer koden et helt annet sted, med en uklar feilmelding.
 *
 * Her sjekker vi med instanceof mens koden kjører. TypeScript forstår sjekken, og vet derfor at
 * det vi returnerer har riktig type - uten at vi trenger "as".
 *
 * Bruk: const valg = hentElement('fjell-dropdown', HTMLSelectElement);
 */
export function hentElement<T extends HTMLElement>(id: string, type: new () => T): T {
    const element = document.getElementById(id);
    if (!(element instanceof type)) {
        throw new Error(`Fant ikke et element med id="${id}" av typen ${type.name}. Sjekk HTML-filen!`);
    }
    return element;
}

/**
 * Henter JSON fra API-et vårt, og sier hvilken type vi forventer tilbake.
 *
 * NB: response.json() kan i prinsippet gi hva som helst. Her stoler vi på at serveren svarer
 * riktig - og det kan vi gjøre, fordi serveren bruker de SAMME typene (src/felles/api.ts) og
 * dermed ikke kompilerer hvis den svarer med noe annet.
 */
export async function hentJson<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Feil fra serveren: ${response.status} ${response.statusText}`);
    }
    return (await response.json()) as T;
}

/** Gjør om et antall minutter til tekst, f.eks. 248 -> "4 t 8 min" */
export function formaterVarighet(minutter: number): string {
    const timer = Math.floor(minutter / 60);
    const resten = minutter % 60;
    return timer > 0 ? `${timer} t ${resten} min` : `${resten} min`;
}
