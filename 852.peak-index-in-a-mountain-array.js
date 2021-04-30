/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let max = arr.reduce((a,b) =>{
      return Math.max(a,b);
    });
    let max_i = arr.indexOf(max);
    return max_i;
};
// @lc code=end

