/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    var result = n.toString(2).split("");
    for(let i=0;i<result.length-1;i++){
        if(result[i]==result[i+1]){return false}
    }
    return true;
    
};
