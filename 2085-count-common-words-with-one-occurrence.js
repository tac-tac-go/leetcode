/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let count=0
    for(let v of words1){
        if(words1.indexOf(v)!==-1 && words2.indexOf(v)!==-1){
            
            if(words1.indexOf(v)==words1.lastIndexOf(v) && words2.indexOf(v)==words2.lastIndexOf(v)){
                count+=1   
            }
        }
    }
    return count
};
