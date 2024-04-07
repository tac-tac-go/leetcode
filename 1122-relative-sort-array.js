/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function(arr1, arr2) {
    let result = []
    for(let value of arr2){
        let array = arr1.filter(v => v===value)
        result = result.concat(array)
    }
    let rest = arr1.filter(v => result.indexOf(v)==-1)
    rest.sort((a,b) => a-b)
    result = result.concat(rest)
    return result
};

