const { of, from } = require('rxjs');
const { map, filter, tap, delay } = require('rxjs/operators');


const observable = of(1,2,3,4,5,6,7,8,9,10);

const result = observable.pipe(
    filter(value => value % 2 === 0), 
    tap(value => console.log("Tap:", value)),
    delay(5000),
    map(value => value * 10)
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


