let s= '03:01:12PM'

const timeConversion = (s) =>{
    let aux = s.split(':')
    let horas= aux[0].substr(0,2);
    let minutos = aux[1]
    let segundos = aux[2].substr(0,2)    

    if(s.indexOf('P')>0)
    {
        if(parseInt(horas) === 12){
            horas = '12';
        }
        if(parseInt(horas)>0 && parseInt(horas)!==12){
            horas = (parseInt(horas)+12).toString();
        }
            
    }else{
        if(parseInt(horas)===12)
        {
            horas = '00';
        }
    }

    return horas+":"+minutos+":"+segundos;
}

console.log(timeConversion(s))