const { Subject, of } = require('rxjs');
const { exhaustMap, delay, tap } = require('rxjs/operators');

const submit$ = new Subject();

function submitForm() {

    console.log("API started");

    return of("Form submitted").pipe(
        delay(2000)
    );
}

const result$ = submit$.pipe(
    exhaustMap(() => submitForm())
);

result$.subscribe({
    next: value => console.log(value),
    complete: () => console.log("Completed")
});

console.log("Submit clicked: 1");
submit$.next(1);

setTimeout(() => {
    console.log("Submit clicked: 2");
    submit$.next(2);
}, 500);

setTimeout(() => {
    console.log("Submit clicked: 3");
    submit$.next(3);
}, 1000);

setTimeout(() => {
    console.log("Submit clicked: 4");
    submit$.next(4);
}, 1500);

setTimeout(() => {
    console.log("Submit clicked: 5");
    submit$.next(5);
}, 3000);