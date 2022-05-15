let b = 5;
keyboards = [4];
drives = [5];

const electronicShop = (keyboards,drives,b) => {
    let max = -1;
    keyboards.forEach(k => {
        let temp = 0;
        drives.forEach(d => {
            if(keyboards[i] + drives[j] <= b){
                temp = k + d
                max = temp > max ? temp : max;
            }
        })        
    })
    return max;
}

console.log(electronicShop(keyboards,drives,b));