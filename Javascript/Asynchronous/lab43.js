const { of, forkJoin } = require('rxjs');
const { delay } = require('rxjs/operators');

const users$ = of(["Kamal", "John"]).pipe(
    delay(1000)
);

const orders$ = of([101, 102, 103]).pipe(
    delay(2000)
);

const products$ = of(["Laptop", "Mobile"]).pipe(
    delay(1500)
);

const result$ = forkJoin({
    users: users$,
    orders: orders$,
    products: products$
});

result$.subscribe({
    next: result => {
        console.log("Users:", result.users);
        console.log("Orders:", result.orders);
        console.log("Products:", result.products);
    },

    complete: () => {
        console.log("All APIs completed");
    }
});