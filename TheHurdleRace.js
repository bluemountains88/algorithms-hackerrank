function hurdleRace(k, height) {
    let dosis = 0;    
    
    height.forEach(h =>{
        if(h-k > dosis){
            dosis = h-k
        }
    })
    return dosis;
}