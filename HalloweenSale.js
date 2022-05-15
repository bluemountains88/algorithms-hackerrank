let p = 100, d = 19, m = 1, s = 180;

const howManyGames = (p, d, m, s) => {
    let cont = 0;
    if(p>s){
        return 0;
    }
    while(p >= m && s>0){
        s -= p
        p -= d;
        cont++
    }
    cont += Math.floor(s/m);
    return cont;
}

console.log(howManyGames(p,d,m,s));