/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    var sum = nums.filter( v => nums.indexOf(v) == nums.lastIndexOf(v))
    return sum.length>0 ? sum.reduce((a,b) => a+b) : 0
};
