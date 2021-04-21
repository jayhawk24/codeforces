function zero(arr){

    let m = arr.length;
    let n = arr[0].length;

    let zr = new Array(m).fill(false);
    let zc = new Array(n).fill(false);

    for(let i=0; i<m;i++){
        for(let j=0; j<n; j++){
            if(arr[i][j] === 0){
                zr[i] = true;
                zc[j] = true;
            }
        }
    }

    for(let i=0; i<m;i++){
        for(let j=0;j<n;j++){
            if (zr[i] || zc[j])
                arr[i][j] = 0
        }
    }
}
let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,0]
]
zero(arr);
console.log(arr);
