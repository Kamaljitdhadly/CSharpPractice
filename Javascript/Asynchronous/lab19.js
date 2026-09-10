const { of } = require('rxjs');
const { scan } = require('rxjs/operators');

const numbers$ = of(10, 20, 30, 40);

const result$ = numbers$.pipe(
    scan((accumulator, value) => {
        return accumulator + value;
    }, 0)
);

result$.subscribe({
    next: value => console.log("Total:", value),
    complete: () => console.log("Completed")
});