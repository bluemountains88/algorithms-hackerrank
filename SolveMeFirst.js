let a = 1
let b = 0

function solveMeFirst (a, b) {
    if(a<=1000 && a>=1 && b<=1000 && b>=1){
        return a+b
    }
    return -1
}

console.log(solveMeFirst(a,b));