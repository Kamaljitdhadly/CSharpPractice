const { Subject, of } = require('rxjs');
const {
    debounceTime,
    distinctUntilChanged,
    switchMap,
    delay,
    catchError
} = require('rxjs/operators');

const search$ = new Subject();

function searchApi(term) {
    console.log("API called for:", term);

    return of(`Results for ${term}`).pipe(
        delay(1000)
    );
}

const result$ = search$.pipe(
    debounceTime(500),

    distinctUntilChanged(),

    switchMap(term =>
        searchApi(term).pipe(
            catchError(error => {
                console.log("API Error:", error.message);

                return of("Something went wrong");
            })
        )
    )
);

result$.subscribe({
    next: value => console.log("Result:", value),
    complete: () => console.log("Completed")
});

// Simulate user typing
search$.next("a");

setTimeout(() => {
    search$.next("ap");
}, 100);

setTimeout(() => {
    search$.next("app");
}, 200);

setTimeout(() => {
    search$.next("appl");
}, 300);

setTimeout(() => {
    search$.next("apple");
}, 400);