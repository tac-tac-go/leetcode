/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    var arr_min = [...arr]
    arr_min.sort((a,b) => a-b)
    arr_min = arr_min.slice(arr.length*0.05)
    arr_min = arr_min.slice(0,arr_min.length-arr.length*0.05)
    return arr_min.reduce((a,b) => a+b)/(arr_min.length)
};
