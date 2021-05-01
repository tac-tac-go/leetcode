/*
 * @lc app=leetcode id=1446 lang=javascript
 *
 * [1446] Consecutive Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var maxPower = function(s) {
  let count=1;
  let max_length=1
  for(let i=0;i<s.length-1;i++){
    if(s[i]===s[i+1]){
      count+=1;
      if(count>max_length){
        max_length=count
      }
    }else{
      count=1
    }
  }
  return max_length;
};
// @lc code=end

