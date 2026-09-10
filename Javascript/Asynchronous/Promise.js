

const myPromise = new Promise((resolve, reject) => {
    reject("promise is rejected");
});

myPromise.then((value) => {
    console.log(value);
}).catch((value) => {
    console.log(value);
});

