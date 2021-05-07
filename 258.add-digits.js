/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
  while(String(num).length>1){
      num = String(num).split("").map(Number).reduce((sum, element) => sum + element, 0)
  }
  return num
};
// @lc code=end

