let c = [0,0,0,1,0,0];

const jumpingOnClouds = (c) => {
    let jumps = 0;
    for(let i = 0; i < c.length ; i++){
        if(i+2 <= c.length){
            if(c[i+1] === 0 && c[i+2] === 1){
                jumps++
            }   
            else if(c[i+1] === 1){
                jumps++
                i++
            } 
            else if(c[i+1] === 0 && c[i+2] === 0){
                jumps++
                i++
            }else if(c[i+1] === 0 && (i+2 === c.length)){
                jumps++
                i++
            }
        }
    }
    return jumps;
}

console.log(jumpingOnClouds(c));