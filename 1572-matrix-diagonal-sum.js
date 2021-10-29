/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let count = 0
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat.length;j++){
            if(i==j){
                count+=mat[i][j]
            }
        }
    }
    for(let i=mat.length-1;i>=0;i--){
        for(let j=0;j<mat.length;j++){
            if(i+j==mat.length-1){
                count+=mat[i][j]
            }
        }
    }
    return mat.length%2==0? count : count-mat[Math.floor(mat.length/2)][Math.floor(mat.length/2)]
};
