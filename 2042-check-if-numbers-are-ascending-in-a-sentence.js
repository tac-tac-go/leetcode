/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    s = s.split(" ")
    s = s.filter(v => !isNaN(v))
    let s_1 = s.map(e => parseInt(e))
    for(let i=1;i<s_1.length;i++){
        if(s_1[i]<=s_1[i-1]){return false}
    }
    return true
};
