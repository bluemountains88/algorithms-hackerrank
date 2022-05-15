let n =7;
let m = 19;
let s = 2;

const saveThePrisioner = (n,m,s) => {
    let start = Date.now();
    console.log(start);

    //Brute Force 
    /* m = m - 1;
    while(m>0){ 
        s++;  
        m = m - 1;
        if(s > n){

            s = 1;
        }

    }*/
    var last = 0;
    // m = dulces a repartir s = posicion inicial n = total de receptores
    last = (m+s-1)%n;

    if(last === 0) {
       last =n;
    }


    let end = Date.now();
    console.log(end);
    console.log('Exec. Time : ',end-start);
    return last;
}

console.log(saveThePrisioner(n,m,s));