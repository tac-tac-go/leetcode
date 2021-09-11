/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let max=0
    for(let i=1;i<s.length;i++){
        var a = s.slice(0,i).split("").filter(v => v==0)
        var b = s.slice(i).split("").filter(v => v==1)
        if(max<(a.length+b.length)){
            max = a.length+b.length
        }
    }
    return max
};
