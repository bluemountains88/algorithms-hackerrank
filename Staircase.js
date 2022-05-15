let n = 99;

const staircase = (n) => {
    let draw = [];
    draw.length = n;
    draw.fill("");

    let aux = n-1;
    let aux2 = 0
    let aux3 = 1;

    for(let i = 0; i<n ; i++){
        for(let j = aux3 ; j<n; j++){  
                draw[i] += ' ';
        }
        aux3++;
    }

    for(let i = aux; i>=0; i--){
        for(let j = aux2 ;j<n;j++){
            draw[i] += "#"
        }        
        aux2++;       
    }

    draw.forEach(n => console.log(n));
}

staircase(n);