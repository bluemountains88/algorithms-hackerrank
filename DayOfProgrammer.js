
let year = 1918;

//Day 256th

const dayOfProgrammer = (year) => {
    let feb;
    if(year >=1700 && year <=1917){
        if(year%4 === 0){
            feb = 29;
        }
        else{
            feb = 28;
        }
    }else if(year === 1918){
        feb = 15;
    }else{
        if(year >=1919 && year<=2700){
            if(year%400 === 0 || (year%4===0 && year%100 !== 0)){
                feb = 29;
            }else{
                feb = 28;
            }
        }
    }

    let sum = 31+feb+31+30+31+30+31+31;
    let day = 256-sum;
    return (`${day}.09.${year}`);
}

console.log(dayOfProgrammer(year));