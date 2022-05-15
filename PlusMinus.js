let arr = [-4, 3, -9, 0, 4, 1];

const plusMinus = (arr) => {
    let contP = 0;
    let contN = 0;
    let cont0 = 0;
    let n = arr.length;

    arr.forEach(n => {
        if(n > 0) contP++;
        if(n < 0) contN++;
        if(n === 0) cont0++
    });

    console.log((contP/n).toFixed(6));
    console.log((contN/n).toFixed(6));
    console.log((cont0/n).toFixed(6));
}

plusMinus(arr);