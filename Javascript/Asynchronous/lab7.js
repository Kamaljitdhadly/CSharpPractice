const { of, from, interval, Subject } = require('rxjs');
const { map, filter, tap, delay, take } = require('rxjs/operators');

const subject = new Subject();

subject.subscribe({
    next: value => console.log("Subscriber 1:", value),
    complete: () => console.log("Subscriber 1: Completed")
});


subject.subscribe({
    next: value => console.log("Subscriber 2:", value),
    complete: () => console.log("Subscriber 2: Completed")
});


subject.next(50);
subject.next(100);
