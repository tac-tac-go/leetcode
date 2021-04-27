/*
 * @lc app=leetcode id=657 lang=javascript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let U = (moves.match(new RegExp("U","g")) || []).length;
  let D = (moves.match(new RegExp("D","g")) || []).length;
  let R = (moves.match(new RegExp("R",'g')) || []).length;
  let L = (moves.match(new RegExp("L","g")) || []).length;

  return (U===D && R===L) ? true : false;
    
};
// @lc code=end

