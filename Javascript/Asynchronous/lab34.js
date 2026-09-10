const { of } = require('rxjs');
const { delay, finalize } = require('rxjs/operators');

console.log("Loading started");

const api$ = of("Data received").pipe(
    delay(2000),

    finalize(() => {
        console.log("Loading stopped");
    })
);

api$.subscribe({
    next: value => console.log(value),
    complete: () => console.log("Completed")
});