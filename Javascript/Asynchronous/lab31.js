const { of } = require('rxjs');
const { concatMap, delay, tap } = require('rxjs/operators');

const orders$ = of(1, 2, 3);

function saveOrder(orderId) {

    console.log("Saving order:", orderId);

    return of(`Order ${orderId} saved`).pipe(
        delay(1000)
    );
}

const result$ = orders$.pipe(
    concatMap(orderId => saveOrder(orderId))
);

result$.subscribe({
    next: value => console.log(value),

    complete: () => {
        console.log("Completed");
    }
});