const { of, from, interval } = require('rxjs');
const { map, filter, tap, delay, take } = require('rxjs/operators');


const observable = interval(1000);

const result = observable.pipe(
    take(5)
)
result.subscribe({
    next: (value) => {
        console.log(value);
    },
    // complete: (value) => {
    //     console.log(value);
    // },
    // error: (value) => {
    //     console.log(value);
    // }
});


