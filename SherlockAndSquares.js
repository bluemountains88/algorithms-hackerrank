let a = 24;
let b = 49;

//Mi solucion 

/*let squares = (a,b) => {
    let cont = 0;
    for(let i = a; i<=b; i++){
        if(i%Math.sqrt(i) === 0){
            cont++
        }
    }
    return cont;
}*/

//solucion 2 -> Faster

let squares = (a,b) => {
    let cont = 0;
    let min = Math.ceil(Math.sqrt(a));
    let max = Math.sqrt(b);

    for(let i = min; i<=max; i++){
        if(i*i<=b){
            cont++;
        }
    }
    return cont;
}


console.log(squares(a,b));