const { interval } = require('rxjs');
const { bufferTime, take } = require('rxjs/operators');

const observable$ = interval(200);

const result$ = observable$.pipe(
    bufferTime(1000),
    take(3)
);

result$.subscribe({
    next: values => console.log(values),
    complete: () => console.log("Completed")
});