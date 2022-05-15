let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const salesByMatch = (ar) => {
    let cont =0;
    ar.sort((a,b) => a-b);
    for(let i = 0; i<ar.length; i++){
        if(i+1<ar.length){
            if(ar[i]===ar[i+1]){
                cont++;
                i++;
            }
        }
    }
    return cont;
}

salesByMatch(ar);