// Kode for å fylle ut en dropdown med alle brukernavn
async function hentPersoner() {
    const response = await fetch('/api/personer_alle');
    const personer = await response.json();
    console.log(personer); // Sjekker at vi har fått data tilbake

    const dropdown = document.getElementById('brukernavn-dropdown');

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
async function hentFjellnavn() {
    const response = await fetch('/api/fjell_alle');
    const fjell = await response.json();
    console.log(fjell); // Sjekker at vi har fått data tilbake

    const dropdown = document.getElementById('fjell-dropdown');

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
document.getElementById('ny-tur-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Forhindrer at siden refresher når formen sendes inn
    
    // Henter ut data fra form-feltene
    const brukernavn = document.getElementById('brukernavn-dropdown').value;
    const fjellnavn = document.getElementById('fjell-dropdown').value;
    const tidspunkt = document.getElementById('tidspunkt').value;
    const varighet = document.getElementById('varighet').value;
    const beskrivelse = document.getElementById('beskrivelse').value;

    // Kontroller at vi har fått data fra form-feltene
    console.log({ brukernavn, fjellnavn, tidspunkt, varighet, beskrivelse }); // Sjekker at vi har riktig data før vi sender det til serveren

    // Sender dataen til serveren via et POST-kall
    const response = await fetch('/api/registrer_tur', {
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