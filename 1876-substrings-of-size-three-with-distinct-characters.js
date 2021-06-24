/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    var count=0
    for(let i=0;i<s.length-2;i++){
        si = s.slice(i,i+3).split("")
        if(si[0]!=si[1] && si[1]!=si[2] && si[0]!=si[2]){
            count+=1
        }
    }
    return count
};
