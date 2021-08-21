/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    var counts = {}
    for(let i=1;i<=n;i++){
        var key = String(i).split("").map(Number).reduce((a,b)=>a+b)
        counts[key] = counts[key] ? counts[key]+1:1
    }
    result2=[]
    for(let [k,v] of Object.entries(counts)){
        result2.push(v)
    }
    return result2.filter(v => result2.reduce((a,b) => Math.max(a,b))==v).length
};
