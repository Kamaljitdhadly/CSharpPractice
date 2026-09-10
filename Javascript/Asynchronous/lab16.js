const { Subject } = require('rxjs');
const { debounceTime, distinctUntilChanged } = require('rxjs/operators');

const searchSubject = new Subject();

const searchObservable = searchSubject.pipe(
    debounceTime(500),
    distinctUntilChanged()
);

searchObservable.subscribe({
    next: value => console.log("Searching for:", value)
});

searchSubject.next("a");
searchSubject.next("ap");
searchSubject.next("app");
searchSubject.next("appl");
searchSubject.next("apple");

setTimeout(() => {
    searchSubject.next("apple");
}, 1000);

setTimeout(() => {
    searchSubject.next("banana");
}, 2000);

setTimeout(() => {
    searchSubject.next("banana");
}, 3000);

setTimeout(() => {
    searchSubject.next("orange");
}, 4000);