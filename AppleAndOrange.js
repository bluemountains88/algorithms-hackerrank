let s = 7;
let t = 11;
let a = 5;
let b = 15;
let m = 3; 
let n = 2;
let apples = [-2,2-1]; 
let oranges = [5,-6];

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let countA = 0;
    let countO = 0;
    let index = Math.max(apples.length,oranges.length);
    //apples
    for(let i = 0; i<index; i++){
        if((a + apples[i]) >= s && (a + apples[i]) <=t){
            countA++
        }
        if((b + oranges[i]) >= s && (b + oranges[i]) <=t){
            countO++
        }
    }
    console.log(countA)
    console.log(countO)
}

countApplesAndOranges(s, t, a, b, apples, oranges);