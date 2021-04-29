/*
 * @lc app=leetcode id=961 lang=javascript
 *
 * [961] N-Repeated Element in Size 2N Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let existsSame = 0;
    A.forEach(function(val){
      let firstIndex = A.indexOf(val);
      let lastIndex = A.lastIndexOf(val);
      if(firstIndex!=lastIndex){
        existsSame = firstIndex;
      }
    });
    return A[existsSame];
};
// @lc code=end

