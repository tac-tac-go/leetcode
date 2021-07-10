/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b) => a-b)
    var result1 = nums.slice(0,3).reduce((a,b) => a*b)
    var result2 = nums.slice(nums.length-3).reduce((a,b) => a*b)
    var result3 = nums.slice(0,1).concat(nums.slice(nums.length-2)).reduce((a,b) => a*b)
    var result4 = nums.slice(0,2).concat(nums.slice(nums.length-1)).reduce((a,b) => a*b)
    return Math.max(result1,result2,result3,result4)
};
