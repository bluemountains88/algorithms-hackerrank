let topic =['11101','10101','11001','10111','10000','01110'];

const acmTeam = (topic) => {
    let sums = [];
    let totales =[];

    for(let i = 0,k=0; i<topic.length;i++){
        for(let j = 1; j<topic.length; j++){
            if(i+j<topic.length){
                sums[k++] = sumarGrupos(topic[i],topic[i+j]);   
            }
        }

    }

    sums.forEach(g => {
        totales.push(contarPos(g));
    })

    return results(totales)
}

const contarPos = (t) => {
    let cont = 0;
    for(let i=0; i<t.length; i++){
        if(t[i] === '1'){
            cont++
        }
    }
    return cont;
}


const results = (t) => {
    let max = Math.max(...t);
    let cont = 0;
    for(let i = 0; i<t.length; i++){
        if(t[i] === max){
            cont++
        }
    }
    return [max,cont];
}

const sumarGrupos = (t1,t2) => {
    let t3 ="";

    for(let i=0; i<t1.length; i++){
        if(t1[i] === '1'){         
            t3 += '1'
        }else{
            if(t2[i] === '1'){
                t3 += '1'
            }
            else{
                t3 += '0'
            }
        }
    }
    return t3;
}

console.log(acmTeam(topic));
