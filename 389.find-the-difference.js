/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
  let s_l = s.split("").sort();
  let t_l = t.split("").sort();
  for(let i=0;i<s_l.length;i++){
      if(t_l[i]!=s_l[i]){
          return t_l[i];
      }
  }
  return t_l.slice(-1)[0];
};
// @lc code=end

