const { of } = require('rxjs');
const { switchMap, delay } = require('rxjs/operators');

const searchTerms = of("apple", "banana", "orange");

const result = searchTerms.pipe(
    switchMap(term =>
        of(`Result for ${term}`).pipe(
            delay(2000)
        )
    )
);

result.subscribe({
    next: value => console.log(value),
    complete: () => console.log("Completed")
});