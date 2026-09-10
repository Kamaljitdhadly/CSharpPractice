const { interval, of } = require('rxjs');
const { take, switchMap, delay, tap } = require('rxjs/operators');

function getJobStatus() {
    return of("Processing").pipe(
        delay(500)
    );
}

const polling$ = interval(2000).pipe(
    take(5),

    tap(() => {
        console.log("Checking job...");
    }),

    switchMap(() => getJobStatus())
);

polling$.subscribe({
    next: status => {
        console.log("Status:", status);
    },

    complete: () => {
        console.log("Completed");
    }
});