/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var result=[];
    nums = nums.map(String);
    for(let i=0;i<nums.length/2;i++){
        result.push(nums[i]);
        result.push(nums[i+n]);
    }
    return result;
};
