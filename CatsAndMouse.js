let x = 2;
let y = 5;
let z = 4;

const catsAndMouse = (x,y,z) => {
    if(Math.abs(z-y) === Math.abs(z-x)){
        return 'Mouse C'
    }
    else if(Math.abs(z-y) < Math.abs(z-x)){
        return 'Cat B'
    }
    return 'Cat A'
}

console.log(catsAndMouse(x,y,z))