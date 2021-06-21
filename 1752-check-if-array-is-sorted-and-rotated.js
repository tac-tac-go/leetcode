/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    var nums_c = [...nums]
    nums_c.sort((a,b) => a-b)
    nums_c = nums_c.join(",")
    var nums = nums.concat(nums).join(",");
    return nums.indexOf(nums_c)!==-1 ? true : false;
};
