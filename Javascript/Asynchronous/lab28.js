const { interval, merge } = require('rxjs');
const { take, map } = require('rxjs/operators');

const first$ = interval(500).pipe(
    take(3),
    map(value => `first: ${value}`)
);

const second$ = interval(300).pipe(
    take(3),
    map(value => `second: ${value}`)
);

const result$ = merge(first$, second$);

result$.subscribe({
    next: value => console.log(value),
    complete: () => console.log("Completed")
});