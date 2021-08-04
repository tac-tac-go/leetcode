/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    result =[]
    for(let i=0;i<matrix.length;i++){
        var min_index = matrix[i].indexOf(matrix[i].reduce((a,b) => Math.min(a,b)))
        if(matrix.map(item => item[min_index]).reduce((a,b) => Math.max(a,b)) == matrix[i][min_index]){
            result.push(matrix[i][min_index])
        }
    }
    return result
};
