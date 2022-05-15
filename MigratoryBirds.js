let arr = [1,1,2,2,3];

const migratoryBirds = (arr) => {
    let cont = [];
    cont.length = 5;
    cont.fill(0);

    arr.forEach(s => cont[s-1]++)
    return cont.indexOf(Math.max(...cont))+1;
}

console.log(migratoryBirds(arr));