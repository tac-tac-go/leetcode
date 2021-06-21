/**
 * @param {string} s
 * @return {number}
 */

var secondHighest = function(s) {
    var s = s.split("")   
    let array = [...new Set(s.filter(v => !isNaN(v)))].map(Number);
    array.sort((a,b) => b-a)
    return array.length>1 ? array[1]: -1;
};
