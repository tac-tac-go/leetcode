/*
 * @lc app=leetcode id=832 lang=javascript
 *
 * [832] Flipping an Image
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let base = [];
    for(let i=0;i<image.length;i++){
      let result = image[i].reverse().map(function(e){
        return Number(!e);
      })
      base.push(result);
    }
    return base;
};
// @lc code=end

