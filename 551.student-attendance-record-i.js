/*
 * @lc app=leetcode id=551 lang=javascript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let a_c = (s.match(/A/g) || []).length;
  let l_c = (s.match(/L{3,}/g) || []).length;
  if(a_c<2 && l_c<1){return true}
  else{return false} 
};
// @lc code=end

