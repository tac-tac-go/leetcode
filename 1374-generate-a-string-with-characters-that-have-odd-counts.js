/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    var alpha = "ab".split("")
    if(n%2==0){
        return alpha[0].repeat(n-1).concat(alpha[1])
    }else{
        return alpha[0].repeat(n)
    }
};
