/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    word = word.split(/[a-z]/).filter( v => v.length!=0).map( v => v.replace(/^0+/,""))
    word = new Set([...word])
    return Array.from(word).length;
};
