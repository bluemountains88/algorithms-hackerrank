let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

const aVeryBigSum = (ar) => {
    let sum = 0;
    ar.forEach(n => sum += n);
    return sum;
}

console.log(aVeryBigSum(ar));