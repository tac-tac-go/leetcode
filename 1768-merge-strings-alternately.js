/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let min = Math.min(word1.length,word2.length)
    let max = Math.max(word1.length,word2.length)
    if(word1.length==min && word2.length!=min){word1+="!".repeat(max-min)}
    if(word1.length!=min && word2.length==min){word2+="!".repeat(max-min)}
    
    let result = ""
    for(let i=0;i<word1.length;i++){
        result+=word1[i]
        result+=word2[i]
    }
    return result.replace(/!/g,"");
};
