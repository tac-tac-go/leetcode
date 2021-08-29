/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let result=[]
    for(let i=0;i<words.length;i++){
        for(let j=0;j<words.length;j++){
            if(i!=j){
                if(words[i].indexOf(words[j])!=-1){
                    result.push(words[j])
                }
            }
        }
    }
    return Array.from(new Set(result))
};
