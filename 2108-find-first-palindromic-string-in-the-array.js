/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let v of words){
        if(v==v.split("").reverse().join("")){
            return v
        }
    }
    return ''
};
