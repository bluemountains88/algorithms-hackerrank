/*

Constrains :
 2 <= n <= 100
 0 < a[i] < 100
 answer >= 2

Given an array of integers, find the longest subarray where the absolute difference 
between any two elements is less than or equal to 1.

https://dev.to/ryhenness/lets-solve-code-challenge---picking-numbers-a32

*/

a = [1,1,2,2,4,4,5,5,5];
b = [1,2,2,3,1,2];
c = [4,6,5,3,3,1];

const pickingNumbers = (a) => {
    let index = [];
    let max = 2;
    index.length = 100;
    index.fill(0);
   
    a.forEach((n)=> {   //CountingSort !!
        index[n] += 1;
    })

    for(let i = 1; i < index.length; i++){ //The sum of 2 consecutives !
        if(index[i] + index[i - 1] > max){
            max = index[i] + index[i - 1];
        }
    }
    return max;
}

console.log(pickingNumbers(b));