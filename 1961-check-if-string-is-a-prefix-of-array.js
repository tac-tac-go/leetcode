/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let flag=false
    for(let i=1;i<=words.length;i++){
        if(words.slice(0,i).join("")==s){
            flag=true
            break
        }
    }
    return flag ? true : false;
};
