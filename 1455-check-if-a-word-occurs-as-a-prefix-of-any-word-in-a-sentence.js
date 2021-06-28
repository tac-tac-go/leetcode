/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    var sentence_split = sentence.split(" ")
    for(let i=0;i<sentence_split.length;i++){
        if(sentence_split[i].startsWith(searchWord)){
            return i+1
        }
    }
    return -1
};
