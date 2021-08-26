/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let p;
    let p_i
    let i=0;
    let result=[];
    while(i<s.length){
        if(s[i]==s[i+1] && s[i+1]==s[i+2]){
            p = s[i]
            p_i = i
            i = i+3
            while(p == s[i]){
                i+=1
            }
            result.push([p_i,i-1])
        }else{
            i+=1
        }
    }
    return result;
};
