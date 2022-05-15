let h = [
  1, 3, 1, 3, 1, 4, 1, 3,
  2, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5,
  5, 5
];
let word = 'zrc';

const designerPDFViewer = (h,word) => {
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let heigths  = [ ];

    for(let i = 0 ; i< word.length; i++){
        heigths[i] = h[abc.indexOf(word[i])];
    }
    
    return word.length*Math.max(...heigths);

}

console.log(designerPDFViewer(h,word));