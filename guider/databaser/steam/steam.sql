--
-- File generated with Letos v4.0.3 on Mon Sep 14 10:31:27 2026
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = on;
BEGIN TRANSACTION;

-- Table: plattform
CREATE TABLE IF NOT EXISTS plattform (
    plattform_id INTEGER PRIMARY KEY,
    navn         TEXT NOT NULL UNIQUE
);

-- Table: sjanger
CREATE TABLE IF NOT EXISTS sjanger (
    sjanger_id       INTEGER PRIMARY KEY,
    navn             TEXT NOT NULL UNIQUE,
    sjangergruppe_id INTEGER NOT NULL REFERENCES sjangergruppe (sjangergruppe_id)
);

-- Table: sjangergruppe
CREATE TABLE IF NOT EXISTS sjangergruppe (
    sjangergruppe_id INTEGER PRIMARY KEY,
    navn             TEXT NOT NULL UNIQUE
);

-- Table: spill
CREATE TABLE IF NOT EXISTS spill (
    spill_id           INTEGER PRIMARY KEY,
    tittel             TEXT    NOT NULL,
    steam_id           INTEGER NOT NULL UNIQUE, -- spillets id hos Steam
    utgitt             TEXT,                    -- 'AAAA-MM-DD', NULL = ukjent
    metascore          INTEGER,                 -- anmeldere 0-100, NULL = ikke vurdert
    brukerscore        INTEGER,                 -- spillere 0-100, NULL = for faa stemmer
    antall_anmeldelser INTEGER,
    timer_spilt        REAL    NOT NULL DEFAULT 0 -- eierens spilletid, 0 = aldri spilt
);

-- Table: spill_flat
CREATE TABLE IF NOT EXISTS spill_flat (
    rad         INTEGER PRIMARY KEY,
    tittel      TEXT,
    utgitt      TEXT,
    timer_spilt REAL,
    sjangere    TEXT,   -- "Soulslike, Rollespill, Actionspill"
    plattformer TEXT,   -- "Windows, Mac, Linux"
    sprak       TEXT    -- "Engelsk, Tysk, Fransk, ..."
);

-- Table: spill_plattform
CREATE TABLE IF NOT EXISTS spill_plattform (
    spill_id     INTEGER NOT NULL REFERENCES spill (spill_id),
    plattform_id INTEGER NOT NULL REFERENCES plattform (plattform_id),
    PRIMARY KEY (spill_id, plattform_id)
);

-- Table: spill_sjanger
CREATE TABLE IF NOT EXISTS spill_sjanger (
    spill_id   INTEGER NOT NULL REFERENCES spill (spill_id),
    sjanger_id INTEGER NOT NULL REFERENCES sjanger (sjanger_id),
    PRIMARY KEY (spill_id, sjanger_id)
);

-- Table: spill_sprak
CREATE TABLE IF NOT EXISTS spill_sprak (
    spill_id INTEGER NOT NULL REFERENCES spill (spill_id),
    sprak_id INTEGER NOT NULL REFERENCES sprak (sprak_id),
    PRIMARY KEY (spill_id, sprak_id)
);

-- Table: sprak
CREATE TABLE IF NOT EXISTS sprak (
    sprak_id INTEGER PRIMARY KEY,
    navn     TEXT NOT NULL UNIQUE
);

-- Index: idx_sjanger_gruppe
CREATE INDEX IF NOT EXISTS idx_sjanger_gruppe    ON sjanger         (sjangergruppe_id);

-- Index: idx_spill_plattform_p
CREATE INDEX IF NOT EXISTS idx_spill_plattform_p ON spill_plattform (plattform_id);

-- Index: idx_spill_sjanger_sj
CREATE INDEX IF NOT EXISTS idx_spill_sjanger_sj  ON spill_sjanger   (sjanger_id);

-- Index: idx_spill_sprak_s
CREATE INDEX IF NOT EXISTS idx_spill_sprak_s     ON spill_sprak     (sprak_id);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
