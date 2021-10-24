/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let searchIndex = word.indexOf(ch)
    if(searchIndex !=-1){
    return word.slice(0,searchIndex+1).split("").reverse().join("")+word.slice(searchIndex+1)
    }else{
        return word
    }
};
