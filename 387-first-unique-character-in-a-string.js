/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let s_l = s.split("")
    for(let [i,s_i] of s_l.entries()){
        if(s_l.indexOf(s_i)==s_l.lastIndexOf(s_i)){return i}
    }
    return -1
};
