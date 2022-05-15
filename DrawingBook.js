let n=5;
let p=4;

//Releer !!

const drawingBook = (n,p) => {
    let count = 0;    let page = 1;    let countTwo = 0;
    
    while(page < p){
        count++;
        page += 2;
    }
    
    if(n % 2 !== 0){
        page = n - 1;
    } else {
        page = n;
    }
    

    while(page > p){
        countTwo++;
        page -= 2;
    }
    
    return count>countTwo ? countTwo : count;
}

console.log(drawingBook(n,p))