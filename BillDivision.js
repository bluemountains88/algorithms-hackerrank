let bill = [2,4,6];
let k = 2;
let b = 3;

const billDivision = (bill,k,b) => {
    let tot = 0;
    let partesDeAna = 0;

    for(let i = 0; i<bill.length;i++){
        if(i!==k){
            tot+=bill[i];
        }
    }

    tot = tot/2;
    
    console.log(tot-b === 0 ? 'Bon Appetit' : b-tot)
}

billDivision(bill,k,b);