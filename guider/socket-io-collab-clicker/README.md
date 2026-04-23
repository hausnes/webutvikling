# Guide til Socket.IO (collaborative clicker)

Dette prosjektet er et enkelt og konkret Socket.IO-eksempel:
En samarbeidsbasert cookie-clicker der alle klienter deler samme total i sanntid.

Hvis du vil se en ekstra forklaring av Socket.IO-konsepter, kan du supplere med denne videoen:
[Web Dev Simplified - Socket.IO Crash Course](https://www.youtube.com/watch?v=ZKEqqIO7n-k)

## Læringsmål

Etter denne guiden skal du kunne:

- forklare hva en autoritativ server er
- beskrive forskjellen på klienthendelser og serverhendelser
- forstå hvorfor serveren sender samme state til alle klienter
- lese en enkel Socket.IO-flyt fra knappetrykk til oppdatert UI

## Kort om arkitekturen

Prosjektet bruker et vanlig sanntidsmønster:

1. Klient sender en hendelse (for eksempel increment).
2. Server validerer og oppdaterer state.
3. Server broadcaster ny state til alle klienter.
4. Klientene renderer UI på nytt.

Poenget er at serveren er autoritativ: klientene eier ikke sannheten, de ber serveren om endringer.

## Hendelser i prosjektet

Disse hendelsene er kjernen i appen:

- `connection`: ny klient kobler til
- `set-name`: klient ber om å sette/endre navn
- `increment`: klient ber om +1 klikk
- `state`: server sender oppdatert state til klientene
- `disconnect`: klient kobler fra

## Kodeutdrag: server (app.js)

Dette utdraget viser den viktigste ideen: serveren oppdaterer state og sender ny state til alle.

```js
io.on("connection", (socket) => {
	state.players[socket.id] = { name: "Spiller", clicks: 0 };

	socket.emit("state", getPublicState());

	socket.on("set-name", (name) => {
		if (!state.players[socket.id]) return;
		state.players[socket.id].name = normalizeName(name);
		io.emit("state", getPublicState());
	});

	socket.on("increment", () => {
		if (!state.players[socket.id]) return;
		state.totalClicks += 1;
		state.players[socket.id].clicks += 1;
		io.emit("state", getPublicState());
	});
});
```

Hva du bør merke deg:

- `socket.on(...)` tar imot hendelser fra akkurat denne klienten
- `socket.emit(...)` sender til bare denne klienten
- `io.emit(...)` sender til alle tilkoblede klienter

## Kodeutdrag: klient (public/index.js)

Klienten sender hendelser til server og renderer state tilbake i UI:

```js
const socket = io();

socket.on("state", (state) => {
	totalClicksEl.textContent = state.totalClicks;
	renderPlayers(state.players);
});

cookieBtn.addEventListener("click", () => {
	socket.emit("increment");
});

function submitName() {
	socket.emit("set-name", nameInput.value);
}
```

Viktige poeng:

- Klienten oppdaterer ikke totalen direkte lokalt.
- Klienten ber serveren om endring, og venter pa state tilbake.

## Kodeutdrag: hvorfor script-taggen i HTML ser "magisk" ut

I public/index.html ligger denne linjen:

```html
<script src="/socket.io/socket.io.js" defer></script>
```

Dette er ikke en fysisk fil i prosjektmappen. Socket.IO-serveren eksponerer denne URL-en automatisk.
Derfor kan du bruke io() i klientkoden uten å laste ned biblioteket manuelt.

## Kjor lokalt

1. Installer avhengigheter:

```bash
npm install
```

2. Start server:

```bash
npm start
```

3. Apne i nettleser:

http://localhost:3000

4. Apne samme URL i to eller flere faner for a se sanntidsoppdatering.

## Hvordan flyter data i denne appen?

1. En elev klikker på Cookie +1.
2. Klienten sender increment til server.
3. Server øker totalClicks og spillerens clicks.
4. Server sender state til alle klienter med io.emit("state", ...).
5. Alle faner viser ny total og oppdatert bidragsliste.