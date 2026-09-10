const { of, throwError, concat, EMPTY } = require('rxjs');
const { catchError } = require('rxjs/operators');

const observable$ = concat(
    of(1, 2, 3),
    throwError(() => new Error("Something went wrong"))
);

const result$ = observable$.pipe(
    catchError(error => {
        console.log("Error:", error.message);

        return EMPTY;
    })
);

result$.subscribe({
    next: value => console.log("Value:", value),
    complete: () => console.log("Completed")
});