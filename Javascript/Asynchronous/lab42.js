const { BehaviorSubject, Subject } = require('rxjs');
const { withLatestFrom, map } = require('rxjs/operators');

const user$ = new BehaviorSubject("Kamal");
const submit$ = new Subject();

const result$ = submit$.pipe(
    withLatestFrom(user$),

    map(([_, username]) => {
        return `Submitted by: ${username}`;
    })
);

result$.subscribe({
    next: value => console.log(value)
});

// First submit
submit$.next();

// Change user
user$.next("John");

// Second submit
submit$.next();