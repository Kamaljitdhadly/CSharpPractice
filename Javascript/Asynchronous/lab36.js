const { Subject } = require('rxjs');

const notification$ = new Subject();

notification$.subscribe({
    next: value => console.log("Subscriber 1:", value)
});

notification$.subscribe({
    next: value => console.log("Subscriber 2:", value)
});

notification$.next("New message");

notification$.next("Order placed");

notification$.next("Payment received");