const { of, zip } = require('rxjs');

const names$ = of("Kamal", "John", "Mike");

const ages$ = of(30, 35, 40);

const result$ = zip(names$, ages$);

result$.subscribe({
    next: ([name, age]) => {
        console.log(`Name: ${name}, Age: ${age}`);
    },
    complete: () => console.log("Completed")
});