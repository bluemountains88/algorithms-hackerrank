let i = 20;
let j = 23;
let k = 6;

const beautifulDaysAtTheMovies = (i,j,k) =>{
    let arr = [];
    let cont = 0;
    let dif = j-i;
    let inv;
    for(let x = 0; x<=dif ; x++){
        arr[x] = i++
        inv = parseInt(arr[x].toString().split("").reverse().join(""));
        if((arr[x]-inv)%k ===0){
            cont++
        }
    }
    return cont;
}

console.log(beautifulDaysAtTheMovies(i,j,k));