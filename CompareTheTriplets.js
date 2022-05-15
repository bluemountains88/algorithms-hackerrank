let a = [ 1, 2, 3];
let b = [ 3, 2, 1];

const compareTriplets = (a,b) => {
    let ratingA = 0;
    let ratingB = 0;

    for(let i=0; i<a.length;i++){
        if(a[i]>b[i]){
            ratingA++;
        }
        if(a[i]<b[i]){
            ratingB++;
        }
    }
    return [ratingA,ratingB];
}

console.log(compareTriplets(a,b));