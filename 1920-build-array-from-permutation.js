/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    var result = []
    for(const value of nums){
        result.push(nums[value])
    }
    return result
};
