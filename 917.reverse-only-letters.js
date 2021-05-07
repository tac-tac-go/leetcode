/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let data = S.split("");
    var indexs = []
    data.map((value,index,array) => {
      if(value=="-"){
        indexs.push(index);
      }
    })
    console.log(indexs);
};
// @lc code=end

