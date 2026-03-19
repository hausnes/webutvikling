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

function byggBildeKilde(sti) {
    if (!sti) {
        return '';
    }

    if (sti.startsWith('/uploads/') || sti.startsWith('http://') || sti.startsWith('https://')) {
        return sti;
    }

    if (sti.startsWith('uploads/')) {
        return `/${sti}`;
    }

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
    event.preventDefault();
    const formData = new FormData(event.target);
    const fjellId = document.getElementById('fjell').value;

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