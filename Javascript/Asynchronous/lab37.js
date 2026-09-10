const { BehaviorSubject } = require('rxjs');

const state$ = new BehaviorSubject({
    count: 0
});

state$.subscribe({
    next: state => {
        console.log("Count:", state.count);
    }
});

// Increment
state$.next({
    count: state$.value.count + 1
});

// Increment
state$.next({
    count: state$.value.count + 1
});

// Decrement
state$.next({
    count: state$.value.count - 1
});