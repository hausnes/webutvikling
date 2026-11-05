// Innstillinger for drizzle-kit, verktøyet som lager SQL-migrasjoner ut fra skjemaet.
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: 'sqlite',
    schema: './src/db/skjema.ts',
    out: './drizzle',
    dbCredentials: { url: 'fjelltur.db' },
});
