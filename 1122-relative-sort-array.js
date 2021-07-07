/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    var result = []
    for(let value of arr2){
        var array = arr1.filter(v => v===value)
        result = result.concat(array)
    }
    var rest = arr1.filter(v => result.indexOf(v)==-1)
    rest.sort((a,b) => a-b)
    result = result.concat(rest)
    return result
};

