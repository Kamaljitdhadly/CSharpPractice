const { of } = require('rxjs');
const { startWith } = require('rxjs/operators');

const observable$ = of("Apple", "Banana", "Orange");

const result$ = observable$.pipe(
    startWith("Loading...")
);

result$.subscribe({
    next: value => console.log(value),
    complete: () => console.log("Completed")
});