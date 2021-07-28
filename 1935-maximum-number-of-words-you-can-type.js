/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    var text_array = text.split(" ");
    var replace = "["+brokenLetters+"]";
    var re = new RegExp(replace,"g");
    var count=0
    for(let text_i of text_array){
        if(!text_i.match(re)){
            count+=1
        }
    }
    return count
};
