let grades = [73,67,38,33,79,70];

const round = (grades) => {
    let rounded = [];
    grades.forEach(grade => {
        let aux = 5-grade%5
        if(grade<38 || aux>=3){
            rounded.push(grade);
        }else{ 
            rounded.push(grade+aux)
        }
    })
    return rounded;
}

console.log(round(grades));