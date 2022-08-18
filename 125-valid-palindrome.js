/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   var a = s.split("").reverse().join("").toLowerCase().replace(/[^a-z0-9]/gi,""); 
   var b = s.toLowerCase().replace(/[^a-z0-9]/gi,"");
    return a==b ? true : false;
};
