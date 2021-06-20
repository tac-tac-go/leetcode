/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return nums.filter(v => nums.indexOf(v)!==nums.lastIndexOf(v)).length>0 ? true : false;
};
