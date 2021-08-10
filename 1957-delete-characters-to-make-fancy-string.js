/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    var result=""
    for(let i=0;i<s.length-2;i++){
        var str_len = Array.from(new Set(s.slice(i,i+3)))
        if(str_len.length==1){
            continue
        }else{
            result+=s[i]            
        }
    }
    return result+s.slice(s.length-2)
};
