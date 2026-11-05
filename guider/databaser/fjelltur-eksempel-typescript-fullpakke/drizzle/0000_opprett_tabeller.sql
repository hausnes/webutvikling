CREATE TABLE `bilde` (
	`bilde_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`tittel` text,
	`bildetekst` text,
	`filnavn` text NOT NULL,
	`tur_id` integer NOT NULL,
	FOREIGN KEY (`tur_id`) REFERENCES `fjelltur`(`fjelltur_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `fjell` (
	`fjell_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`fjellnavn` text NOT NULL,
	`hoyde` integer NOT NULL,
	`beskrivelse` text,
	`omraade_id` integer NOT NULL,
	`foto` text,
	FOREIGN KEY (`omraade_id`) REFERENCES `omraade`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `fjell_fjellnavn_unique` ON `fjell` (`fjellnavn`);--> statement-breakpoint
CREATE TABLE `fjelltur` (
	`fjelltur_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`tidspunkt` text NOT NULL,
	`varighet` integer NOT NULL,
	`beskrivelse` text,
	`brukernavn` text NOT NULL,
	`fjell_id` integer NOT NULL,
	FOREIGN KEY (`brukernavn`) REFERENCES `person`(`brukernavn`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`fjell_id`) REFERENCES `fjell`(`fjell_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `omraade` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`navn` text NOT NULL,
	`beskrivelse` text
);
--> statement-breakpoint
CREATE TABLE `person` (
	`brukernavn` text PRIMARY KEY NOT NULL,
	`fornavn` text NOT NULL,
	`etternavn` text NOT NULL,
	`epost` text
);
