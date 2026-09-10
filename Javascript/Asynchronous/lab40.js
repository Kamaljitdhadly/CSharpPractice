const { BehaviorSubject } = require('rxjs');
const { map, distinctUntilChanged } = require('rxjs/operators');

const state$ = new BehaviorSubject({
    count: 10,
    username: "Kamal"
});

const count$ = state$.pipe(
    map(state => state.count),
    distinctUntilChanged()
);

count$.subscribe({
    next: count => console.log("Count:", count)
});

// count changes: 10 → emits
state$.next({
    count: 10,
    username: "John"
});

// count is still 10 → ignored
state$.next({
    count: 10,
    username: "Mike"
});

// count changes: 10 → 20 → emits
state$.next({
    count: 20,
    username: "Mike"
});

// count is still 20 → ignored
state$.next({
    count: 20,
    username: "Alex"
});