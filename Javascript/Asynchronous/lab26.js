const { of, concat } = require('rxjs');

const first$ = of("A", "B");
const second$ = of("C", "D");
const third$ = of("E", "F");

const result$ = concat(
    first$,
    second$,
    third$
);

result$.subscribe({
    next: value => console.log(value),
    complete: () => console.log("Completed")
});