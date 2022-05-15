let a = [1,2,3,4,5];
let k = 2;
let queries = [0,1,2];

const circularArrayRotation =(a,k,queries) => {
    let start = Date.now();
    let qy = [];
    let n = a.length;
    console.log(start);
    console.log(k%n)

    //Mi Version
    /*let n = a.length-1;
    let aux = [];
    
    for(let i = 0; i<k; i++){
        aux = a.splice(0,n)
        a.push(aux);
        a = a.flat();
    }*/

    //Version 2
    while (k > 0) {
        let tmp = a.pop();
        a.unshift(tmp);
        k--;
    }

    //Intento 3 ... falla 1 caso;

    /*queries.forEach((q,i) => {
        qy[i] = a[(q+n-k)%n];
    })*/

    //

    queries.forEach((q,i) => {
        qy[i] = a[q];
    })

    let end = Date.now();
    console.log(end);
    console.log('Exec. Time : ',end-start);

    return qy;
}

console.log(circularArrayRotation(a,k,queries));

/* OPCION 3 que no entiendo
int N, K, Q, idx; cin >> N >> K >> Q;
K %= N;
vector<int> arr(N);
copy_n(istream_iterator<int>(cin), N, begin(arr));
const auto diff = N-K;
while (Q--)
{
    cin >> idx;
    cout << arr[(idx+diff)%N] << endl;
}
*/