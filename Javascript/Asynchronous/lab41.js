const { BehaviorSubject, combineLatest } = require('rxjs');
const { map } = require('rxjs/operators');

const username$ = new BehaviorSubject("Kamal");
const age$ = new BehaviorSubject(30);

const user$ = combineLatest([
    username$,
    age$
]).pipe(
    map(([username, age]) => {
        return `User: ${username}, Age: ${age}`;
    })
);

user$.subscribe({
    next: value => console.log(value)
});

// Change username
username$.next("John");

// Change age
age$.next(35);