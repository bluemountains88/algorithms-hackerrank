let k = 3;
let a = [-2,-1,0,1,2];

const angryProfessor = () =>{
    let cont = 0;
    a.forEach(n => n <= 0 && cont++)
    return cont >= k ? 'NO' : 'YES'
}