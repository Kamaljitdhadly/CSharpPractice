const { of, throwError, concat } = require('rxjs');
const { catchError } = require('rxjs/operators');

const observable = concat(
    of(10, 20),
    throwError(() => new Error("Something went wrong"))
);

const result = observable.pipe(
    catchError(error => {
        console.log("Error occurred:", error.message);

        return of(0);
    })
);

result.subscribe({
    next: value => console.log("Value:", value),
    complete: () => console.log("Completed")
});