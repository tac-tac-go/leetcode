/*
 * @lc app=leetcode id=821 lang=javascript
 *
 * [821] Shortest Distance to a Character
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let s_l = s.split("");
    var indexs=[];
    s_l.map(function(value,index,array){
      if(value==c){
        indexs.push(index);
      }
    });
    
    let min_i = [];
    for(let i=0;i<s.length;i++){
      let result = indexs.map(function(a){
        return Math.abs(a-i);
      });
      min_i.push(Math.min.apply(null,result));
    };
    return min_i;

};
// @lc code=end

