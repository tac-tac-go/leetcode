/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    while(s.indexOf("AB")!=-1 || s.indexOf("CD")!=-1){
        s = s.replace(/AB/g,"").replace(/CD/g,"")
    }
    return s.length
};
