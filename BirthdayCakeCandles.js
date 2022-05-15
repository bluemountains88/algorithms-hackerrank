let candles = [4,4,1,3];

const birthdayCakeCandles = (candles) => {
    let cont = 0;
    let max = Math.max(...candles);
    candles.forEach(c =>  {if(max === c) cont++;})
    return cont;
}

console.log(birthdayCakeCandles(candles));