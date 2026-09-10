const { of, forkJoin } = require('rxjs');
const { delay } = require('rxjs/operators');

const user$ = of("User").pipe(
    delay(1000)
);

const orders$ = of("Orders").pipe(
    delay(2000)
);

const products$ = of("Products").pipe(
    delay(1500)
);

const result$ = forkJoin({
    user: user$,
    orders: orders$,
    products: products$
});

result$.subscribe({
    next: result => {
        console.log("User:", result.user);
        console.log("Orders:", result.orders);
        console.log("Products:", result.products);
    },
    complete: () => console.log("Completed")
});