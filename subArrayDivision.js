let s = [ 2, 2, 1, 3, 2]; //Choco numbers
let d = 4; //Day
let m = 2; //Month

/*Segment length === m && the sum(segment === d)*/

const subArrayDivision = (s,d,m) => {
    let cont = 0;
    let sum = 0;
    for(let i = 0; i<s.length; i++){
        for(let j=0; j<m;j++){
            if((i+j)<s.length){
                sum += s[i+j]    
            }
        }
        if(sum === d){
            cont++
        }
        sum = 0;
    }
    return cont;
}

console.log(subChoco(s,d,m));
