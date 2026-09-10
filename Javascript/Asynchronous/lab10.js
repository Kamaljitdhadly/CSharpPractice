const { of, from, interval, BehaviorSubject } = require('rxjs');
const { map, filter, tap, delay, take } = require('rxjs/operators');

const subject = new BehaviorSubject(0);

subject.subscribe({
    next: value => console.log("Subscriber 1:", value),
    complete: () => console.log("Subscriber 1: Completed")
});

subject.next(50);
subject.next(100);


subject.subscribe({
    next: value => console.log("Subscriber 2:", value),
    complete: () => console.log("Subscriber 2: Completed")
});


subject.next(150);
subject.next(200);
