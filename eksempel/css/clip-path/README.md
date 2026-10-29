# Clip-path

Eit eksempel på korleis `clip-path` kan klippe ein firkanta boks til ei anna form – her eit parallellogram med eitt avrunda hjørne.

## Korleis det fungerer

`clip-path` lagar ei form, og berre det som er innanfor forma blir vist. Resten av elementet blir klipt bort, men elementet tek like mykje plass i layouten som før.

`polygon(...)` er ei liste med punkt i formatet `x y`. Koordinatane er rekna frå øvre venstre hjørne av elementet: `0` er venstre kant/toppen, og `100%` er høgre kant/botnen.

```css
main {
    --skrå: 80px;

    clip-path: polygon(
        var(--skrå) 0,                 /* oppe, --skrå inn frå venstre */
        100% 0,                        /* øvre høgre */
        calc(100% - var(--skrå)) 100%, /* nede, --skrå inn frå høgre */
        0 100%                         /* nedre venstre */
    );
}
```

Med `calc()` kan du blande prosent og piksel. `calc(100% - var(--skrå))` betyr «heile breidda minus 80px», så den skrå kanten blir lik uansett kor brei boksen er.

## Avrunding oppe til høgre

```css
main {
    border-top-right-radius: 400px;
}
```

`border-top-right-radius` rundar av berre det øvre høgre hjørnet. Ein så stor verdi gjer hjørnet til ein stor kvartsirkel i staden for ei lita avrunding.

`border-radius` og `clip-path` verkar saman: avrundinga klipper bort hjørnet, og `clip-path` klipper bort dei skrå kantane. Det du ser er det som er innanfor begge.

## Pulserande bakgrunn

Bakgrunnsfargen på sida blir animert med `@keyframes` – rein CSS, utan JavaScript:

```css
body {
    animation: puls 6s ease-in-out infinite alternate;
}

@keyframes puls {
    0%   { background-color: rgb(255, 96, 151); }  /* rosa */
    50%  { background-color: rgb(255, 140, 105); } /* korall */
    100% { background-color: rgb(186, 104, 255); } /* lilla */
}
```

- `6s` – kor lang tid éin runde tek
- `infinite` – animasjonen held fram for alltid
- `alternate` – går fram og tilbake, så fargen ikkje hoppar brått tilbake til start
- `ease-in-out` – mjukare overgangar

Animasjonen ligg på `body`, så heile sida pulserer medan forma står stille i rosa. Når bakgrunnen er innom same rosafarge, glir forma nesten heilt inn i bakgrunnen.

Med `@media (prefers-reduced-motion: reduce)` blir animasjonen skrudd av for brukarar som har slått av rørsle i operativsystemet.

## Prøv sjølv

- Endre verdien på `--skrå` og sjå kor mykje skråare kantane blir.
- Byt ut `var(--skrå) 0` med `0 0` for å berre ha skrå kant på høgre side.
- Lag ein trekant med `polygon(50% 0, 100% 100%, 0 100%)`.
- Prøv ein mindre verdi på `border-top-right-radius`, eller bruk `border-radius` for å runde av alle hjørna.
- Endre fargane eller tida i animasjonen, eller flytt `animation`-linja til `main` slik at berre forma pulserer.
