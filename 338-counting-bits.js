/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var result = []
    for(let i=0;i<=n;i++){
        result.push(i.toString(2).split("").filter( v => v==1).length)   
    }
    return result
};
