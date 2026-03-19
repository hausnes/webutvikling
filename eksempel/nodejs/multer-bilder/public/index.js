// Fyller ut dropdown med alle fjella
async function fyllUtFjellDropdown() {
    const response = await fetch('/fjell');
    const fjell = await response.json();
    const fjellDropdown = document.getElementById('fjell');
    for (const f of fjell) {
        const option = document.createElement('option');
        option.value = f.id;
        option.textContent = f.navn;
        fjellDropdown.appendChild(option);
    }
}

fyllUtFjellDropdown();

// Hentar og viser bileta for det valde fjellet
async function visBilderForFjell(fjellId) {
    const response = await fetch(`/fjell/${fjellId}/bilder`);
    const bilder = await response.json();
    const bilderContainer = document.getElementById('bilder-container');
    bilderContainer.innerHTML = '';
    for (const b of bilder) {
        const img = document.createElement('img');
        img.src = byggBildeKilde(b.sti);
        img.alt = b.alternativtekst;
        img.title = b.navn;
        bilderContainer.appendChild(img);
    }
}

// Hjelpefunksjon for å bygge riktig src for bilde, avhengig av hvordan sti er lagret i databasen
function byggBildeKilde(sti) {
    // Hvis sti er tom eller null, returner en tom streng for å unngå feil i img src
    if (!sti) {
        return '';
    }

    // Hvis sti allerede er en full URL eller starter med /uploads/, returner den som den er
    if (sti.startsWith('/uploads/') || sti.startsWith('http://') || sti.startsWith('https://')) {
        return sti;
    }

    // Hvis sti starter med 'uploads/', legg til en ledende slash for å gjøre det til en gyldig URL
    if (sti.startsWith('uploads/')) {
        return `/${sti}`;
    }

    // For alle andre tilfeller, anta at sti er et filnavn og bygg en URL som peker til uploads-mappen
    return `/uploads/${sti}`;
}

// Event listener for dropdown endring
document.getElementById('fjell').addEventListener('change', (event) => {
    const fjellId = event.target.value;
    console.log('Valgt fjellId:', fjellId);
    if (fjellId) {
        visBilderForFjell(fjellId);
    }
});

// Lar oss laste opp eit nytt bilde når skjemaet blir sendt inn
document.getElementById('bilde-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Forhindrer at siden refresher når skjemaet sendes inn
    const formData = new FormData(event.target);
    console.log('FormData:', formData);

    const fjellId = document.getElementById('fjell').value;

    // Sikrar at brukeren har valt eit fjell før opplasting
    if (!fjellId) {
        alert('Vel eit fjell før du lastar opp bilde.');
        return;
    }

    try {
        const response = await fetch(`/fjell/${fjellId}/bilder`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Opplasting feila med status ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        event.target.reset();
        
        // Oppdater bileta etter opplasting
        visBilderForFjell(fjellId);
    } catch (error) {
        console.error('Feil ved opplasting av bilde:', error);
        alert('Klarte ikkje å laste opp bilete. Sjekk konsollen for meir info.');
    }
});