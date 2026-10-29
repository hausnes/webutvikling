# Clip-path

Eit eksempel på korleis `clip-path` kan klippe ein firkanta boks til ei anna form – her eit parallellogram.

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

## Prøv sjølv

- Endre verdien på `--skrå` og sjå kor mykje skråare kantane blir.
- Byt ut `var(--skrå) 0` med `0 0` for å berre ha skrå kant på høgre side.
- Lag ein trekant med `polygon(50% 0, 100% 100%, 0 100%)`.
