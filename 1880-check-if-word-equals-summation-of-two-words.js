/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let prefixes = []
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        prefixes.push(String.fromCharCode([i]))
    }
    
    let result=[]
    for(let word of [firstWord, secondWord, targetWord]){
        let string = ''
        for(let letter of word){
            string+=prefixes.indexOf(letter)
        }
        result.push(Number(string))
    }
    return result[0]+result[1]==result[2] ? true : false;
    
};
