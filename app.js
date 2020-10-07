// slowMath.add(6, 2)
//     .then(result => {
//         console.log(result);
//         return slowMath.multiply(result, 2);
//     }).then(result => {
//         console.log(result);
//         return slowMath.divide(result, 4);
//     }).then(result => {
//         console.log(result);
//         return slowMath.subtract(result, 3);
//     }).then(result => {
//         console.log(result);
//         return slowMath.add(result, 98);
//     }).then(result => {
//         console.log(result);
//         return slowMath.remainder(result, 2);
//     }).then(result => {
//         console.log(result);
//         return slowMath.multiply(result, 50);
//     }).then(result => {
//         console.log(result);
//         return slowMath.remainder(result, 40);
//     }).then(result => {
//         console.log(result);
//         return slowMath.add(result, 32);
//     }).then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log(err);
//     });


async function doMath() {
    try {
        let results = await slowMath.add(1, 1);
        console.log(results);
        results = await slowMath.multiply(results, 2);
        console.log(results);
        results = await slowMath.divide(results, 4);
        console.log(results);
        results = await slowMath.subtract(results, 3);
        console.log(results);
        results = await slowMath.add(results, 98);
        console.log(results);
        results = await slowMath.remainder(results, 2);
        console.log(results);
        results = await slowMath.multiply(results, 50);
        console.log(results);
        results = await slowMath.remainder(results, 40);
        console.log(results);
        results = await slowMath.add(results, 32);
        console.log(results);
    } catch (err) {
        console.log(err);
    }
};
doMath();