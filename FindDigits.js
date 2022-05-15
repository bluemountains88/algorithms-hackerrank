let n = 1012;

function findDigits(n) {
    let cont = 0;
    let digits = n.toString().split("");
    for(let i=0; i<digits.length; i++){
        if((n % parseInt(digits[i])) === 0){
            cont++
        }
    }
    return cont;
}

console.log(findDigits(n))