const { interval, Subject } = require('rxjs');
const { takeUntil } = require('rxjs/operators');

const destroy$ = new Subject();

const observable$ = interval(1000).pipe(
    takeUntil(destroy$)
);

observable$.subscribe({
    next: value => console.log("Value:", value),
    complete: () => console.log("Observable completed")
});

setTimeout(() => {
    destroy$.next();
    destroy$.complete();

    console.log("Component destroyed");
}, 5000);