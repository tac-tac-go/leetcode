/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
  let x_s = x.toString(2);
  let y_s = y.toString(2);
  x_s = x_s.padStart( Math.max(x_s.length,y_s.length), '0');
  y_s = y_s.padStart( Math.max(x_s.length,y_s.length), '0');
  let count=0;
  for(let i=0;i<x_s.length;i++){
    if(x_s[i]!=y_s[i]){
      count+=1;
    }
  }
  return count;
};
// @lc code=end

