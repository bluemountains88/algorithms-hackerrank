let x1 = 1408;
let v1 = 6689;
let x2 = 6730;
let v2 = 4028;

const numbersLineJump = (x1,v1,x2,v2) => {

    for(let i=1; i<10000; i++){
        if(x1+v1*i === x2+v2*i)
        {
            return 'YES';
        }
    }
    return 'NO'
}

console.log(numbersLineJump(x1,v1,x2,v2));