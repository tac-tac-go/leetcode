/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let arr_c = [...arr].sort((a,b) => a-b)
    const array2 = [...new Set(arr_c)];
    console.log(arr,array2)
    let result =[]
    for(const val of arr){
        result.push(array2.indexOf(val)+1)
    }
    return result
};
