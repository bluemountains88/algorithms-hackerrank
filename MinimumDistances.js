let a = [3,2,1,2,3];

const minimunDistance = (a) => {
    let min =[];

    for(let i = 0; i<a.length;i++){
        for(let j=0; j<a.length;j++){
            if(a[i] === a[j] && i!==j){
                min.push(Math.abs(j-i));
            }
        }
    }
    return min.length>0 ? Math.min(...min) : -1;
}

console.log(minimunDistance(a));