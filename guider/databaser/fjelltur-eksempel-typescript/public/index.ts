// Dette tomme "export {}"-uttrykket gjør filen til en egen modul i TypeScript sine øyne.
// Uten den ville alle .ts-filene i denne mappen delt samme globale navnerom når vi kompilerer
// (selv om nettleseren bare laster inn én fil om gangen), og det ville gitt feilmeldinger
// dersom to filer har funksjoner eller variabler med samme navn.
export {};

// Beskriver formen på hvert fjell-objekt vi forventer å få tilbake fra API-et
interface Fjell {
    fjellnavn: string;
    hoyde: number;
    beskrivelse: string;
    foto: string;
}

async function fetchData(): Promise<void> {
    const response = await fetch('/api/fjell');

    // NB: response.json() returnerer typen "any" - TypeScript sjekker ikke at dataene
    // faktisk ser slik ut i praksis, den stoler bare på typen vi oppgir her.
    const data: Fjell[] = await response.json();
    console.log(data);

    // Her kan du gjøre noe med dataen (vise det frem)
    for (const fjell of data) {
        const fjellDiv = document.createElement('div');
        fjellDiv.classList.add('kort');
        fjellDiv.innerHTML = `
            <h3>${fjell.fjellnavn}</h3>
            <p>Høyde: ${fjell.hoyde} meter</p>
            <p>Beskrivelse: ${fjell.beskrivelse}</p>
            <img src="/bilder/${fjell.foto}" alt="${fjell.fjellnavn}">
        `;
        document.body.appendChild(fjellDiv);
    }
}

fetchData();
