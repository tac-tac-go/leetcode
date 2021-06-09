/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    s1 = s1.split(" ")
    s2 = s2.split(" ")
    
    var result1 = s1.filter((val, idx, arr) => s1.indexOf(val) === s1.lastIndexOf(val)).filter(v => s2.indexOf(v)==-1)
    var result2 = s2.filter((val, idx, arr) => s2.indexOf(val) === s2.lastIndexOf(val)).filter(v => s1.indexOf(v)==-1)
    
    return result1.concat(result2)

    
};
