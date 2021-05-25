/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    var one_len = s.split("0").map( v => v.length).reduce((a,b) => Math.max(a,b))
    var two_len = s.split("1").map( v => v.length).reduce((a,b) => Math.max(a,b))
    return one_len > two_len ? true : false;
  
};
