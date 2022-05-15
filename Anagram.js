function stringAnagram(dictionary, query) {
    let cont = [];
    cont.length = query.length;    
    cont.fill(0);
    
    console.log(query[0]);
    query[0].sort();
    console.log(query[0]);

    let i = 0;
    query.forEach(q => {
        dictionary.forEach(d => {
            if(q.length === d.length){
                if(d.includes(...q))
                cont[i]++
            }
        })
        i++
    })
    //return cont;
}

//optimizar