/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const result = nums.filter(x => 
      nums.indexOf(x) ===nums.lastIndexOf(x)
    );
    return result[0]
};
// @lc code=end

