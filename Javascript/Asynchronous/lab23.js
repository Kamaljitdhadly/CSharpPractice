const { of } = require('rxjs');
const { delay, shareReplay } = require('rxjs/operators');

const api$ = of("User Data").pipe(
    delay(2000),
    shareReplay(1)
);

// Subscriber 1
api$.subscribe({
    next: value => console.log("Subscriber 1:", value),
    complete: () => console.log("Subscriber 1: Completed")
});

// Subscriber 2 subscribes after 3 seconds
setTimeout(() => {
    api$.subscribe({
        next: value => console.log("Subscriber 2:", value),
        complete: () => console.log("Subscriber 2: Completed")
    });
}, 3000);