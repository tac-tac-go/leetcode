/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let w_s = s.split(' ');
    let result=""
    for(let i=0;i<w_s.length-1;i++){
      result=result+w_s[i].split("").reverse().join("")+" ";
    }
    result=result+w_s.slice(-1)[0].split("").reverse().join("")
    return result;
};
// @lc code=end

