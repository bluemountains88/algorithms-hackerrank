let scores = [12,24,10,24];

const breakingTheRecords = () => {
    let max=0,min=0,countMax=0,countMin=0;
        
    max = scores[0];
    min = scores[0];
    
    for(let i=0;i < scores.length ;i++){
        if(max < scores[i]){
            max = scores[i];
            countMax++
        }    
        if(min> scores[i]){
            min = scores[i];
            countMin++;
        }
    }
    return [countMax,countMin]
}

console.log(breakingTheRecords(scores))