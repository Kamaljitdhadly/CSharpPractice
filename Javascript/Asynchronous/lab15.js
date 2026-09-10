const { defer, of, throwError } = require('rxjs');
const { retry } = require('rxjs/operators');

let attempt = 0;

const observable = defer(() => {
    attempt++;

    console.log("Attempt:", attempt);

    if (attempt < 3) {
        return throwError(() => new Error("Request failed"));
    }

    return of("Success!");
});

const result = observable.pipe(
    retry(2)
);

result.subscribe({
    next: value => console.log(value),
    error: error => console.log("Final Error:", error.message),
    complete: () => console.log("Completed")
});