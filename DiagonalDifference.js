let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]  
];

const diagonalDifference = (arr) => {
    let ld = 0;
    let rd = 0;
    let j = arr.length-1;

    for(let i =0; i<arr.length; i++){      
        ld += arr[i][i];
        rd += arr[i][j];
        j--;
    }

    return Math.abs(ld-rd);
}

console.log(diagonalDifference(arr));