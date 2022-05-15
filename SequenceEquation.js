let p = [5,2,1,3,4];

const sequenceEquation = (p) =>{
    let y = [];

    for(let i = 0; i <p.length; i++){
        y[i] = p.indexOf(p.indexOf(i+1)+1)+1;
    }

    return y;
}

console.log(sequenceEquation(p));