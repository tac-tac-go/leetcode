/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = nums.map(num => num**2);
    let result_s = result.sort((a,b)=>{
      if(a<b) return -1;
      if(a>b) return 1;
      return 0;
    });
    return result_s;
};
// @lc code=end

