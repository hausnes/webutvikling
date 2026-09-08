-- ============================================
-- Database: skuespiller / film / rolle
-- SQLite
-- ============================================

PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS rolle;
DROP TABLE IF EXISTS skuespiller;
DROP TABLE IF EXISTS film;

CREATE TABLE skuespiller (
    skuespiller_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fornavn        TEXT NOT NULL,
    etternavn      TEXT NOT NULL,
    fødselsår      INTEGER,
    land           TEXT
);

CREATE TABLE film (
    film_id  INTEGER PRIMARY KEY AUTOINCREMENT,
    tittel   TEXT NOT NULL,
    år       INTEGER,
    regissør TEXT,
    lengde   INTEGER,
    land     TEXT
);

CREATE TABLE rolle (
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    rollenavn      TEXT NOT NULL,
    skuespiller_id INTEGER NOT NULL,
    film_id        INTEGER NOT NULL,
    FOREIGN KEY (skuespiller_id) REFERENCES skuespiller(skuespiller_id),
    FOREIGN KEY (film_id) REFERENCES film(film_id)
);

-- ============================================
-- SKUESPILLER (18 rader)
-- ============================================
INSERT INTO skuespiller (fornavn, etternavn, fødselsår, land) VALUES
('Kristofer', 'Hivju', 1978, 'Norge'),
('Anders', 'Danielsen Lie', 1979, 'Norge'),
('Renate', 'Reinsve', 1987, 'Norge'),
('Aksel', 'Hennie', 1975, 'Norge'),
('Ane', 'Dahl Torp', 1979, 'Norge'),
('Pia', 'Tjelta', 1975, 'Norge'),
('Jon', 'Øigarden', 1970, 'Norge'),
('Leonardo', 'DiCaprio', 1974, 'USA'),
('Kate', 'Winslet', 1975, 'Storbritannia'),
('Tom', 'Hanks', 1956, 'USA'),
('Meryl', 'Streep', 1949, 'USA'),
('Cate', 'Blanchett', 1969, 'Australia'),
('Mads', 'Mikkelsen', 1965, 'Danmark'),
('Alicia', 'Vikander', 1988, 'Sverige'),
('Idris', 'Elba', 1972, 'Storbritannia'),
('Marion', 'Cotillard', 1975, 'Frankrike'),
('Toni', 'Erdmann', 1961, 'Tyskland'),
('Zendaya', 'Coleman', 1996, 'USA');

-- ============================================
-- FILM (16 rader)
-- ============================================
INSERT INTO film (tittel, år, regissør, lengde, land) VALUES
('Kraftidioten', 2014, 'Hans Petter Moland', 116, 'Norge'),
('Verdens verste menneske', 2021, 'Joachim Trier', 128, 'Norge'),
('Kon-Tiki', 2012, 'Joachim Rønning', 118, 'Norge'),
('Utøya 22. juli', 2018, 'Erik Poppe', 97, 'Norge'),
('Titanic', 1997, 'James Cameron', 195, 'USA'),
('Inception', 2010, 'Christopher Nolan', 148, 'USA'),
('Forrest Gump', 1994, 'Robert Zemeckis', 142, 'USA'),
('The Post', 2017, 'Steven Spielberg', 116, 'USA'),
('Blue Jasmine', 2013, 'Woody Allen', 98, 'USA'),
('Jagten', 2012, 'Thomas Vinterberg', 115, 'Danmark'),
('Another Round', 2020, 'Thomas Vinterberg', 117, 'Danmark'),
('The Danish Girl', 2015, 'Tom Hooper', 119, 'Storbritannia'),
('Luther', 2010, 'Sam Miller', 180, 'Storbritannia'),
('La Vie en Rose', 2007, 'Olivier Dahan', 140, 'Frankrike'),
('Dune', 2021, 'Denis Villeneuve', 155, 'USA'),
('Spider-Man: No Way Home', 2021, 'Jon Watts', 148, 'USA');

-- ============================================
-- ROLLE (22 rader)
-- Merk: for de mest kjente Hollywood-filmene er rollenavnene
-- historisk korrekte. For enkelte andre filmer er rollenavn og
-- rollebesetning forenklet/fiktivt tilpasset for øvingsformål.
-- ============================================
INSERT INTO rolle (rollenavn, skuespiller_id, film_id) VALUES
('Reidar', 1, 1),
('Julian', 2, 2),
('Julie', 3, 2),
('Thor Heyerdahl', 4, 3),
('Politimann', 7, 4),
('Rose DeWitt Bukater', 9, 5),
('Dom Cobb', 8, 6),
('Forrest Gump', 10, 7),
('Katharine Graham', 11, 8),
('Jasmine', 12, 9),
('Lucas', 13, 10),
('Martin', 13, 11),
('Gerda Wegener', 14, 12),
('John Luther', 15, 13),
('Édith Piaf', 16, 14),
('Ingeniør', 17, 15),
('Vitenskapsmann', 17, 6),
('MJ', 18, 16),
('Etterforsker', 6, 4),
('Journalist', 5, 8),
('Sykepleier', 5, 1),
('Advokat', 7, 8);
