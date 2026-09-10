const { Observable } = require('rxjs');

const observable = new Observable((subscriber) => {
   subscriber.next("Value 1 from next");
   subscriber.next("Value 2 from next");
   subscriber.next("observable is complete");
   subscriber.error("error in observable");
});
observable.subscribe({
    next: (value) => {
        console.log(value);
    },
    complete: (value) => {
        console.log(value);
    },
    error: (value) => {
        console.log(value);
    }
});