/*
 * @lc app=leetcode id=728 lang=javascript
 *
 * [728] Self Dividing Numbers
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result=[];
    for(let i=left;i<=right;i++){
      search = String(i);
      let flag=false;
      for(let j=0;j<search.length;j++){
        if(i%Number(search[j])==0){
          flag=true;
        }else{
          flag=false;
          break;
        }
      }
      if(flag){
        result.push(i);
      }
    }
    return result;
};
// @lc code=end