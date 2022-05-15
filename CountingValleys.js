let steps = 8;
let path = 'UDDDUDUU';

const countingValleys = (steps,path) => {
    let altitud = 0;
    let count = 0;
 
    for(let paso in path){
        path[paso] === 'U' ? altitud++ : altitud--
        (altitud === 0 && path[paso] !=='D') && count++
    }
    return count;
}

console.log(countingValleys(steps,path));