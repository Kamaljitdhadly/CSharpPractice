const { of, from } = require('rxjs');


const observable = of(1,2,3,4,5,6,7,8,9,10);

observable.subscribe({
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


const observable1 = from([1,2,3,4,5,6,7,8,9,10]);

observable1.subscribe({
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