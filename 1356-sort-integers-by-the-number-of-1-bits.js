/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    var matrix = [];
    let result = arr.map(v => v.toString(2)).map(v => v.split("").filter(v => v=='1').length);
    result = result.map( v=> v-result.reduce((a,b) => Math.min(a,b)))
    let result_nond = Array.from(new Set(result))
    for ( var i = 0; i <= result_nond.reduce((a,b) => Math.max(a,b)); i++ ) {
        matrix[i] = []; 
    }
    
    for(let i=0;i<arr.length;i++){
        let array2 = arr[i]
        console.log(result[i],array2)
        matrix[result[i]].push(array2)
    }
    
    matrix = matrix.map(v => v.sort((a,b) => a-b))
    return [].concat(...matrix)
    
};
