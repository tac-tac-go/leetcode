/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x<0){
    let value = Number("-".concat(String(x).slice(1).split("").reverse().join("")));
    if (-(2**31) <= value && value<=(2**31)-1){
      return value;
    }else {
      return 0;
    }
  }else{
    let value = Number(String(x).split("").reverse().join(""));
    if (-(2**31) <= value && value<=(2**31)-1){
      return value;
    }else {
      return 0;
    }
  }

  
};
// @lc code=end

