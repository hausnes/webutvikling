# Guide til Socket.IO

Dette prosjektet viser et enkelt sanntidseksempel med Socket.IO:
en samarbeidsbasert cookie-clicker der alle klienter deler samme total.

## Hvorfor dette eksempelet?

- Få hendelser: `increment`, `set-name`, `state`
- Enkelt datasett: total + spillere
- Tydelig effekt i flere faner med en gang

## Kjor lokalt

1. Installer avhengigheter:

	npm install

2. Start server:

	npm start

3. Apne i nettleser:

	http://localhost:3000

4. Apne samme URL i to (eller flere) faner for a se sanntidsoppdatering.

## Hvordan flyter data?

1. Klient klikker på knappen og sender `increment` til server.
2. Server oppdaterer sin autoritative state:
	- `totalClicks`
	- spillerens egne `clicks`
3. Server sender hele state tilbake til alle klienter med `io.emit("state", ...)`.
4. Hver klient renderer state pa nytt.