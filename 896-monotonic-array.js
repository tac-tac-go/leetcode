/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    var B = [...A]
    if(A[0]<=B.slice(-1)){B.sort((a,b) => a-b)}
    else{B.sort((a,b) => b-a)}
    for(let i=0;i<A.length;i++){
        if(A[i]!=B[i]){return false}
    }
    return true;
};
