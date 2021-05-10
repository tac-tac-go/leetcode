/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
   const r_l = Array.from(Array(n+1), (v, k) => k)
   var nums = r_l.map(cal);
   return nums.slice(-1)[0];
    
};

var cal = (function(){
  var memoized = {};
  var fn = function (it) {
    if (it==0) return 0;
    if (it <= 2) return 1;
    if (!memoized[it]) memoized[it] = fn(it - 1) + fn(it - 2) + fn(it - 3);
    return memoized[it];
  }
  return fn;
})();


