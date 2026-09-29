// Gjør filen til en egen modul, se forklaring i index.ts
export {};

interface Person {
    brukernavn: string;
}

interface FjellNavn {
    fjellnavn: string;
}

// Kode for å fylle ut en dropdown med alle brukernavn
async function hentPersoner(): Promise<void> {
    const response = await fetch('/api/personer');
    const personer: Person[] = await response.json();
    console.log(personer); // Sjekker at vi har fått data tilbake

    const dropdown = document.getElementById('brukernavn-dropdown') as HTMLSelectElement;

    dropdown.innerHTML = '';

    for (const person of personer) {
        const option = document.createElement('option');
        option.value = person.brukernavn;
        option.textContent = person.brukernavn;
        dropdown.appendChild(option);
    }
}

hentPersoner();

// Kode for å hente alle fjellene som er registrert i databasen og fylle ut en dropdown med disse
async function hentFjellnavn(): Promise<void> {
    const response = await fetch('/api/fjell/navn');
    const fjell: FjellNavn[] = await response.json();
    console.log(fjell); // Sjekker at vi har fått data tilbake

    const dropdown = document.getElementById('fjell-dropdown') as HTMLSelectElement;

    dropdown.innerHTML = '';

    for (const f of fjell) {
        const option = document.createElement('option');
        option.value = f.fjellnavn;
        option.textContent = f.fjellnavn;
        dropdown.appendChild(option);
    }
}

hentFjellnavn();

// Kode for å sende data om en ny fjelltur til serveren
const nyTurForm = document.getElementById('ny-tur-form') as HTMLFormElement;
nyTurForm.addEventListener('submit', async function (event: SubmitEvent) {
    event.preventDefault(); // Forhindrer at siden refresher når formen sendes inn

    // Hvert skjema-element har sin egen, mer spesifikke type (HTMLSelectElement,
    // HTMLInputElement, HTMLTextAreaElement), som alle har en "value"-egenskap av typen streng.
    const brukernavn = (document.getElementById('brukernavn-dropdown') as HTMLSelectElement).value;
    const fjellnavn = (document.getElementById('fjell-dropdown') as HTMLSelectElement).value;
    const tidspunkt = (document.getElementById('tidspunkt') as HTMLInputElement).value;
    const varighet = (document.getElementById('varighet') as HTMLInputElement).value;
    const beskrivelse = (document.getElementById('beskrivelse') as HTMLTextAreaElement).value;

    // Kontroller at vi har fått data fra form-feltene
    console.log({ brukernavn, fjellnavn, tidspunkt, varighet, beskrivelse }); // Sjekker at vi har riktig data før vi sender det til serveren

    // Sender dataen til serveren via et POST-kall
    const response = await fetch('/api/fjellturer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ brukernavn, fjellnavn, tidspunkt, varighet, beskrivelse })
    });

    // Sjekker om responsen fra serveren var vellykket, og gir tilbakemelding til brukeren
    if (response.ok) {
        alert('Fjellturen er registrert!');
    } else {
        alert('Det skjedde en feil ved registrering av fjellturen.');
    }
});
