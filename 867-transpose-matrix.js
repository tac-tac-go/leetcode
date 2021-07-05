/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    var array = [...matrix]
    return array[0].map((col,i) => array.map(row => row[i]))
}
