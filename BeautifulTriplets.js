let d = 3;
let arr = [1, 6, 7, 7, 8, 10, 12, 13, 14, 19];

const beautifulTriplets = (d,arr) => {
    let triplets = [];
    arr.forEach((n) => {
        let cont = 0;
        let aux = [];
        for(let i=0;i<arr.length;i++){
            if(cont<3){
                if(n - arr[i] === d){
                    aux.push(n,arr[i])
                    cont+=2
                }
                if(n-arr[i] === 2*d){
                    aux.push(arr[i])
                    cont++
                }
            }
        }
        if(cont >= 3){
            triplets.push(aux)
        }

    })
    return triplets.length;
}

console.log(beautifulTriplets(d,arr));