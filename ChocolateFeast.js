let n = 7;
let c = 3;
let m = 2;

/*const chocolateFeast = (n,c,m) => {
    let init = Math.trunc(n/c);
    let wrappers = init;
  
    while(wrappers>m){
        init += Math.trunc(wrappers/m)
        wrappers -= Math.trunc(wrappers/m);      
        wrappers += wrappers%m;
    }

    if(wrappers === m){
        init++
        wrappers = 0;
    }
    return init;

}*/

//Faster !

const chocolateFeast = (n,c,m) => {
    let init = Math.floor(n/c);
    return init + Math.floor((init-1)/(m-1));
}

console.log(chocolateFeast(n,c,m));
