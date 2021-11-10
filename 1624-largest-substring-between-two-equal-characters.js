/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let alpha = "abcdefghijklnmopqrstuvwxyz".split("")
    s = s.split("")
    let s_n = Array.from(new Set(s))
    let max = -1
    for(let v1 of s_n){
        let array2 = []
        for(let i=0;i<s.length;i++){
            if(s[i]==v1){
                array2.push(i)
            }
        }
        if(array2.length>=2){
            max = Math.max(max,array2.slice(-1)[0]-array2.slice(0,1)[0]-1)
        }
    }
    return max
    
};
