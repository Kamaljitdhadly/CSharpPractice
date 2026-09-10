const { BehaviorSubject, combineLatest } = require('rxjs');

const name$ = new BehaviorSubject("Kamal");
const age$ = new BehaviorSubject(30);

const combined$ = combineLatest([
    name$,
    age$
]);

combined$.subscribe({
    next: ([name, age]) => {
        console.log(`Name: ${name}, Age: ${age}`);
    }
});

name$.next("John");

age$.next(35);

name$.next("Mike");