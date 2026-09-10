const { Subject } = require('rxjs');
const { scan } = require('rxjs/operators');

const actions$ = new Subject();

const initialState = {
    count: 0
};

function reducer(state, action) {

    switch (action.type) {

        case "INCREMENT":
            return {
                count: state.count + 1
            };

        case "DECREMENT":
            return {
                count: state.count - 1
            };

        default:
            return state;
    }
}

const state$ = actions$.pipe(
    scan(reducer, initialState)
);

state$.subscribe({
    next: state => {
        console.log("Count:", state.count);
    }
});

// Dispatch actions

actions$.next({
    type: "INCREMENT"
});

actions$.next({
    type: "INCREMENT"
});

actions$.next({
    type: "DECREMENT"
});

actions$.next({
    type: "INCREMENT"
});