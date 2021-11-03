/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let count=1
    for(let v of arr){
        if(arr.indexOf(v)==arr.lastIndexOf(v)){
            if(count==k){return v}
            count+=1
        }
    }
    return ""
};
