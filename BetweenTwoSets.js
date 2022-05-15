
let a = [2,6];
let b = [24,36];

const betweenTwoSets = () =>{
    let validCount = 0;
    
    for (let x = 1; x <= Math.max(...a,...b); x++) {
        if (a.every(int => (x % int == 0))) {
            if (b.every(int => (int % x == 0))) {
                console.log(x);
                validCount++;
            }
        }
    }
    return validCount;
}

console.log(betweenTwoSets(a,b));
