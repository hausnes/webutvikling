// =============================================================================
// Validering av data som kommer inn til serveren
// =============================================================================
// TypeScript-typene finnes bare mens vi skriver koden. Når serveren kjører, kan hvem som helst
// sende hva som helst i en POST-forespørsel - TypeScript kan ikke hindre det.
//
// Derfor sjekker vi dataene "ved døren" med Zod. createInsertSchema lager valideringen ut fra
// det samme skjemaet som databasen og typene kommer fra, så reglene (påkrevde felt, tall vs. tekst,
// osv.) blir de samme alle steder. I tillegg legger vi på noen ekstra regler som databasen ikke
// kjenner til, f.eks. at varigheten må være et positivt tall.

import { z } from 'zod';
import { createInsertSchema } from 'drizzle-zod';
import { fjelltur } from '../db/skjema';

// Gir norske feilmeldinger fra Zod (f.eks. "Ugyldig input: forventet tall, fikk string")
z.config(z.locales.no());

export const nyTurSkjema = createInsertSchema(fjelltur, {
    tidspunkt: (s) => s.regex(/^\d{4}-\d{2}-\d{2}$/, 'må være en dato på formen ÅÅÅÅ-MM-DD'),
    varighet: (s) => s.positive('må være et positivt antall minutter'),
    brukernavn: (s) => s.min(1, 'må fylles ut'),
}).omit({ id: true }); // id lages av databasen, så den skal ikke sendes inn
