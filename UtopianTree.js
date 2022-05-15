let n = 5;

const utopianTree = (n) => {
    let heigth = 1;
    if(n>0){
        heigth +=1
        for(let i = 2; i<=n ; i++){
            if(i%2 === 0){
                heigth++
            }
            else{
                heigth *= 2;
            }
        }
    }
    return heigth;
}

console.log(utopianTree(n));