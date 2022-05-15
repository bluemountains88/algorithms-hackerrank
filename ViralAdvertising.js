let n = 3;



const viralAdvertising = (n) => {
    let floor = Math.floor(5/2);
    let likes = 2;
    for( let i = 2; i<=n; i++){
        let share = floor*3
        floor = Math.floor(share/2);
        likes += floor;
    }
    return likes;
}

//Hacer recursiva !

const countLikes = (n) => {
    if(n == 1) return Math.floor(5*n/2);    
    return Math.floor()
}

console.log(viralAdvertising(49));