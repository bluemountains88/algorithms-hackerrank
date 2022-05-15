let width = [2,3,1,2,3,2,3,3];
let cases = [[0,3],[4,6],[6,7],[3,5],[0,7]];

const serviceLane = (width,cases) => {
    let subs = [];
    let mins = [];
    cases.forEach((c,i) => {
        subs.push(width);
        subs[i] = subs[i].slice(c[0],c[1]+1);
        mins[i] = Math.min(...subs[i])
    })
    
    return mins;
}

console.log(serviceLane(width,cases));