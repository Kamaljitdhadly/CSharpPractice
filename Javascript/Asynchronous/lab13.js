const { of } = require('rxjs');
const { concatMap, delay } = require('rxjs/operators');

const requests = of(
    "Request 1",
    "Request 2",
    "Request 3"
);

const result = requests.pipe(
    concatMap(request =>
        of(`${request} completed`).pipe(
            delay(2000)
        )
    )
);

result.subscribe({
    next: value => console.log(value),
    complete: () => console.log("Completed")
});