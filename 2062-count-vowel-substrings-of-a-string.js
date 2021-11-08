/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    let array2 = ['a','i','u','e','o']
    array2.sort()
    let count=0
    for(let i=0;i<word.length-4;i++){
        for(let j=4;j<word.length;j++){
            let array1 = Array.from(new Set(word.slice(i,j+1).split("")))
            array1.sort()
            if(JSON.stringify(array1)==JSON.stringify(array2)){
                count+=1
            }
        }
    }
    return count
};
