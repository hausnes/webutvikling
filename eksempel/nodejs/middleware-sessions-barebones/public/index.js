// DEL 1: Registrere ny bruker vha bcrypt
//---------------------------------------
const skjemaNyBruker = document.querySelector("#skjemaNyBruker");

skjemaNyBruker.addEventListener("submit", leggTilPerson);

async function leggTilPerson(event) {
    event.preventDefault(); // Forhindre standard form-innsending

    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const passord = document.getElementById("passord").value;
    const rolle = document.getElementById("rolle").value;

    alert(fornavn + etternavn + passord);

    const response = await fetch("/api/leggtilperson", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fornavn,
            etternavn,
            passord,
            rolle
        })
    });

    const result = await response.json();
    alert(result.message);
}

// DEL 2: Logge inn (vha bcrypt)
//------------------------------

const skjemaLoggInn = document.querySelector("#skjemaLoggInn");

skjemaLoggInn.addEventListener("submit", loggInn);

async function loggInn(event) {
    event.preventDefault();

    const fornavn = document.getElementById("fornavnLogin").value;
    const passord = document.getElementById("passordLogin").value;

    console.log(fornavn + " " + passord);

    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ fornavn, passord })
    });

    const result = await response.json();
    if (response.ok) {
        alert(result.message); // .message er den meldingen vi får fra serveren
        window.location.href = "/beskyttet"; // Sender brukeren til beskyttet område
    } else {
        alert(result.message);
    }
}