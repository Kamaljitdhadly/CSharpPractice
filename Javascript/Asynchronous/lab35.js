const { defer, throwError, of } = require('rxjs');
const { retry, catchError, finalize } = require('rxjs/operators');

let attempt = 0;

function apiCall() {

    attempt++;

    console.log("API attempt:", attempt);

    return throwError(
        () => new Error("Server unavailable")
    );
}

console.log("Loading started");

const result$ = defer(() => apiCall()).pipe(

    retry(2),

    catchError(error => {
        console.log("API failed:", error.message);

        return of("Fallback data");
    }),

    finalize(() => {
        console.log("Loading stopped");
    })
);

result$.subscribe({
    next: value => console.log("Result:", value),

    complete: () => {
        console.log("Completed");
    }
});