/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
let findOcurrences = function(text, first, second) {
    let text_a = text.split(" ");
    let result = []
    for(let i=0;i<text_a.length-1;i++){
        if(text_a[i]==first && text_a[i+1]==second){
            if(i+2<text_a.length){
                result.push(text_a[i+2])      
            }
        }
    }
    return result
};
