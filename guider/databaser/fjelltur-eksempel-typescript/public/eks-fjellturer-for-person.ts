// Gjør filen til en egen modul, se forklaring i index.ts
export {};

interface Person {
    brukernavn: string;
}

interface FjellturForPerson {
    fjellnavn: string;
    tidspunkt: string;
}

// Fyller ut en dropdown (select) med brukernavnene på alle personene i databasen
async function hentPersoner(): Promise<void> {
    const response = await fetch('/api/personer');
    const personer: Person[] = await response.json();

    // document.getElementById returnerer typen "HTMLElement | null", fordi TypeScript
    // ikke vet om elementet faktisk finnes i HTML-en. Vi vet at det gjør det, så vi bruker
    // "as" for å fortelle TypeScript nøyaktig hvilket element det er snakk om.
    const dropdown = document.getElementById('personDropdown') as HTMLSelectElement;

    for (const person of personer) {
        const option = document.createElement('option');
        option.value = person.brukernavn;
        option.textContent = person.brukernavn;
        dropdown.appendChild(option);
    }
}
document.addEventListener('DOMContentLoaded', hentPersoner);

// Når en person er valgt, henter og viser alle fjellturene til den personen
const personDropdown = document.getElementById('personDropdown') as HTMLSelectElement;
personDropdown.addEventListener('change', async function () {
    // Siden "personDropdown" er en HTMLSelectElement, vet TypeScript at "this" også er det,
    // og dermed at "this.value" er en streng.
    const brukernavn = this.value;
    console.log(`Valgt person: ${brukernavn}`);
    if (brukernavn) {
        const response = await fetch(`/api/fjellturer/${encodeURIComponent(brukernavn)}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const fjellturer: FjellturForPerson[] = await response.json();

        // Sjekker at vi har fått data tilbake, og viser det i konsollen
        console.log(fjellturer); // Her kan du erstatte dette med kode for å vise fjellturene i UI

        // Skriver turene til HTML
        // Først viser vi en overskrift med hvilken person vi viser turene for
        const turerDiv = document.getElementById('fjellturerContainer') as HTMLDivElement;
        turerDiv.innerHTML = `<h2>Fjellturer for ${brukernavn}</h2>`;
        // Så viser vi en liste med alle fjellturene, inklusiv tidspunktet for turen
        const ul = document.createElement('ul');
        for (const tur of fjellturer) {
            const li = document.createElement('li');
            li.textContent = `${tur.fjellnavn} (${tur.tidspunkt})`;
            ul.appendChild(li);
        }
        turerDiv.appendChild(ul);
    }
});
