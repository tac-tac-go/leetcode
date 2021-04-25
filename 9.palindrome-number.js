/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = String(x)
  if (x.length%2==0){
    return x.slice(0,x.length/2)
          ==x.slice(x.length/2).split("").reverse().join("")
          ? true : false;
  }else {
    return x.slice(0,x.length/2)
          ==x.slice(x.length/2+1).split("").reverse().join("")
          ? true : false;
  }
};
// @lc code=end
