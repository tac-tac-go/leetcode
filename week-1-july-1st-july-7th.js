/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    var result = [].concat(...matrix);
    result.sort((a,b) => a-b)
    return result[k-1]
};
