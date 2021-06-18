/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    return String(n).split("").map(Number).reduce((a,b) => a*b) - String(n).split("").map(Number).reduce((a,b) => a+b)
};
