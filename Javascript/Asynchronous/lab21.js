const { Subject, BehaviorSubject } = require('rxjs');
const { withLatestFrom } = require('rxjs/operators');

const username$ = new BehaviorSubject("Kamal");
const submit$ = new Subject();

const result$ = submit$.pipe(
    withLatestFrom(username$)
);

result$.subscribe({
    next: ([submit, username]) => {
        console.log("Submit →", username);
    }
});

// First submit
submit$.next("submit");

// Change username
username$.next("John");

// Second submit
submit$.next("submit");

// Change username
username$.next("Mike");

// Third submit
submit$.next("submit");