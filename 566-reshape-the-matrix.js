/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    mat_f = mat.flat()
    if(mat_f.length!=r*c){
       return mat
    }
    let matrix = new Array(r).fill(0).map(() => new Array(c).fill(0));
    let count=0
    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            matrix[i][j]=mat_f[count]
            count+=1
        }
    }
    return matrix
    
};
