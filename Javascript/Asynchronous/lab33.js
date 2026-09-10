const { of } = require('rxjs');
const { mergeMap, delay } = require('rxjs/operators');

const files$ = of(1, 2, 3, 4, 5);

function uploadFile(fileId) {

    console.log("Uploading:", fileId);

    return of(`File ${fileId} uploaded`).pipe(
        delay(1000)
    );
}

const result$ = files$.pipe(
    mergeMap(
        fileId => uploadFile(fileId),
        2
    )
);

result$.subscribe({
    next: value => console.log(value),
    complete: () => console.log("Completed")
});