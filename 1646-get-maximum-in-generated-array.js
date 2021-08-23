/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    let result=[0,1]
    let index=1;
    while(result.length<=n){
        result[2*index]=result[index]
        result[2*index+1]=result[index]+result[index+1]
        index+=1
    }
    result = result.slice(0,n+1)
    return result.reduce((a,b) => Math.max(a,b))
};
