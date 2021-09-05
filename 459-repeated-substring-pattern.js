/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if(s.length<2){return false}
    for(let i=0;i<Math.ceil(s.length/2);i++){
        var text = s.slice(0,i+1)
        var text_l = s.length/text.length
        if(text.repeat(text_l)==s){return true}
    }
    return false
};
