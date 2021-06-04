/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var abc = s.split("").join(".{0,}");
    reg = new RegExp(abc);
    return t.match(reg)!=null ? true : false;
      
};
