let ar = [1,2,3,4,5,6];
let k = 5;
let n = 6;

const divisibleSumPairs = (n,k,ar) => {
    let totalPairs = 0;
    let m = n;
    for(let i=0; i<=n-2;i++){ 
        for(let j=1;j<=m-1;j++){
            if((ar[i] + ar[i+j])%k === 0){
                totalPairs += 1    
            }
         }
        m = m - 1
        
    }
    return totalPairs;
}

console.log(divisibleSumPairs(n,k,ar))