function rotate(arr){

    col = arr[0].length;
    row = arr.length;

    for (let i = 0; i<row; i++){
        for (let j = i; j<col; j++){
            let temp = arr[i][j]

            arr[i][j] = arr[j][i]
            arr[j][i] = temp;

        }
    }

    for(let i = 0; i<row; i++){
        arr[i].reverse();
    }
    return arr
}

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(rotate(matrix));
// 1 2 3   rotated : 7 4 1
// 4 5 6             8 5 2
// 7 8 9             9 6 3
//
// transpose 1 4 7
//           2 5 8
//           3 6 9
