/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    return [...Array(n).keys()].map(v => v+1).filter( v => (v%3==0 || v%5==0 || v%7==0)).reduce((a,b) => a+b,0)
};
