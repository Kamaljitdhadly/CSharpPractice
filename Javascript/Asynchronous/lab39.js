const { BehaviorSubject } = require('rxjs');
const { map } = require('rxjs/operators');

const state$ = new BehaviorSubject({
    count: 10,
    username: "Kamal"
});

const count$ = state$.pipe(
    map(state => state.count)
);

const username$ = state$.pipe(
    map(state => state.username)
);

count$.subscribe({
    next: count => console.log("Count:", count)
});

username$.subscribe({
    next: username => console.log("Username:", username)
});

// Update state

state$.next({
    count: 20,
    username: "Kamal"
});