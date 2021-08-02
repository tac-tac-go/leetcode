/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    var count=0;
    var result=[]
    for(let i=0;i<s1.length;i++){
        if(s1[i]!=s2[i]){
            count+=1
            result.push([s1[i],s2[i]])
        }
    }
    if(result.length==0){return true}
    if(result.length!=2){return false}
    var result1 = result[0]
    var result2 = result[1]
    return result1[1]==result2[0] && result1[0]==result2[1] ? true : false;

};
