let ar = [1,2,3,4,10,11];

function simpleArraySum(ar) {
    let sum = 0;
    ar.forEach(n => {
        if(n>0 && n<=1000){
            sum += n;
        }
    })
    return sum;
}

console.log(simpleArraySum(ar));