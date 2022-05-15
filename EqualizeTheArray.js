//let arr = [3,3,2,1,3];

let arr = [69,86,100,69,55,83,15,69,86,69,79,16,86,24,24,55,16,69,100,79,16,83,83,79,15,15,86,16,55,18,100,100,86,16,83,79,86,83,100,83,55,15,86,86,55,100,55,18,55,100,86,69,83,24,16,55,100,16,100,24,16,55,15,79,16,18,16,16,83,83,69,18,100,79,16,24,79,16,69,86,83,79,83,18,15,100,24,83];

const equalizeArray = (arr) => {
    let cont2 = 0;
    let n = arr.length;
    let apariciones = [];

    for(let i = 0; i<n;i++){
        for(let j=0;j<n;j++){
            if(arr[i] === arr[j]){
                cont2++
            }
        }
        apariciones.push(cont2);
        cont2= 0;
    }

    return n-Math.max(...apariciones);
}

console.log(equalizeArray(arr));